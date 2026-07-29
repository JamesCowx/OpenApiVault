<p align="center">
  <img src="https://img.shields.io/badge/APIs-40-blueviolet?style=flat-square" alt="40 APIs">
  <img src="https://img.shields.io/badge/Categories-15-blueviolet?style=flat-square" alt="15 Categories">
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="MIT">
</p>

<pre align="center">
 ██████╗ ██████╗ ███████╗███╗   ██╗ █████╗ ██████╗ ██╗
██╔═══██╗██╔══██╗██╔════╝████╗  ██║██╔══██╗██╔══██╗██║
██║   ██║██████╔╝█████╗  ██╔██╗ ██║███████║██████╔╝██║
██║   ██║██╔═══╝ ██╔══╝  ██║╚██╗██║██╔══██║██╔═══╝ ██║
╚██████╔╝██║     ███████╗██║ ╚████║██║  ██║██║     ███████╗
 ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝     ╚══════╝
   ██╗   ██╗ █████╗ ██╗   ██╗██╗  ████████╗
   ██║   ██║██╔══██╗██║   ██║██║  ╚══██╔══╝
   ██║   ██║███████║██║   ██║██║     ██║
   ╚██╗ ██╔╝██╔══██║██║   ██║██║     ██║
    ╚████╔╝ ██║  ██║╚██████╔╝███████╗██║
     ╚═══╝  ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝
</pre>

<p align="center"><strong>A hand-curated vault of production-ready free public APIs.</strong></p>

<p align="center">
  <a href="https://jamescowx.github.io/OpenApiVault"><strong>→ Live Demo</strong></a>
</p>

---

## What is this?

OpenApiVault is a directory of free public APIs for developers. Every listing includes a **description** and a **real-world use case** so you know not just what the API does, but how you'd actually use it.

---

## Features

| | |
|---|---|
| Search | Instant search by name, description, or use case |
| Filter | One-click category pills |
| Keyboard | `Ctrl+K` to focus search, `Esc` to clear |
| Responsive | Works on every screen size |
| Zero deps | Vanilla HTML, CSS & JS — no build step |

---

## APIs by category

| Category | Count | Highlights |
|---|---|---|
| Development | 6 | JSONPlaceholder, GitHub, DiceBear, Random User |
| Games | 5 | PokeAPI, Deck of Cards, FreeToGame, Open Trivia DB |
| Fun | 7 | Chuck Norris, Bored API, Memegen.link, Kanye.rest |
| Finance | 2 | CoinGecko, ExchangeRate API |
| Animals | 3 | TheCatAPI, Dog API, Cataas |
| Science | 2 | NASA APIs, SpaceX API |
| Entertainment | 2 | TheMovieDB, Jikan (MyAnimeList) |
| Weather | 1 | OpenWeatherMap |
| Data | 3 | REST Countries, Genderize.io, Agify.io |
| Content | 2 | Quotable, OpenLibrary |
| Education | 2 | Universities List, Dictionary API |
| Geo | 2 | OpenStreetMap Nominatim, ZipCodeAPI |
| News | 1 | News API |
| Network | 1 | IP Geolocation |
| Health | 1 | OpenFoodFacts |
| Art | 1 | Art Institute of Chicago |

---

## Run locally

```bash
git clone https://github.com/JamesCowx/OpenApiVault.git
cd OpenApiVault
open index.html
```

No install, no bundler, no framework. Just open the file.

---

## Add an API

1. Fork the repo
2. Open `script.js`
3. Add an object to the `apis` array:

```js
{
  name: "API Name",
  category: "Category",
  auth: "None",               // or "API Key"
  description: "What the API provides.",
  useCase: "How you'd actually use it.",
  url: "https://api.example.com/v1",
  docs: "https://docs.example.com/"
}
```

4. Open a PR

Only free APIs with a working free tier. Include the official docs link.

---

## Tech

| | |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 |
| Logic | Vanilla JS |
| Fonts | Inter + JetBrains Mono |
| Hosting | GitHub Pages |

Three files. Zero dependencies.

---

## Why "OpenApiVault"?

> A vault is where valuable things are curated and protected. Every API here has been hand-picked because it's genuinely useful, actively maintained, and free.

---

<p align="center">Built by <a href="https://github.com/JamesCowx">JamesCowx</a> &middot; <a href="https://github.com/JamesCowx/OpenApiVault/pulls">Contribute</a></p>
