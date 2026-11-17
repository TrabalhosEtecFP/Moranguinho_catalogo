// ============================================================
//  CONFIGURAÇÃO
//  Os produtos, preços, categorias e textos vêm do banco (veja dados.js).
//  Para editar: use o painel em /admin (nada de mexer neste arquivo).
// ============================================================
const IMG_DIR = "bolos/";
const IMG_FALLBACK = "bolos/placeholder.jpg";
let WHATSAPP_NUMERO = "5515997275109";

// Preenchidos em iniciar() depois de carregar os dados
let PRODUTOS = [];
let UNIDADES = {};
let NOMES_CATEGORIA = {};

// Opcional: "NOME": "frase de destaque" para o story de um produto.
const FRASES_STORY = {};

// Foto do produto: URL completa (enviada pelo painel) ou nome de arquivo da pasta /bolos
function urlImagem(img) {
  if (!img) return "";
  return /^https?:\/\//i.test(img) ? img : IMG_DIR + img;
}

// ============================================================
//  HELPERS
// ============================================================
const NOME_LOJA = "Moranguinho Bolos & Doces";
const MENSAGEM_GERAL = `Olá! Vim pelo cardápio da ${NOME_LOJA} e gostaria de fazer uma encomenda.`;

function formatarReal(valor) {
  return "R$ " + Number(valor).toFixed(2).replace(".", ",");
}

// Remove acentos e põe em minúsculas ("Limão" -> "limao"), para a busca achar com ou sem acento.
function semAcento(texto) {
  return String(texto).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function escaparHtml(texto) {
  return String(texto).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

function linkWhatsApp(texto) {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;
}

function montarLinkWhatsApp(nome, preco, categoriaId) {
  const unidade = UNIDADES[categoriaId] ? ` (${UNIDADES[categoriaId]})` : "";
  const texto =
    `Olá! Vim pelo cardápio da ${NOME_LOJA} e gostaria de encomendar: ` +
    `*${nome}* — ${formatarReal(preco)}${unidade}. Pode me ajudar?`;
  return linkWhatsApp(texto);
}

// Dados de cada card (nome, preço, imagem...) ficam aqui, fora do HTML.
const dadosCard = new WeakMap();
const estado = { secoes: [], ultimoFoco: null };

// ============================================================
//  RENDERIZAÇÃO DO CATÁLOGO
// ============================================================
function criarCard(secao, nome, descricao, precoTabela, preco, foto) {
  const imagem = urlImagem(foto) || IMG_FALLBACK;
  const nomeSeguro = escaparHtml(nome);

  const card = document.createElement("article");
  card.className = "card";
  card.tabIndex = 0;
  card.setAttribute("aria-haspopup", "dialog");
  card.dataset.categoria = secao.id;
  card.dataset.busca = semAcento(`${nome} ${descricao || ""} ${secao.nome}`);

  card.innerHTML = `
    <div class="card-media" data-expandido="true">
      <img class="card-img" src="${escaparHtml(encodeURI(imagem))}" alt="${nomeSeguro}"
           loading="lazy" decoding="async" width="400" height="300">
      <span class="card-img-fallback" aria-hidden="true">🎂</span>
      <button type="button" class="toggle-img hide-img"
              aria-label="Ocultar imagem de ${nomeSeguro}" title="Ocultar imagem">👁</button>
      <button type="button" class="toggle-img show-img"
              aria-label="Mostrar imagem de ${nomeSeguro}" title="Mostrar imagem">🔄</button>
    </div>
    <h3>${nomeSeguro}</h3>
    ${descricao ? `<p>${escaparHtml(descricao)}</p>` : ""}
    <div class="price">
      <span class="now">${formatarReal(preco)}</span>
      ${precoTabela ? `<span class="was">${formatarReal(precoTabela)}</span>` : ""}
      <span class="unit">${UNIDADES[secao.id] || ""}</span>
    </div>`;

  dadosCard.set(card, { nome, descricao: descricao || "", precoTabela, preco, categoriaId: secao.id, imagem });
  return card;
}

function renderizarCatalogo() {
  const catalogoDiv = document.getElementById("catalog");
  const fragmento = document.createDocumentFragment();
  estado.secoes = [];

  PRODUTOS.forEach((secao) => {
    const sectionEl = document.createElement("section");
    sectionEl.dataset.categoria = secao.id;
    sectionEl.setAttribute("aria-labelledby", `titulo-${secao.id}`);
    sectionEl.innerHTML = `
      <div class="sec-head">
        <h2 id="titulo-${secao.id}">${escaparHtml(secao.nome)}</h2>
        <span class="count">${secao.itens.length} itens</span>
      </div>
      <p class="sec-note">${escaparHtml(secao.nota)}</p>
      <div class="grid"></div>`;

    const grid = sectionEl.querySelector(".grid");
    const cards = secao.itens.map(([nome, descricao, precoTabela, preco, foto]) => {
      const card = criarCard(secao, nome, descricao, precoTabela, preco, foto);
      grid.appendChild(card);
      return card;
    });

    estado.secoes.push({ el: sectionEl, cards, contador: sectionEl.querySelector(".count") });
    fragmento.appendChild(sectionEl);
  });

  catalogoDiv.replaceChildren(fragmento);
}

function atualizarContadores() {
  const total = PRODUTOS.reduce((t, c) => t + c.itens.length, 0);

  const elTotal = document.getElementById("totalProdutos");
  if (elTotal) elTotal.textContent = total;
  const elCats = document.getElementById("totalCategorias");
  if (elCats) elCats.textContent = PRODUTOS.length;

  // Número de itens dentro de cada botão de categoria
  document.querySelectorAll(".chip").forEach((chip) => {
    const id = chip.dataset.category;
    const secao = PRODUTOS.find((c) => c.id === id);
    const n = id === "all" ? total : secao ? secao.itens.length : 0;
    chip.insertAdjacentHTML("beforeend", ` <small class="chip-n">${n}</small>`);
  });
}

// ============================================================
//  FILTRO E BUSCA
// ============================================================
function filtrarProdutos() {
  const termos = semAcento(document.getElementById("searchInput").value.trim())
    .split(/\s+/)
    .filter(Boolean);
  const categoriaAtiva = document.querySelector(".chip[aria-pressed='true']").dataset.category;

  let totalVisivel = 0;

  estado.secoes.forEach(({ el, cards, contador }) => {
    let visiveisNaSecao = 0;

    cards.forEach((card) => {
      const buscaOk = termos.every((t) => card.dataset.busca.includes(t));
      const categoriaOk = categoriaAtiva === "all" || card.dataset.categoria === categoriaAtiva;
      const exibir = buscaOk && categoriaOk;

      card.style.display = exibir ? "" : "none";
      if (exibir) visiveisNaSecao++;
    });

    totalVisivel += visiveisNaSecao;
    el.style.display = visiveisNaSecao > 0 ? "" : "none";
    contador.textContent = `${visiveisNaSecao} ${visiveisNaSecao === 1 ? "item" : "itens"}`;
  });

  document.getElementById("emptyMessage").hidden = totalVisivel > 0;

  const status = document.getElementById("resultStatus");
  if (status) status.textContent = `${totalVisivel} ${totalVisivel === 1 ? "produto encontrado" : "produtos encontrados"}`;
}

function ativarFiltros() {
  const input = document.getElementById("searchInput");
  let temporizador;
  input.addEventListener("input", () => {
    clearTimeout(temporizador);
    temporizador = setTimeout(filtrarProdutos, 120);
  });

  const chips = document.querySelectorAll(".chip");
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.setAttribute("aria-pressed", "false"));
      chip.setAttribute("aria-pressed", "true");
      filtrarProdutos();
    });
  });
}

