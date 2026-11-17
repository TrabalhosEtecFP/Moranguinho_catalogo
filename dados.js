// ============================================================
//  CARREGAMENTO DOS DADOS DO CARDÁPIO
//  1) Banco (Supabase)  ->  2) última cópia salva no navegador  ->  3) dados-padrao.js
// ============================================================
const CACHE_DADOS = "moranguinho-dados-v1";

async function lerSupabase() {
  const cfg = window.MORANGUINHO_CONFIG || {};
  if (!cfg.SUPABASE_URL || !cfg.SUPABASE_ANON_KEY) return null;
  const base = cfg.SUPABASE_URL.replace(/\/$/, "") + "/rest/v1/";
  const ctrl = new AbortController();
  const limite = setTimeout(() => ctrl.abort(), 7000);
  const cab = { apikey: cfg.SUPABASE_ANON_KEY, Authorization: "Bearer " + cfg.SUPABASE_ANON_KEY };
  try {
    const pegar = async (q) => {
      const r = await fetch(base + q, { headers: cab, signal: ctrl.signal });
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.json();
    };
    const [categorias, produtos, linhasConfig] = await Promise.all([
      pegar("categorias?select=*&order=ordem.asc"),
      pegar("produtos?select=*&ativo=eq.true&order=ordem.asc"),
      pegar("config?select=*"),
    ]);
    const config = {};
    linhasConfig.forEach((l) => { config[l.chave] = l.valor; });
    return { categorias, produtos, config };
  } finally {
    clearTimeout(limite);
  }
}

async function carregarDados() {
  let dados = null;
  try {
    dados = await lerSupabase();
    if (dados) {
      try { localStorage.setItem(CACHE_DADOS, JSON.stringify(dados)); } catch (_) { /* ok */ }
    }
  } catch (_) { /* tenta o plano B */ }

  if (!dados) {
    try { dados = JSON.parse(localStorage.getItem(CACHE_DADOS)); } catch (_) { /* ok */ }
  }
  if (!dados || !dados.categorias || !dados.produtos) dados = window.DADOS_PADRAO;
  return dados;
}

// Converte as linhas do banco no formato que o catálogo já usa
function montarCatalogo(dados) {
  const unidades = {}, nomes = {};
  const secoes = dados.categorias
    .slice()
    .sort((a, b) => a.ordem - b.ordem)
    .map((c) => {
      unidades[c.id] = c.unidade || "";
      nomes[c.id] = c.nome;
      const itens = dados.produtos
        .filter((p) => p.categoria_id === c.id)
        .sort((a, b) => a.ordem - b.ordem)
        .map((p) => [
          p.nome,
          p.descricao || "",
          p.preco_antigo == null ? null : Number(p.preco_antigo),
          Number(p.preco),
          p.imagem || "",
        ]);
      return { id: c.id, nome: c.nome, nota: c.nota || "", itens };
    })
    .filter((s) => s.itens.length > 0);   // categoria sem produtos não aparece
  return { secoes, unidades, nomes };
}
