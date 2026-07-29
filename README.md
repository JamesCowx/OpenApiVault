<p align="center">
  <img src="https://img.shields.io/badge/APIs-40-blueviolet?style=flat-square" alt="40 APIs">
  <img src="https://img.shields.io/badge/Categories-15-blueviolet?style=flat-square" alt="15 Categories">
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="MIT">
</p>

<h1 align="center">OpenApi<span style="font-weight:300;color:#8b5cf6">Vault</span></h1>

<p align="center"><em>A hand-curated collection of free public APIs. Every listing includes a real-world use case so you know exactly how to use it.</em></p>

<p align="center">
  <a href="https://jamescowx.github.io/OpenApiVault"><strong>→ Live Demo</strong></a>
  &nbsp;&middot;&nbsp;
  <a href="#add-an-api"><strong>→ Add an API</strong></a>
</p>

---

## What is this?

OpenApiVault is a fast, searchable directory of free public APIs. Whether you're prototyping a side project or looking for data to power your next app, you'll find something useful here.

Each listing includes:

- A clear description of what the API provides
- A practical use case — how you'd actually build with it
- Auth requirements clearly labeled (none or API key)
- Direct links to both the base URL and the official docs

---

## Features

| | |
|---|---|
| Instant search | Search by name, description, category, or use case |
| Category filters | One-click pills to narrow results |
| Keyboard shortcuts | `Ctrl+K` focuses search, `Esc` clears |
| Responsive | Looks great on mobile and desktop |
| Zero dependencies | Vanilla HTML, CSS, and JavaScript |

---

## APIs (40 across 15 categories)

| Category | Count | Highlights |
|---|---|---|
| Development | 6 | JSONPlaceholder, GitHub, DiceBear, Random User |
| Games | 5 | PokeAPI, Deck of Cards, FreeToGame, Open Trivia DB |
| Fun | 7 | Chuck Norris, Bored API, Memegen.link, Kanye.rest |
| Finance | 2 | CoinGecko, ExchangeRate API |
| Animals | 3 | TheCatAPI, Dog API, Cataas |
| Science | 2 | NASA, SpaceX |
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

No install, no build step. Just open the file.

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

**Guidelines:** free/public APIs only, include the official docs link, and write use cases that answer "what would I build with this?"

---

## Tech

| | |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, grid) |
| Logic | Vanilla JavaScript |
| Fonts | Inter + JetBrains Mono (Google Fonts) |
| Hosting | GitHub Pages |

Three files. Zero dependencies. No frameworks.

---

## Why "OpenApiVault"?

> A vault is where valuable things are curated, not just stored. Every API here has been hand-picked because it's genuinely useful, actively maintained, and free for developers.

---

<p align="center">
  <a href="https://github.com/JamesCowx/OpenApiVault">GitHub</a>
  &nbsp;&middot;&nbsp;
  <a href="https://github.com/JamesCowx/OpenApiVault/pulls">Contribute</a>
  &nbsp;&middot;&nbsp;
  <a href="https://jamescowx.github.io/OpenApiVault">Live site</a>
</p>
