// ============================================================
//  CONFIGURAÇÃO DE IMAGENS
// ============================================================
const IMG_DIR = "bolos/";
const IMG_FALLBACK = "bolos/placeholder.jpg";
const WHATSAPP_NUMERO = "5515997275109"; // (15) 99727-5109

// ============================================================
//  AJUSTES DE IMAGENS  —  EDITE AQUI PARA SOBRESCREVER O MAPA
// ============================================================
const AJUSTES_IMAGENS = {
  // Bolos de Chocolate
  "SUFLAIR":              "suflair.jpg",
  "BRIGADEIRO":           "brigadeiro original.jpg",
  "BRIGADEIRO II":        "brigadeiro 2.jpg",
  "TENTAÇÃO":             "tentação.jpg",
  "MOUSSE DE CHOCOLATE":  "mousse de chocolate.jpg",

  // Bolos Caseiros
  "MAÇÃ E NOZES GRANDE":  "maçã e nozes.webp",
  "MAÇÃ E CANELA GRANDE": "maçã e canela.jpg",
};

// ============================================================
//  FRASES DE DESTAQUE DO STORY
// ============================================================
const FRASES_STORY = {
  // Bolos de Chocolate
  "FEITIÇO DE LIMÃO":             "Um mergulho de puro chocolate a cada garfada.",
  "SURPRESA":                     "Para quem não abre mão de um chocolate intenso e marcante.",
  "TRUFADO MARACUJÁ E CHOCOLATE": "Cremosidade e sabor profundo em cada camada.",
  "FEITIÇO":                      "O queridinho de quem é apaixonado por chocolate.",
  "CHOCONOZES":                   "Irresistível do primeiro ao último pedaço.",
  "MOUSSE DE CHOCOLATE":          "Uma combinação clássica que nunca sai de moda.",
  "TRUFADO DE MORANGO":           "Um mergulho de puro chocolate a cada garfada.",
  "TRUFADO COM CEREJA":           "Para quem não abre mão de um chocolate intenso e marcante.",
  "TRUFADO BRANCO E PRETO":       "Cremosidade e sabor profundo em cada camada.",
  "TRUFADO":                      "O queridinho de quem é apaixonado por chocolate.",
  "TENTAÇÃO":                     "Irresistível do primeiro ao último pedaço.",
  "PRESTÍGIO II":                 "Uma combinação clássica que nunca sai de moda.",
  "MORANGUINHO":                  "Um mergulho de puro chocolate a cada garfada.",
  "LEITE NINHO TRUFADO":          "Para quem não abre mão de um chocolate intenso e marcante.",
  "CHOCOLATE COM LIMÃO":          "Cremosidade e sabor profundo em cada camada.",
  "CASADINHO COM MORANGO":        "O queridinho de quem é apaixonado por chocolate.",
  "BRIGADEIRO COM MORANGO":       "Irresistível do primeiro ao último pedaço.",
  "BOMBOM":                       "Uma combinação clássica que nunca sai de moda.",
  "SONHO DE VALSA":               "Um mergulho de puro chocolate a cada garfada.",
  "FLORESTA NEGRA":               "Para quem não abre mão de um chocolate intenso e marcante.",
  "BRIGADEIRO COM BABA-DE-MOÇA":  "Cremosidade e sabor profundo em cada camada.",
  "TORTA FRANCESA":               "O queridinho de quem é apaixonado por chocolate.",
  "SUFLAIR":                      "Irresistível do primeiro ao último pedaço.",
  "DIAMANTE":                     "Uma combinação clássica que nunca sai de moda.",
  "CHOCOLATE COM AMENDOIM":       "Um mergulho de puro chocolate a cada garfada.",
  "CASADINHO":                    "Para quem não abre mão de um chocolate intenso e marcante.",
  "BRIGANETE":                    "Cremosidade e sabor profundo em cada camada.",
  "BRIGADEIRO II":                "O queridinho de quem é apaixonado por chocolate.",
  "BRIGADEIRO":                   "Irresistível do primeiro ao último pedaço.",
  "ALPINO":                       "Uma combinação clássica que nunca sai de moda.",
  "AERADO DE MARACUJÁ":           "Um mergulho de puro chocolate a cada garfada.",
  "AERADO":                       "Para quem não abre mão de um chocolate intenso e marcante.",
  "PRESTÍGIO":                    "Cremosidade e sabor profundo em cada camada.",
  "CHOCOMOUSSE":                  "O queridinho de quem é apaixonado por chocolate.",
  "CHOCOCO":                      "Irresistível do primeiro ao último pedaço.",
  "DANETE":                       "Uma combinação clássica que nunca sai de moda.",

  // Bolos Brancos
  "ABACAXI COM DOCE DE LEITE":    "Leveza e delicadeza em cada fatia.",
  "COCADA CREMOSA":               "Um sabor suave que encanta logo na primeira mordida.",
  "MÁRMORE":                      "Perfeito para quem aprecia doces mais delicados.",
  "ABACAXI COM AMEIXA":           "Frescor e cremosidade em perfeita harmonia.",
  "ABACAXI COM COCO":             "Uma escolha elegante para qualquer ocasião especial.",
  "ABACAXI COM CREME":            "Suavidade que conquista até os paladares mais exigentes.",
  "AMENDOIM":                     "Leveza e delicadeza em cada fatia.",
  "DELÍCIA DE DOCE DE LEITE":     "Um sabor suave que encanta logo na primeira mordida.",
  "FLOCOS":                       "Perfeito para quem aprecia doces mais delicados.",
  "PAÇOCA":                       "Frescor e cremosidade em perfeita harmonia.",
  "PÊSSEGO":                      "Uma escolha elegante para qualquer ocasião especial.",
  "BEIJINHO":                     "Suavidade que conquista até os paladares mais exigentes.",
  "DONA FORMIGA":                 "Leveza e delicadeza em cada fatia.",
  "MARACUJÁ":                     "Um sabor suave que encanta logo na primeira mordida.",
  "MARACUJÁ COM COCO":            "Perfeito para quem aprecia doces mais delicados.",
  "OLHO DE SOGRA":                "Frescor e cremosidade em perfeita harmonia.",
  "TROPICAL":                     "Uma escolha elegante para qualquer ocasião especial.",
  "ALPINO DE MORANGO":            "Suavidade que conquista até os paladares mais exigentes.",
  "BABA-DE-MOÇA CROCANTE":        "Leveza e delicadeza em cada fatia.",
  "CONFETE":                      "Um sabor suave que encanta logo na primeira mordida.",
  "GALAK":                        "Perfeito para quem aprecia doces mais delicados.",
  "LEITE NINHO":                  "Frescor e cremosidade em perfeita harmonia.",
  "LIMÃO":                        "Uma escolha elegante para qualquer ocasião especial.",
  "OURO BRANCO":                  "Suavidade que conquista até os paladares mais exigentes.",
  "TRÊS AMORES":                  "Leveza e delicadeza em cada fatia.",
  "BABA-DE-MOÇA COM NOZES":       "Um sabor suave que encanta logo na primeira mordida.",
  "CREME COM MORANGO":            "Perfeito para quem aprecia doces mais delicados.",
  "FLORESTA BRANCA":              "Frescor e cremosidade em perfeita harmonia.",
  "LEITE NINHO COM MARACUJÁ":     "Uma escolha elegante para qualquer ocasião especial.",
  "MERENGUE":                     "Suavidade que conquista até os paladares mais exigentes.",
  "MORANGUINHO BRANCO":           "Leveza e delicadeza em cada fatia.",
  "NUVEM DE MORANGO":             "Um sabor suave que encanta logo na primeira mordida.",
  "NOZES":                        "Perfeito para quem aprecia doces mais delicados.",
  "TENTAÇÃO BRANCO":              "Frescor e cremosidade em perfeita harmonia.",
  "LEITE NINHO COM MORANGO":      "Uma escolha elegante para qualquer ocasião especial.",
  "TRUFADO BRANCO":               "Suavidade que conquista até os paladares mais exigentes.",
  "TRUFADO BRANCO COM MORANGO":   "Leveza e delicadeza em cada fatia.",
  "TRUFADO DE MARACUJÁ":          "Um sabor suave que encanta logo na primeira mordida.",

  // Bolos Especiais
  "BOLO ZERO AÇÚCAR":             "Uma criação exclusiva para ocasiões inesquecíveis.",
  "RED VELVET":                   "Sabor sofisticado que surpreende a cada mordida.",
  "RAFFAELO":                     "Feito para quem busca algo além do tradicional.",
  "OREO MOUSSE BRANCO":           "Uma experiência única de sabor e textura.",
  "NINHO COM AVELÃ":              "Ideal para comemorar com estilo.",
  "MEIO AMARGO":                  "Um verdadeiro destaque na mesa de qualquer festa.",
  "KITKAT (brigadeiro com morango)": "Uma criação exclusiva para ocasiões inesquecíveis.",
  "FERRERO ROCHER":               "Sabor sofisticado que surpreende a cada mordida.",
  "CAMAFEU DE NOZES":             "Feito para quem busca algo além do tradicional.",
  "CAMAFEU DE MORANGO":           "Uma experiência única de sabor e textura.",
  "BEM CASADO":                   "Ideal para comemorar com estilo.",

  // Bolos Caseiros
  "NEGA MALUCA GRANDE":           "Aquele sabor de infância que aquece o coração.",
  "MAÇÃ E NOZES GRANDE":          "Cheirinho de casa em cada fatia.",
  "MAÇÃ E CANELA GRANDE":         "Simples, aconchegante e cheio de carinho.",
  "LIMÃO E NOZES GRANDE":         "Perfeito para o café da tarde em boa companhia.",
  "LIMÃO GRANDE":                 "Receita caseira feita como antigamente.",
  "CHOCOLATE GRANDE":             "Sabor de vó, direto para a sua mesa.",
  "CENOURA GRANDE":               "Aquele sabor de infância que aquece o coração.",
  "CAFÉ GRANDE":                  "Cheirinho de casa em cada fatia.",
  "MILHO GRANDE":                 "Simples, aconchegante e cheio de carinho.",
  "LARANJA GRANDE":               "Perfeito para o café da tarde em boa companhia.",
  "FUBÁ GRANDE":                  "Receita caseira feita como antigamente.",
  "FORMIGUEIRO GRANDE":           "Sabor de vó, direto para a sua mesa.",

  // Bolos Recheados (avulsos)
  "BOLO KIT KAT":                 "Uma criação exclusiva para ocasiões inesquecíveis.",
  "BOLO — 100 G":                 "Experimente uma fatia do nosso sabor artesanal.",

  // Doces e Tortas
  "COXINHA DE MORANGO":           "Um docinho para adoçar qualquer dia.",
  "CAMAFEU DE NOZES":             "Feito para quem busca algo além do tradicional.",
  "CAMAFEU DE MORANGO":           "Uma experiência única de sabor e textura.",
  "PÃO DE MEL COCO":              "Um clássico da confeitaria, feito com carinho.",
  "PÃO DE MEL BRIGADEIRO":        "Um clássico da confeitaria, feito com carinho.",
  "PÃO DE MEL DOCE DE LEITE":     "Um clássico da confeitaria, feito com carinho.",
  "BRIGADEIRO — CENTO":           "O clássico que nunca sai de moda. Cento para sua festa.",
  "TORTA HOLANDESA":              "Uma escolha elegante para qualquer ocasião especial.",
};

