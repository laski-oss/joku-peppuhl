# Hieno netti­sivu GitHub Pagesille

Tämä on kevyt, responsiivinen sivupohja, jonka voit julkaista suoraan **GitHub Pagesissa**.

## Käyttö
1. Luo uusi repo GitHubissa (esim. `hieno-sivu`).
2. Lataa tämän kansion sisältö repoosi (tai vedä ja pudota GitHubin web-käyttöliittymään).
3. Asetukset → **Pages** → *Build and deployment* → **Deploy from Branch**.
4. Valitse **Branch: `main`** ja **/ (root)**, tallenna.
5. Hetken kuluttua sivu on osoitteessa: `https://<käyttäjänimi>.github.io/<repo-nimi>/`.

## Muokkaus
- Muokkaa tekstejä tiedostossa `index.html`.
- Värit ja ulkoasu: `assets/css/style.css`.
- Toiminnallisuus: `assets/js/main.js`.
- Vaihda gallerian kuvat hakemistossa `assets/img/`.

## Vinkkejä
- Lisää oma `CNAME`-tiedosto juureen jos haluat oman verkkotunnuksen.
- Lisää analytiikka (esim. Plausible) upottamalla seurantascriptin `</head>` juuriin.
- Voit lisätä faviconin `assets/img/` ja linkittää sen `<head>`-osioon.

Onnea julkaisuun! 🚀
