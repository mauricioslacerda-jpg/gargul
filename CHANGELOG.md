# Gargul — registro permanente de mudanças

Roda do Tempo e as 22 letras. O número da versão é o da página (`VERSAO` no `build_gargul.py` e `CACHE` no
`sw.js`); antes do repositório, a página vivia só como artefato do claude.ai (o "laboratório"), e as versões
de v1 a v3.0 estão registradas nos diários da casa (`keter/diario/2026-09-11.md` e `2026-09-13.md`).
Datas em horário do Rio. Fontes e réguas: `specs/cabala-app/` no vault.

## Linha do tempo

### 2026-09-11 — a Roda nasce como página

- **v1** — a página: astrolábio de três anéis (12 simples · 7 duplas · 3 mães, recensão Gra-Ari), calendário
  hebraico calculado localmente (Reingold–Dershowitz, conferido contra o LOG em 8 datas), seis camadas A–F,
  par de Kohelet, convergências, LOG do vault embutido. Rodapé com fontes e versões.
- **v1.1** — as quatro versões do Sêfer Ietsirá no rodapé (Curta, Longa, Saadia, Gra-Ari).
- **v1.2** — celular: hebraico dos anéis cresce, latim some nos anéis internos, controles empilham, LOG vira
  cartões, toque na letra rola até a explicação.
- **v1.3** — a semana: parashá do Shabbat que vem (Hebcal 5786–5788, diáspora, embutido), anjos regentes
  (dia, ano; os 72 pelo grau solar, Sol por Meeus, rotulado *Lenain 1823*), salmo do dia (Tamid 7:4; 27 em
  Elul; 92 e 95 no Shabbat), rituais do dia e do período.
- **v1.4** — seletor de escrita: hebraico (Ashuri), aramaico imperial (Unicode 10840–10855), angular
  (paleo-hebraico) e Malachim (Agrippa 1533) — 46 glifos da tábua dos 72 como `<symbol>`; escolha persiste.
- **v1.5** — polish de Tiferet (`/impeccable`): sem faixa lateral, piso de 11 px, alvos de 44 px.
- **v1.6 → v1.7** — roda fixa no topo, publicada e **revertida a pedido**.
- **v1.9** — ordem mobile (roda logo após o tema).
- **v2.0** — sete seções numeradas e nomeadas (o número é a unidade de reordenação).
- **v2.1** — astrolábio na seção 2, semana na 3; ordem mobile igual à do desktop.
- **v2.2** — conferência na fonte (Sefaria, Warsaw 1884; Hebcal): 12 simples e 3 mães batem; as duplas
  divergem por recensão e a página declara a Gra-Ari.

### 2026-09-13 — a Roda vira o Gargul

- **v2.3** — a foto da tábua decidiu: os glifos Malachim de ב/ד e ו/ז estavam trocados pelo decodificador e
  foram corrigidos (Agrippa confirma).