// ============================================================
//  MAPA DE IMAGENS  —  MAPA PADRÃO
// ============================================================
const MAPA_IMAGENS = {
  // Bolos de Chocolate
  "FEITIÇO DE LIMÃO":              "feitiço de limaõ.webp",
  "SURPRESA":                      "surpresa.webp",
  "TRUFADO MARACUJÁ E CHOCOLATE":  "trufado maracuja e chocolate.webp",
  "FEITIÇO":                       "feitiço.webp",
  "CHOCONOZES":                    "choco nozes.webp",
  "MOUSSE DE CHOCOLATE":           "",
  "TRUFADO DE MORANGO":            "truado de morango.webp",
  "TRUFADO COM CEREJA":            "trufado com cereja.webp",
  "TRUFADO BRANCO E PRETO":        "trufado branco e preto.webp",
  "TRUFADO":                       "trufado de maracuja.webp",
  "TENTAÇÃO":                      "",
  "PRESTÍGIO II":                  "prestigio 2.webp",
  "MORANGUINHO":                   "moranguinho.webp",
  "LEITE NINHO TRUFADO":           "leite ninho trufado.webp",
  "CHOCOLATE COM LIMÃO":           "chocolate com limão.webp",
  "CASADINHO COM MORANGO":         "casadinho com morango.webp",
  "BRIGADEIRO COM MORANGO":        "brigadeiro com morango.webp",
  "BOMBOM":                        "bombom.webp",
  "SONHO DE VALSA":                "casado.webp",
  "FLORESTA NEGRA":                "floresta negra.webp",
  "BRIGADEIRO COM BABA-DE-MOÇA":   "",
  "TORTA FRANCESA":                "torta francesa.webp",
  "SUFLAIR":                       "",
  "DIAMANTE":                      "diamante.webp",
  "CHOCOLATE COM AMENDOIM":        "chocolate com amendoin.webp",
  "CASADINHO":                     "casado.webp",
  "BRIGANETE":                     "brigsnete.webp",
  "BRIGADEIRO II":                 "brigadeiro.webp",
  "BRIGADEIRO":                    "",
  "ALPINO":                        "alpino.webp",
  "AERADO DE MARACUJÁ":            "areado de maracuja.webp",
  "AERADO":                        "aerado.webp",
  "PRESTÍGIO":                     "prestigio.webp",
  "CHOCOMOUSSE":                   "chocomousse].webp",
  "CHOCOCO":                       "chococo.webp",
  "DANETE":                        "danete.webp",

  // Bolos Brancos
  "ABACAXI COM DOCE DE LEITE":     "abacaxi com doce de leite.jpg",
  "COCADA CREMOSA":                "cocada cremosa.jpg",
  "MÁRMORE":                       "marmore.webp",
  "ABACAXI COM AMEIXA":            "abacaxi com ameixa.jpg",
  "ABACAXI COM COCO":              "abacaxi com coco.jpg",
  "ABACAXI COM CREME":             "abacaxi com creme.jpg",
  "AMENDOIM":                      "amendoin.webp",
  "DELÍCIA DE DOCE DE LEITE":      "delicia de doce de leite.webp",
  "FLOCOS":                        "flocoa.webp",
  "PAÇOCA":                        "paçoca.webp",
  "PÊSSEGO":                       "pessego.webp",
  "BEIJINHO":                      "beijinho.jpg",
  "DONA FORMIGA":                  "dona formiga.jpg",
  "MARACUJÁ":                      "maracuja.webp",
  "MARACUJÁ COM COCO":             "maracuja com coco.jpg",
  "OLHO DE SOGRA":                 "olho de sogra.webp",
  "TROPICAL":                      "tropical.jpg",
  "ALPINO DE MORANGO":             "alpino de morango.webp",
  "BABA-DE-MOÇA CROCANTE":         "baba de moça crocante.jpg",
  "CONFETE":                       "confete.jpg",
  "GALAK":                         "galak.webp",
  "LEITE NINHO":                   "leite ninho.jpg",
  "LIMÃO":                         "limão.jpg",
  "OURO BRANCO":                   "ouro branco.webp",
  "TRÊS AMORES":                   "tres amores.jpg",
  "BABA-DE-MOÇA COM NOZES":        "baba de moça com nozes.jpg",
  "CREME COM MORANGO":             "creme com morango.webp",
  "FLORESTA BRANCA":               "floresta branca.jpg",
  "LEITE NINHO COM MARACUJÁ":      "leite ninho com maracuja.webp",
  "MERENGUE":                      "merengue.jpg",
  "MORANGUINHO BRANCO":            "moranguinho branco.webp",
  "NUVEM DE MORANGO":              "",
  "NOZES":                         "nozes.webp",
  "TENTAÇÃO BRANCO":               "tentaçao branco.webp",
  "LEITE NINHO COM MORANGO":       "ninho com morango.webp",
  "TRUFADO BRANCO":                "trufado branco.webp",
  "TRUFADO BRANCO COM MORANGO":    "trufado branco com morango.webp",
  "TRUFADO DE MARACUJÁ":           "trufado de maracuja.webp",

  // Bolos Especiais
  "BOLO ZERO AÇÚCAR":              "bolo zero açucar.webp",
  "RED VELVET":                    "red velvet.webp",
  "RAFFAELO":                      "raffaelo.webp",
  "OREO MOUSSE BRANCO":            "oreo mousse.webp",
  "NINHO COM AVELÃ":               "ninho.webp",
  "MEIO AMARGO":                   "meio amargo.webp",
  "KITKAT (brigadeiro com morango)": "bolo kitkat.jpg",
  "FERRERO ROCHER":                "ferrero roche.webp",
  "CAMAFEU DE NOZES":              "camafeu de nozes.webp",
  "CAMAFEU DE MORANGO":            "camafeu de morango.webp",
  "BEM CASADO":                    "bem casado.webp",

  // Bolos Caseiros
  "NEGA MALUCA GRANDE":            "",
  "MAÇÃ E NOZES GRANDE":           "maça e nozes.webp",
  "MAÇÃ E CANELA GRANDE":          "maça e canela.webp",
  "LIMÃO E NOZES GRANDE":          "",
  "LIMÃO GRANDE":                  "limão.webp",
  "CHOCOLATE GRANDE":              "bolo grlado de chocolate.jpg",
  "CENOURA GRANDE":                "cenoura grande.webp",
  "CAFÉ GRANDE":                   "",
  "MILHO GRANDE":                  "",
  "LARANJA GRANDE":                "laranja.webp",
  "FUBÁ GRANDE":                   "",
  "FORMIGUEIRO GRANDE":            "",

  // Bolos Recheados (avulsos)
  "BOLO KIT KAT":                  "bolo kit kat.webp",
  "BOLO — 100 G":                  "bolo 100 gramas.webp",

  // Doces e Tortas
  "COXINHA DE MORANGO":            "coxinha de morango.webp",
  "CAMAFEU DE NOZES":              "camafeu de nozes.webp",
  "CAMAFEU DE MORANGO":            "camafeu de morango.webp",
  "PÃO DE MEL COCO":               "pao de mel de coco.webp",
  "PÃO DE MEL BRIGADEIRO":         "pao de mel de brigadeiro.webp",
  "PÃO DE MEL DOCE DE LEITE":      "pao de mel doce de leite.webp",
  "BRIGADEIRO — CENTO":            "brigadeiro cento.webp",
  "TORTA HOLANDESA":               "torta holandesa.webp",
};