// ============================================================
//  IMAGENS QUE FALHAM (foto ausente -> placeholder -> emoji)
// ============================================================
function ativarFallbackDeImagem() {
  // 'error' não "borbulha", por isso usamos a fase de captura no document.
  document.addEventListener("error", (e) => {
    const img = e.target;
    if (!(img instanceof HTMLImageElement)) return;
    if (!img.classList.contains("card-img") && img.id !== "storyImg") return;

    const jaEhPlaceholder = img.src.includes(encodeURI(IMG_FALLBACK));
    if (!jaEhPlaceholder && img.dataset.fallbackTentado !== "true") {
      img.dataset.fallbackTentado = "true";
      img.src = encodeURI(IMG_FALLBACK);
      return;
    }
    const caixa = img.closest(".card-media, .story-media");
    if (caixa) caixa.classList.add("sem-foto");
  }, true);
}

// ============================================================
//  CLIQUES NO CATÁLOGO (ocultar foto / abrir story)
// ============================================================
function ativarCliquesDoCatalogo() {
  const catalogo = document.getElementById("catalog");

  catalogo.addEventListener("click", (e) => {
    const botao = e.target.closest(".toggle-img");
    if (botao) {
      const media = botao.closest(".card-media");
      if (media) media.dataset.expandido = botao.classList.contains("hide-img") ? "false" : "true";
      return;
    }
    const card = e.target.closest(".card");
    if (card) abrirStory(card);
  });

  // Teclado: Enter ou Espaço no card abre o detalhe
  catalogo.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("card")) {
      e.preventDefault();
      abrirStory(e.target);
    }
  });
}

