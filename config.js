// Configuração da fonte de dados do painel.
//
// Para ligar o site à planilha do Google Drive:
//   1. Abra a planilha, clique em Compartilhar e deixe "Qualquer pessoa com o link" como Leitor.
//   2. Copie o ID da planilha, que fica na URL entre /d/ e /edit.
//   3. Cole o ID em PLANILHA_ID abaixo e publique a alteração.
//
// Enquanto PLANILHA_ID estiver vazio, o site usa a cópia local em dados/atores.csv
// e avisa isso no rodapé.

window.CONFIG = {
  PLANILHA_ID: "1eyQmNvrSGvKX-fjnOeig6grQjnZGapjKC_UUN3lyJxg",

  // Nome da aba da planilha. Vazio usa a primeira aba.
  PLANILHA_ABA: "",

  // Caminho da cópia local, usada quando a planilha não responde.
  CSV_LOCAL: "dados/atores.csv",

  // Malha das unidades da federação, do IBGE.
  MALHA_UF: "dados/br_uf.geojson",

  // Geocodifica no navegador as linhas novas que vierem sem latitude e longitude.
  // O limite existe para respeitar a política de uso do Nominatim.
  GEOCODIFICAR_NO_NAVEGADOR: true,
  LIMITE_GEOCODIFICACAO: 8,
};