function caminhoImagem(nome) {
  if (Object.prototype.hasOwnProperty.call(AJUSTES_IMAGENS, nome)) {
    const arquivo = AJUSTES_IMAGENS[nome];
    return arquivo ? IMG_DIR + arquivo : "";
  }
  const arquivo = MAPA_IMAGENS[nome];
  if (!arquivo) return "";
  return IMG_DIR + arquivo;
}

// ============================================================
//  DADOS DOS PRODUTOS
// ============================================================
const PRODUTOS = [
  {
    id: "choc",
    nome: "Bolos de Chocolate",
    nota: "Massa de chocolate. Valores por quilo.",
    itens: [
      ["FEITIÇO DE LIMÃO", "Recheio de brigadeiro e mousse de limão, cobertura de chantilly.", 82.90, 79.90],
      ["SURPRESA", "Recheio de brigadeiro preto e brigadeiro de morango.", 79.90, 75.90],
      ["TRUFADO MARACUJÁ E CHOCOLATE", "Recheio de trufa de maracujá e trufa de chocolate.", 83.90, 81.90],
      ["FEITIÇO", "Recheio de trufa branca e brigadeiro, cobertura de mousse.", 82.90, 81.90],
      ["CHOCONOZES", "Recheio de doce de leite com nozes e trufa de chocolate.", 92.90, 89.90],
      ["MOUSSE DE CHOCOLATE", "Recheio e cobertura de mousse de chocolate.", 79.90, 75.90],
      ["TRUFADO DE MORANGO", "Trufa cremosa com pedaços de morango, cobertura de chantilly.", 95.90, 89.90],
      ["TRUFADO COM CEREJA", "Trufa cremosa com cereja, cobertura de chantilly.", 92.90, 89.90],
      ["TRUFADO BRANCO E PRETO", "Trufa cremosa branca e preta, cobertura de chantilly.", 99.90, 95.90],
      ["TRUFADO", "Trufa cremosa, cobertura de chantilly de chocolate.", 92.90, 89.90],
      ["TENTAÇÃO", "Cocada cremosa e pedaços de morango.", 88.90, 85.90],
      ["PRESTÍGIO II", "Cocada e trufa cremosa, cobertura de chantilly de chocolate.", 82.90, 79.90],
      ["MORANGUINHO", "Mousse de morango com pedaços de morango.", 89.90, 85.90],
      ["LEITE NINHO TRUFADO", "Mousse de leite ninho trufado e trufa cremosa.", 92.90, 89.90],
      ["CHOCOLATE COM LIMÃO", "Trufa de chocolate e mousse de limão.", 85.90, 82.90],
      ["CASADINHO COM MORANGO", "Brigadeiro e brigadeiro branco com pedaços de morango.", 85.90, 82.90],
      ["BRIGADEIRO COM MORANGO", "Brigadeiro com pedaços de morango, cobertura de chantilly.", 84.90, 82.90],
      ["BOMBOM", "Creme trufado branco com pedaços de ouro branco.", 99.90, 95.90],
      ["SONHO DE VALSA", "Creme de chocolate e mousse branco com pedaços de bombom.", 85.90, 82.90],
      ["FLORESTA NEGRA", "Mousse branco com pedaços de cereja.", 81.90, 79.90],
      ["BRIGADEIRO COM BABA-DE-MOÇA", "Brigadeiro cremoso e baba-de-moça, cobertura de chantilly.", 130.90, 120.90],
      ["TORTA FRANCESA", "Chocolate e brigadeiro cremoso, cobertura de chantilly.", 73.90, 71.90],
      ["SUFLAIR", "Creme de chocolate trufado com pedaços de chocolate.", 71.90, 69.90],
      ["DIAMANTE", "Mousse de chocolate e creme trufado com crocante.", 79.90, 77.90],
      ["CHOCOLATE COM AMENDOIM", "Mousse de chocolate e doce de leite com amendoim.", 75.90, 72.90],
      ["CASADINHO", "Brigadeiro e brigadeiro branco, cobertura de chantilly.", 75.90, 73.90],
      ["BRIGANETE", "Brigadeiro e creme danete, cobertura de chantilly.", 75.90, 73.90],
      ["BRIGADEIRO II", "Brigadeiro cremoso e mousse de chocolate.", 79.90, 75.90],
      ["BRIGADEIRO", "Brigadeiro cremoso, cobertura de chantilly de chocolate.", 74.90, 73.90],
      ["ALPINO", "Mousse branco e creme trufado, cobertura de mousse branco.", 79.90, 75.90],
      ["AERADO DE MARACUJÁ", "Mousse de maracujá e mousse de chocolate.", 79.90, 74.90],
      ["AERADO", "Mousse branco e mousse de chocolate aerado.", 72.90, 69.90],
      ["PRESTÍGIO", "Cocada cremosa, cobertura de chantilly de chocolate.", 73.90, 71.90],
      ["CHOCOMOUSSE", "Mousse de chocolate e creme danete.", 75.90, 71.90],
      ["CHOCOCO", "Creme danete e cocada cremosa.", 74.90, 71.90],
      ["DANETE", "Creme danete, cobertura de chantilly de chocolate.", 74.90, 71.90],
    ],
  },
  {
    id: "branco",
    nome: "Bolos Brancos",
    nota: "Massa branca. Valores por quilo.",
    itens: [
      ["ABACAXI COM DOCE DE LEITE", "Mousse branco e doce de leite com abacaxi.", 75.90, 71.90],
      ["COCADA CREMOSA", "Cocada cremosa, cobertura de marshmallow e flocos de coco.", 74.90, 71.90],
      ["MÁRMORE", "Creme danete, cobertura de marshmallow mesclado.", 74.90, 69.90],
      ["ABACAXI COM AMEIXA", "Mousse branco e doce de leite com abacaxi e ameixa.", 74.90, 72.90],
      ["ABACAXI COM COCO", "Cocada cremosa com abacaxi, cobertura de chantilly ou marshmallow.", 74.90, 71.90],
      ["ABACAXI COM CREME", "Creme de baunilha com abacaxi, cobertura de chantilly.", 74.90, 71.90],
      ["AMENDOIM", "Doce de leite e mousse branco com amendoim.", 74.90, 71.90],
      ["DELÍCIA DE DOCE DE LEITE", "Creme de baunilha com doce de leite.", 75.90, 71.90],
      ["FLOCOS", "Creme gelado com pedaços de chocolate.", 74.90, 69.90],
      ["PAÇOCA", "Mousse branco e doce de leite com paçoca.", 74.90, 71.90],
      ["PÊSSEGO", "Mousse branco com pedaços de pêssego.", 77.90, 73.90],
      ["BEIJINHO", "Beijinho cremoso, cobertura de chantilly e flocos de coco.", 77.90, 73.90],
      ["DONA FORMIGA", "Doce de leite e cocada, cobertura de chantilly.", 74.90, 71.90],
      ["MARACUJÁ", "Mousse de maracujá, cobertura de chantilly ou marshmallow.", 79.90, 75.90],
      ["MARACUJÁ COM COCO", "Mousse de maracujá e cocada cremosa.", 79.90, 75.90],
      ["OLHO DE SOGRA", "Doce de leite e cocada cremosa com ameixa.", 77.90, 73.90],
      ["TROPICAL", "Mousse branco e frutas da época (morango, pêssego, abacaxi).", 84.90, 82.90],
      ["ALPINO DE MORANGO", "Mousse branco com pedaços de morango e chocolate.", 84.90, 81.90],
      ["BABA-DE-MOÇA CROCANTE", "Baba-de-moça com crocante, cobertura de chantilly ou marshmallow.", 130.90, 120.90],
      ["CONFETE", "Brigadeiro branco e brigadeiro de morango.", 72.90, 71.90],
      ["GALAK", "Mousse branco trufado com pedaços de chocolate branco.", 84.90, 81.90],
      ["LEITE NINHO", "Mousse de leite ninho e pedaços de chocolate.", 82.90, 79.90],
      ["LIMÃO", "Mousse de limão e mousse branco.", 77.90, 73.90],
      ["OURO BRANCO", "Mousse branco com pedaços de bombom e creme.", 86.90, 82.90],
      ["TRÊS AMORES", "Doce de leite com ameixa, maçã e nozes.", 81.90, 79.90],
      ["BABA-DE-MOÇA COM NOZES", "Baba-de-moça com nozes, cobertura de chantilly e raspas.", 130.90, 120.90],
      ["CREME COM MORANGO", "Creme de baunilha com pedaços de morango.", 84.90, 81.90],
      ["FLORESTA BRANCA", "Mousse branco com cereja, cobertura de chantilly e raspas.", 84.90, 81.90],
      ["LEITE NINHO COM MARACUJÁ", "Mousse de leite ninho e mousse de maracujá.", 84.90, 81.90],
      ["MERENGUE", "Morango, suspiro e creme gelado, cobertura de marshmallow.", 79.90, 75.90],
      ["MORANGUINHO BRANCO", "Mousse de morango e mousse branco com pedaços de morango.", 84.90, 82.90],
      ["NUVEM DE MORANGO", "Creme gelado com morango e brigadeiro branco.", 86.90, 84.90],
      ["NOZES", "Doce de leite e mousse branco com nozes.", 86.90, 82.90],
      ["TENTAÇÃO BRANCO", "Cocada com pedaços de morango, cobertura de chantilly.", 89.90, 85.90],
      ["LEITE NINHO COM MORANGO", "Mousse branco de leite ninho com pedaços de morango.", 94.90, 89.90],
      ["TRUFADO BRANCO", "Trufa branca cremosa, cobertura de chantilly e raspas.", 99.90, 95.90],
      ["TRUFADO BRANCO COM MORANGO", "Trufa branca cremosa com pedaços de morango.", 99.90, 95.90],
      ["TRUFADO DE MARACUJÁ", "Trufa de maracujá, cobertura de chantilly e raspas.", 93.90, 89.90],
    ],
  },
  {
    id: "esp",
    nome: "Bolos Especiais",
    nota: "Linha premium. Valores por quilo.",
    itens: [
      ["BOLO ZERO AÇÚCAR", "Encomenda com 3 dias de antecedência.", 107.90, 105.90],
      ["RED VELVET", "Massa vermelha, recheio e cobertura de creme branco.", 83.90, 81.90],
      ["RAFFAELO", "Massa branca, creme de coco com amêndoas.", 88.90, 85.90],
      ["OREO MOUSSE BRANCO", "Pedaços de oreo e creme trufado.", 83.90, 81.90],
      ["NINHO COM AVELÃ", "Massa de chocolate, mousse de leite ninho e avelã.", 87.90, 85.90],
      ["MEIO AMARGO", "Massa de chocolate, recheio e cobertura de trufa amarga.", 87.90, 85.90],
      ["KITKAT (brigadeiro com morango)", "Recheio a escolher, cobertura de ganache e KitKat.", 92.90, 89.90],
      ["FERRERO ROCHER", "Massa de chocolate, creme trufado com Nutella e avelã.", 87.90, 85.90],
      ["CAMAFEU DE NOZES", "Massa de chocolate, camafeu de nozes e mousse.", 87.90, 85.90],
      ["CAMAFEU DE MORANGO", "Massa de chocolate, brigadeiro branco com morango.", 92.90, 89.90],
      ["BEM CASADO", "Doce de leite, cobertura de chantilly e gotas de chocolate.", 88.90, 85.90],
    ],
  },
  {
    id: "cas",
    nome: "Bolos Caseiros",
    nota: "Tamanho grande, preço por unidade.",
    itens: [
      ["NEGA MALUCA GRANDE", "Calda ou cobertura de brigadeiro por + R$ 8,00.", 45.00, 43.00],
      ["MAÇÃ E NOZES GRANDE", "", 45.00, 43.00],
      ["MAÇÃ E CANELA GRANDE", "", 45.00, 43.00],
      ["LIMÃO E NOZES GRANDE", "", 45.00, 43.00],
      ["LIMÃO GRANDE", "", 45.00, 43.00],
      ["CHOCOLATE GRANDE", "", 45.00, 43.00],
      ["CENOURA GRANDE", "", 45.00, 43.00],
      ["CAFÉ GRANDE", "", 45.00, 43.00],
      ["MILHO GRANDE", "", 42.90, 40.00],
      ["LARANJA GRANDE", "", 42.90, 40.90],
      ["FUBÁ GRANDE", "", 42.90, 40.00],
      ["FORMIGUEIRO GRANDE", "", 45.00, 40.00],
    ],
  },
  {
    id: "rech",
    nome: "Bolos Recheados (avulsos)",
    nota: "Itens listados fora do menu por quilo.",
    itens: [
      ["BOLO KIT KAT", "Bolo pronto, unidade.", 89.90, 88.90],
      ["BOLO — 100 G", "Fatia/porção de 100 gramas.", 9.90, 8.50],
    ],
  },
  {
    id: "doces",
    nome: "Doces e Tortas",
    nota: "Venda por unidade, salvo indicação.",
    itens: [
      ["COXINHA DE MORANGO", "Unidade.", 12.90, 9.90],
      ["CAMAFEU DE NOZES", "Unidade.", 12.90, 11.90],
      ["CAMAFEU DE MORANGO", "Unidade.", 13.90, 11.90],
      ["PÃO DE MEL COCO", "Unidade.", 9.90, 8.90],
      ["PÃO DE MEL BRIGADEIRO", "Unidade.", 9.90, 8.90],
      ["PÃO DE MEL DOCE DE LEITE", "Unidade.", 9.90, 8.90],
      ["BRIGADEIRO — CENTO", "100 unidades.", 110.90, 105.00],
      ["TORTA HOLANDESA", "Torta inteira.", 69.00, 66.00],
    ],
  },
];

