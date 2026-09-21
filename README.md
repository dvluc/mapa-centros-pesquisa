# Mapa de atores acadêmicos correlatos à CGINA

Painel geolocalizado de centros, laboratórios, núcleos e institutos brasileiros de referência em ciência de dados, políticas públicas e divulgação científica.

Coordenação-Geral de Integração Acadêmica e Estudos Avançados (CGINA), Diretoria de Informação Científica e Estudos Avançados (DICE), Coordenação de Aperfeiçoamento de Pessoal de Nível Superior (CAPES).

## Como o site pega os dados

O site lê uma planilha do Google Drive a cada carregamento. Editou a planilha, recarregou a página, o card e o ponto no mapa aparecem. Não é preciso mexer no código nem publicar nada de novo.

Se a planilha não responder, o site usa a cópia local em `dados/atores.csv` e avisa isso numa faixa no topo.

## Ligar o site à planilha

1. Suba `dados/atores.csv` para o Google Drive e abra o arquivo com o Planilhas Google.
2. Na planilha, clique em Compartilhar e deixe "Qualquer pessoa com o link" na função de Leitor. Sem isso o site não consegue ler.
3. Copie o identificador da planilha, que fica na URL entre `/d/` e `/edit`.
4. Cole o identificador em `PLANILHA_ID`, dentro de `config.js`, e salve.

## Editar a planilha

Uma linha por unidade. As colunas que o site usa:

| Coluna | Para que serve |
|---|---|
| `publicar` | `sim` mostra a linha. `não` esconde sem apagar o registro. |
| `nome`, `sigla` | Título do card. |
| `area_principal` | Cor do ponto e do card. Use `ciencia_de_dados`, `politicas_publicas` ou `divulgacao_cientifica`. |
| `areas_secundarias` | Outras áreas de atuação, separadas por ponto e vírgula. |
| `instituicao`, `sigla_instituicao`, `unidade_vinculacao`, `natureza_instituicao`, `tipo_unidade` | Identificação e filtros. |
| `responsavel_nome`, `responsavel_cargo`, `email_contato`, `telefone_contato`, `url` | Contato mostrado no card. |
| `cidade`, `uf`, `endereco` | Localização e filtros de região e estado. |
| `latitude`, `longitude`, `precisao_geo` | Posição no mapa. |
| `temas_correlatos_cgina` | Texto que aparece quando o card é aberto. |
| `grau_verificacao` | `parcial` marca a ficha como pendente de confirmação. |

Linha nova sem latitude e longitude, mas com cidade e UF, é posicionada pelo próprio site, com precisão de cidade. Para fixar o ponto num endereço exato, preencha latitude e longitude na planilha.

A região é derivada da UF, não precisa ser preenchida.

## Estrutura

    index.html          painel
    config.js           identificador da planilha e opções
    dados/atores.csv    cópia local, usada quando a planilha não responde
    dados/br_uf.geojson malha das unidades da federação, do IBGE

## Origem dos dados

Levantamento de setembro de 2026, feito a partir das páginas oficiais das unidades e das universidades. Contatos são apenas os institucionais publicados. Fichas marcadas como verificação parcial precisam de confirmação antes de uso para contato formal.
