# Gargul — Roda do Tempo e as 22 letras

**גַּלְגַּל · גִּלְגּוּל** — a roda, o giro. A face pública e portátil da Roda do Tempo do Keter.

Uma página, sem servidor, sem framework: calcula a data hebraica (Reingold–Dershowitz), a leitura do dia nas
seis camadas do Sêfer Ietsirá (recensão Gra-Ari), o par de Kohelet, a parashá e as festas (tabela Hebcal
5786–5788, diáspora), os anjos regentes (Lenain 1823, Estrato B, rotulado), a Árvore da Vida, as 22 letras em
quatro escritas (Ashuri, aramaico imperial, paleo-hebraico, Malachim de Agrippa) e a gematria em português e
hebraico pelos nove tipos de número do Pardes Rimonim 30:8. Instalável como app; funciona sem rede depois
da primeira visita.

- **No ar:** https://mauricioslacerda-jpg.github.io/gargul/
- **Mudanças:** [CHANGELOG.md](CHANGELOG.md) — registro permanente, versão a versão, desde a v1 (11/09/2026).
- **Vistas:** `#hoje` · `#semana` · `#estudo` · `#gematria` · `#registro`
- **Fontes e regras:** área 11 da página (Registro → Fontes). Toda tabela declara a fonte e a versão; gematria
  confirma vínculo, não cria (Avot 3:18).

## Como se atualiza

O código nasce no laboratório (artefatos do claude.ai) e é copiado para cá pelo `build_gargul.py` da casa;
a cada versão muda-se `CACHE` no `sw.js`. Dados com validade declarada: sedrot e festas até 5788 (set/2028).

## Licença

Texto e código © Mauricio Lacerda. Fontes citadas pertencem aos seus autores; o Hebcal é usado como tabela
baixada (hebcal.com), Sefaria para os textos primários.