const UNIDADES = {
  choc: "por kg",
  branco: "por kg",
  esp: "por kg",
  cas: "unidade",
  rech: "unidade",
  doces: "unidade",
};

const NOMES_CATEGORIA = {
  choc: "Bolos de Chocolate",
  branco: "Bolos Brancos",
  esp: "Bolos Especiais",
  cas: "Bolos Caseiros",
  rech: "Bolos Recheados",
  doces: "Doces e Tortas",
};

// ============================================================
//  HELPERS
// ============================================================
function formatarReal(valor) {
  return "R$ " + valor.toFixed(2).replace(".", ",");
}

function montarLinkWhatsApp(nome, preco) {
  const texto = `Olá! Gostaria de encomendar: *${nome}* — ${formatarReal(preco)}. Pode me ajudar?`;
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;
}

// ============================================================
//  RENDERIZAÇÃO DO CATÁLOGO
// ============================================================
function renderizarCatalogo() {
  const catalogoDiv = document.getElementById("catalog");
  catalogoDiv.innerHTML = "";

  PRODUTOS.forEach((secao) => {
    const sectionElement = document.createElement("section");
    sectionElement.dataset.categoria = secao.id;

    const headDiv = document.createElement("div");
    headDiv.className = "sec-head";
    headDiv.innerHTML = `
      <h2>${secao.nome}</h2>
      <span class="count">${secao.itens.length} itens</span>
    `;

    const notaP = document.createElement("p");
    notaP.className = "sec-note";
    notaP.textContent = secao.nota;

    const gridDiv = document.createElement("div");
    gridDiv.className = "grid";

    secao.itens.forEach(([nome, descricao, precoTabela, precopromo]) => {
      const card = document.createElement("article");
      card.className = "card";
      card.dataset.busca = `${nome} ${descricao}`.toLowerCase();
      card.dataset.categoria = secao.id;

      const src = caminhoImagem(nome) || IMG_FALLBACK;

      card.innerHTML = `
        <div class="card-media" data-expandido="true">
          <img
            class="card-img"
            src="${src}"
            alt="${nome}"
            loading="lazy"
            onerror="this.onerror=null;this.src='${IMG_FALLBACK}'"
          >
          <span class="card-img-fallback" aria-hidden="true">🎂</span>
          <button
            type="button"
            class="toggle-img hide-img"
            aria-label="Ocultar imagem de ${nome}"
            title="Ocultar imagem"
          >👁</button>
          <button
            type="button"
            class="toggle-img show-img"
            aria-label="Mostrar imagem de ${nome}"
            title="Mostrar imagem"
          >🔄</button>
        </div>
        <h3>${nome}</h3>
        ${descricao ? `<p>${descricao}</p>` : ""}
        <div class="price">
          <span class="now">${formatarReal(precopromo)}</span>
          <span class="was">${formatarReal(precoTabela)}</span>
          <span class="unit">${UNIDADES[secao.id]}</span>
        </div>
      `;

      // Guarda dados para o modal
      card.dataset.nome = nome;
      card.dataset.descricao = descricao || "";
      card.dataset.precoTabela = precoTabela;
      card.dataset.precopromo = precopromo;
      card.dataset.categoriaId = secao.id;
      card.dataset.imagem = src;

      gridDiv.appendChild(card);
    });

    sectionElement.appendChild(headDiv);
    sectionElement.appendChild(notaP);
    sectionElement.appendChild(gridDiv);
    catalogoDiv.appendChild(sectionElement);
  });
}