- **v2.4** — seletor de escrita acima da roda.
- **v2.5** — três áreas do Hitlamdut agregadas sem repetir: 7 a Árvore da Vida (12 nós clicáveis, "na
  Cabalá" e "no sistema"), 8 as 22 letras (tábua com valor, classe, domínio, quatro escritas), 9 gematria
  (hechrachi, gadol, siduri, katan; equivalências com 72 tríades, sefirot, meses, Nomes divinos, nomes de
  letra). LOG passa a 10.
- **v2.6** — o seletor de escrita troca **toda** letra hebraica da página (`aplicaEscrita()`).
- **v2.7 · v2.7.1** — gematria em português: léxico da casa (sentido primeiro), equivalente bíblico para
  nomes, transliteração fonética rotulada; *besorah* entra.
- **v2.8 · v2.8.1** — hebraico romanizado volta ao léxico (transliteração exata ou esqueleto consonantal,
  candidatos "talvez"); *kalima* / *kelimah*.
- **v2.9** — os 72 Nomes pelo nome do anjo (kaliel → כליאל).
- **v3.0 · v3.0.1 · v3.0.2** — os nove tipos de número do **Pardes Rimonim 30:8** (lidos no Sefaria), temurá
  (AT-BaSH, AL-BaM, AChaS-BeTA de Shabbat 104a; AiK-BeKeR do Pardes 30:7), notarikon, selo mishkal, regra da
  casa; *shalem*; tabelas rolam dentro do contêiner no celular.
- **v3.1 · v3.1.1** — navegação de aplicativo: cinco vistas (Hoje · Semana · Estudo · Gematria · Registro),
  barra de abas fixa embaixo no celular e no topo no desktop, rota por hash; rodapé vira área 11; as quatro
  escritas da tábua ficam literais.
- **Gargul v3.1.1** (`9a9fb00`) — **primeiro deploy**: repositório `mauricioslacerda-jpg/gargul`, GitHub
  Pages, manifest, ícones, service worker. https://mauricioslacerda-jpg.github.io/gargul/
- **v3.2.0** — o **gimel** nas duas escritas (paleo pela forma média de ancient-hebrew.org; Malachim pela
  gravura de Agrippa no Commons); o seletor de escrita vale em todas as vistas.
- **v3.3.0** — mundos, véus e almas por trás da Árvore (Tibel HaPir · HaBará · HaYossará · HaAssá; parsa;
  NRNHY); **tradutor automático** (MyMemory, hebraico moderno, rotulado) e **dicionário** (Sefaria: Jastrow,
  Klein, BDB) na gematria; service worker com página em rede-primeiro e recarga ao atualizar.
- **v3.4.0** — mundos, véus e almas **clicáveis**, com painel, nomes em português, hebraico e aramaico, e
  fonte (Hitlamdut fólios IV e V; Ruach aponta para Zeir Anpin).
- **v3.5.0 · v3.5.1** — **ficha** de cada esfera (Nome divino, ordem angélica, anjo da casa, no corpo,
  Ushpizin, alma, mundo, dia da Roda), cada campo com fonte; bloco de leitura dos mundos em três colunas.
- **v4.0.0** — **i18n**: toggle soberano PT · EN · ES; toda frase do código passa por `T()`; TM de ~1 450
  frases por língua; léxico e tradutor pelo idioma; fontes (área 11) e LOG (área 10) ficam em português por
  decisão.
- **v4.1.0 · v4.1.1** — a leitura completa do dia na área 1, antes da roda (camadas, Kohelet, propício / não
  propício); título numa linha com glifos compactos; toggle de idioma pequeno.
- **v4.2.0 · v4.2.1** — **glosas** interpretativas em itálico por camada (47 frases, três línguas); nota
  metodológica retirada da área 1; lugar do **login** reservado; Convergências sobe para 4 (camadas 5,
  Kohelet 6).
- **v4.3.0** — **menu ☰ da área do usuário**: conta, idioma, tema, escrita; cabeçalho só com título, data e ☰.
- **v4.4.0** — **seções colapsáveis** com estado lembrado; **tamanho da letra** (normal · grande · maior)
  escalando texto e desenhos; barra de abas não cobre o fim do texto.
- **v4.5.0** — **⚙ Configurações** (data da leitura, após 18h, hoje, hemisfério Sul/Norte, notas técnicas);
  **temas de leitura à Kindle** (papel, sépia, escuro sem branco puro; automático segue o aparelho);
  cabeçalho mínimo com chip da data; notas técnicas escondidas por padrão.
- **v4.5.1** — nota do Kindle sai do menu.
- **v4.5.2** — seletores do menu quebram linha em vez de cortar (letra maior, telas estreitas).
- **v4.6.0** — o tamanho da letra escala **só o texto corrido** (`--tx`); cabeçalho, abas, botões, títulos e
  desenhos ficam no tamanho; título e abas nunca cortam.
- **v4.7.0** — tamanho **Menor** (90 %); **Imprimir · PDF** na ⚙ (as cinco vistas, seções abertas, papel claro,
  quebra de página por vista); colapso corrigido — cada seção fecha e abre sozinha, sem levar as seguintes.
- **v4.8.0** — no celular o título vem centralizado no topo, com data, ⚙ e ☰ na linha de baixo; o número da
  versão aparece no rodapé do menu ☰.
- **v4.8.1** — a área 2 chama-se **Gargul · a roda das 22 letras** (o astrolábio leva o nome do app).

### 2026-09-16 — Adar I não dorme na Academia, Adaru 2 é Metubá · v4.9.1

Correções da área 12 a partir de datas que a bancada da v4.9.0 não tinha visto (5 Tishrei era o único dia testado):

- **Adar I (ano embolismal):** a linha das letras da Academia agora diz que Adaru 1 e Adaru 2 partilham Kof + Gamal, e que é a Roda (área 5) que deixa a letra de Adar I dormir. Antes as duas camadas nomeavam letra diferente para o mesmo dia sem explicar.
- **Adaru 2:** a linha da estação mostra **Metubá** (temperada: reflexão e contração), não Chamê; vento e águas de Metubá não constam nas tábuas lidas e ficam em branco, não inventados.
- **Autoria dos meses Bul→Adaru:** o selo diz "capítulo do mês: Anuário Sagrado (K'hardana) · tábuas gerais: livro de Mario Meir", porque face, estação, vento, águas e as 22 letras vêm do livro em todos os doze meses; só o capítulo do mês é do Anuário.
- **Tábua das 22:** a coluna "na Academia" ganhou largura mínima (12 rem) para não quebrar em cinco linhas no celular; a tábua já rolava na horizontal antes.

## 2026-09-16 — a Academia de Cabala entra como camada própria

- **v4.9.0** — **área 12 · Academia de Cabala · o mês e o dia da lua** (vista Hoje, depois de Kohelet): overlay
  rotulado e não canônico, lido foto a foto em 124 fotos (95 do livro de Mario Meir, *Astrologia Cabalista: A Roda
  dos Meses*; 29 do *Anuário Sagrado* de Carmem K'hardana). Por mês: nome semítico, signo em aramaico, face da
  Shek'hiná, clã de Yashael, esfera, as letras do mês (simples do signo + dupla do planeta + mãe da estação — as sete
  duplas batem com a Gra-Ari da Roda), estação · vento · águas, a permutação de יהוה (33×), o takam (livro) ou as
  superações (Anuário), os 72 nomes do mês (as mesmas tríades, com *Alaha*), o salmo, o **dia na contagem da lua**
  (o "tempo de…" de Kohelet 3 pelo dia lunar, chave nomeada ao lado do par da área 6, que segue o dia da semana) e os
  marcos do mês (Yumá). Coluna **na Academia** na tábua das 22 (área 8). Autoria por mês (livro / Anuário / os dois);
  fonte por campo nas notas técnicas. Em PT · EN · ES. Cinco meses (Bul a Adaru) vêm só do Anuário; esferas e
  permutações só dos sete meses lidos no livro.

## O que fica em português por decisão

Fontes e regras (área 11) e as leituras registradas no vault (área 10): língua de registro da casa. Os nomes
das festas do Hebcal ficam em inglês (dado embutido).

## Pendências abertas (16/09/2026)

- Revisão de EN e ES por leitor nativo (a régua do meturgeman pede revisor que possa reprovar).
- Conta/login: lugar reservado, sem backend.
- Fontes auto-hospedadas (hoje entram no cache do service worker na primeira visita).
- Teste dele no aparelho sem rede; conferência de três dias contra o `check_log.py`.
- A bancada não simula largura abaixo de 504 px; telas de 412 px só por raciocínio.
- Academia: faltam nas fotos os capítulos de Bul, Kislimu, Tebetu, Shabatu e Adaru (esfera, permutação, 72 nomes, takam do livro) e o nome aramaico de cinco signos; a tábua dos 30 dias lunares vem do Anuário, não do livro.