// ============================================================
//  MODAL "STORY"
// ============================================================
function abrirStory(card) {
  const p = dadosCard.get(card);
  if (!p) return;

  const modal = document.getElementById("storyModal");
  estado.ultimoFoco = card;

  document.getElementById("storyNome").textContent = p.nome;
  document.getElementById("storyDescricao").textContent = p.descricao;
  document.getElementById("storyBadge").textContent = NOMES_CATEGORIA[p.categoriaId] || "Produto";
  document.getElementById("storyPrecoNow").textContent = formatarReal(p.preco);
  document.getElementById("storyUnit").textContent = UNIDADES[p.categoriaId] || "";

  const wasEl = document.getElementById("storyPrecoWas");
  wasEl.textContent = p.precoTabela ? formatarReal(p.precoTabela) : "";
  wasEl.style.display = p.precoTabela ? "" : "none";

  const frase = FRASES_STORY[p.nome] || "";
  const fraseEl = document.getElementById("storyFrase");
  fraseEl.textContent = frase;
  fraseEl.style.display = frase ? "block" : "none";

  const imgEl = document.getElementById("storyImg");
  delete imgEl.dataset.fallbackTentado;
  modal.querySelector(".story-media").classList.remove("sem-foto");
  imgEl.alt = p.nome;
  imgEl.src = encodeURI(p.imagem);

  document.getElementById("storyCta").href = montarLinkWhatsApp(p.nome, p.preco, p.categoriaId);

  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.querySelector(".story-close").focus();

  // O botão "voltar" do celular fecha o modal em vez de sair do catálogo
  try { history.pushState({ story: true }, ""); } catch (_) { /* sem suporte: segue sem histórico */ }
}

function esconderStory() {
  const modal = document.getElementById("storyModal");
  if (modal.hidden) return;
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (estado.ultimoFoco) estado.ultimoFoco.focus({ preventScroll: true });
}

function fecharStory() {
  if (history.state && history.state.story) {
    history.back(); // o evento popstate esconde o modal
  } else {
    esconderStory();
  }
}

function ativarStory() {
  const modal = document.getElementById("storyModal");

  modal.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) fecharStory();
  });

  document.addEventListener("keydown", (e) => {
    if (modal.hidden) return;
    if (e.key === "Escape") {
      fecharStory();
    } else if (e.key === "Tab") {
      // Mantém o foco do teclado dentro do modal
      const focaveis = modal.querySelectorAll("a[href], button:not([disabled])");
      if (!focaveis.length) return;
      const primeiro = focaveis[0];
      const ultimo = focaveis[focaveis.length - 1];
      if (e.shiftKey && document.activeElement === primeiro) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primeiro.focus();
      }
    }
  });

  window.addEventListener("popstate", esconderStory);
}

// ============================================================
//  WHATSAPP GERAL (telefone no topo da página)
// ============================================================
function configurarWhatsAppGeral() {
  document.querySelectorAll("[data-whatsapp-geral]").forEach((a) => {
    a.href = linkWhatsApp(MENSAGEM_GERAL);
  });
}

// ============================================================
//  INICIALIZAÇÃO
// ============================================================
// Textos do site vindos do banco (título, rodapé, lojas, WhatsApp...)
function aplicarTextos(config) {
  if (config.whatsapp_numero) WHATSAPP_NUMERO = config.whatsapp_numero.replace(/\D/g, "");
  document.querySelectorAll("[data-config]").forEach((el) => {
    const v = config[el.dataset.config];
    if (v !== undefined && v !== "") el.textContent = v;
  });
  if (config.titulo) document.title = "Cardápio — " + config.titulo;
}

// Botões de filtro, um por categoria
function criarFiltros() {
  const box = document.getElementById("categoryChips");
  box.replaceChildren();
  const botao = (id, texto, ativo) => {
    const b = document.createElement("button");
    b.className = "chip";
    b.dataset.category = id;
    b.setAttribute("aria-pressed", ativo ? "true" : "false");
    b.textContent = texto;
    box.appendChild(b);
  };
  botao("all", "Todos", true);
  PRODUTOS.forEach((s) => botao(s.id, s.nome, false));
}

async function iniciar() {
  const dados = await carregarDados();
  const cat = montarCatalogo(dados);
  PRODUTOS = cat.secoes;
  UNIDADES = cat.unidades;
  NOMES_CATEGORIA = cat.nomes;
  aplicarTextos(dados.config || {});

  ativarFallbackDeImagem();
  criarFiltros();
  renderizarCatalogo();
  atualizarContadores();
  ativarCliquesDoCatalogo();
  ativarStory();
  ativarFiltros();
  configurarWhatsAppGeral();
  filtrarProdutos();
}

document.addEventListener("DOMContentLoaded", iniciar);