// ============================================================
//  FILTRO E BUSCA
// ============================================================
function filtrarProdutos() {
  const termoBusca = document.getElementById("searchInput").value.toLowerCase().trim();
  const categoriaAtiva = document.querySelector(".chip[aria-pressed='true']").dataset.category;

  let totalVisivel = 0;

  document.querySelectorAll("section").forEach((secao) => {
    let produtosVisiveisNaSecao = 0;

    secao.querySelectorAll(".card").forEach((card) => {
      const temoBuscaOk = !termoBusca || card.dataset.busca.includes(termoBusca);
      const categoriaOk = categoriaAtiva === "all" || card.dataset.categoria === categoriaAtiva;
      const deveExibir = temoBuscaOk && categoriaOk;

      card.style.display = deveExibir ? "flex" : "none";

      if (deveExibir) {
        produtosVisiveisNaSecao++;
        totalVisivel++;
      }
    });

    secao.style.display = produtosVisiveisNaSecao > 0 ? "block" : "none";

    const contadorSpan = secao.querySelector(".count");
    if (contadorSpan) {
      contadorSpan.textContent = `${produtosVisiveisNaSecao} itens`;
    }
  });

  const mensagemVazia = document.getElementById("emptyMessage");
  mensagemVazia.hidden = totalVisivel > 0;
}

// ============================================================
//  BOTÕES DE IMAGEM (esconder 👁 / mostrar 🔄)
// ============================================================
function ativarToggleImagem() {
  const catalogo = document.getElementById("catalog");

  catalogo.addEventListener("click", (e) => {
    const btn = e.target.closest(".toggle-img");
    if (!btn) return;

    // Impede que o clique no botão abra o modal do card
    e.stopPropagation();

    const media = btn.closest(".card-media");
    if (!media) return;

    if (btn.classList.contains("hide-img")) {
      media.dataset.expandido = "false";
    } else if (btn.classList.contains("show-img")) {
      media.dataset.expandido = "true";
    }
  });
}

// ============================================================
//  MODAL "STORY"
// ============================================================
function abrirStory(card) {
  const modal = document.getElementById("storyModal");
  const nome = card.dataset.nome;
  const descricao = card.dataset.descricao;
  const precoTabela = parseFloat(card.dataset.precoTabela);
  const precopromo = parseFloat(card.dataset.precopromo);
  const categoriaId = card.dataset.categoriaId;
  const imagem = card.dataset.imagem;

  document.getElementById("storyNome").textContent = nome;
  document.getElementById("storyDescricao").textContent = descricao;
  document.getElementById("storyBadge").textContent = NOMES_CATEGORIA[categoriaId] || "Produto";
  document.getElementById("storyPrecoNow").textContent = formatarReal(precopromo);
  document.getElementById("storyPrecoWas").textContent = formatarReal(precoTabela);
  document.getElementById("storyUnit").textContent = UNIDADES[categoriaId] || "";

  const frase = FRASES_STORY[nome] || "";
  const fraseEl = document.getElementById("storyFrase");
  fraseEl.textContent = frase;
  fraseEl.style.display = frase ? "block" : "none";

  const imgEl = document.getElementById("storyImg");
  imgEl.src = imagem;
  imgEl.alt = nome;
  imgEl.onerror = function () {
    this.onerror = null;
    this.src = IMG_FALLBACK;
  };

  document.getElementById("storyCta").href = montarLinkWhatsApp(nome, precopromo);

  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function fecharStory() {
  const modal = document.getElementById("storyModal");
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function ativarStory() {
  const catalogo = document.getElementById("catalog");

  catalogo.addEventListener("click", (e) => {
    // Ignora cliques nos botões de imagem
    if (e.target.closest(".toggle-img")) return;

    const card = e.target.closest(".card");
    if (!card) return;

    abrirStory(card);
  });

  // Fechar no X ou no backdrop
  document.getElementById("storyModal").addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) {
      fecharStory();
    }
  });

  // Fechar com ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const modal = document.getElementById("storyModal");
      if (!modal.hidden) fecharStory();
    }
  });
}

// ============================================================
//  INICIALIZAÇÃO
// ============================================================
document.addEventListener("DOMContentLoaded", function () {
  renderizarCatalogo();
  ativarToggleImagem();
  ativarStory();

  const inputBusca = document.getElementById("searchInput");
  inputBusca.addEventListener("input", filtrarProdutos);
  inputBusca.addEventListener("change", filtrarProdutos);

  const botoesCategoria = document.querySelectorAll(".chip");
  botoesCategoria.forEach((botao) => {
    botao.addEventListener("click", function () {
      botoesCategoria.forEach((b) => {
        b.setAttribute("aria-pressed", "false");
      });
      this.setAttribute("aria-pressed", "true");
      filtrarProdutos();
    });
  });
});
