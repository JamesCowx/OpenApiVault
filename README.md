<div align="center">

<img src="https://img.shields.io/badge/APIs-40-blueviolet?style=for-the-badge&logo=fastapi&logoColor=white" alt="40 APIs">
<img src="https://img.shields.io/badge/Categories-15-blueviolet?style=for-the-badge&logo=stackshare&logoColor=white" alt="15 Categories">
<img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge&logo=opensourceinitiative&logoColor=white" alt="MIT License">
<img src="https://img.shields.io/badge/PRs-welcome-purple?style=for-the-badge&logo=github&logoColor=white" alt="PRs Welcome">

<br><br>

<pre>
 ██████╗ ██████╗ ███████╗███╗   ██╗ █████╗ ██████╗ ██╗    ██╗   ██╗ █████╗ ██╗   ██╗██╗  ████████╗
██╔═══██╗██╔══██╗██╔════╝████╗  ██║██╔══██╗██╔══██╗██║    ██║   ██║██╔══██╗██║   ██║██║  ╚══██╔══╝
██║   ██║██████╔╝█████╗  ██╔██╗ ██║███████║██████╔╝██║    ██║   ██║███████║██║   ██║██║     ██║
██║   ██║██╔═══╝ ██╔══╝  ██║╚██╗██║██╔══██║██╔═══╝ ██║    ╚██╗ ██╔╝██╔══██║██║   ██║██║     ██║
╚██████╔╝██║     ███████╗██║ ╚████║██║  ██║██║     ███████╗╚████╔╝ ██║  ██║╚██████╔╝███████╗██║
 ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝     ╚══════╝ ╚═══╝  ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝
</pre>

### **A hand-curated vault of production-ready free public APIs**

*Every listing includes a real-world use case so you know exactly how to use it.*

[![Live Demo](https://img.shields.io/badge/LIVE_DEMO-8b5cf6?style=for-the-badge&logo=vercel&logoColor=white)](https://jamescowx.github.io/OpenApiVault)

</div>

---

## What is OpenApiVault?

OpenApiVault is a beautiful, fast, and functional directory of free public APIs for developers. Whether you're prototyping a side project, teaching yourself a new framework, or looking for data to power your next production app — **OpenApiVault has you covered**.

Every API listing is more than just a name and a link. Each one comes with:

- A **clear description** of what the API provides
- A **practical use case** explaining exactly how you'd use it in the real world
- **Auth requirements** clearly labeled (None or API Key)
- Direct links to both the **base URL** and the **official documentation**

---

## Features

| Feature | Description |
|---|---|
| Search | Instant search by name, description, category, or use case |
| Filter | One-click category pills to narrow down results |
| Keyboard nav | `⌘K` / `Ctrl+K` to focus search, `Esc` to clear |
| Responsive | Full mobile support — looks great on every screen |
| Dark theme | Easy on the eyes with a premium purple/blue design |
| Zero deps | Vanilla HTML, CSS & JS — no frameworks, no build step |
| Animated | Staggered card entrance, counter animations, hover glow effects |

---

## APIs Included

| Category | Count | Examples |
|---|---|---|
| Development | 6 | JSONPlaceholder, GitHub API, DiceBear, Random User |
| Games | 5 | PokeAPI, Deck of Cards, FreeToGame, Open Trivia DB |
| Fun | 7 | Chuck Norris, Bored API, Memegen.link, Waifu.pics |
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

## Getting Started

### Run locally

```bash
git clone https://github.com/JamesCowx/OpenApiVault.git
cd OpenApiVault
```

Then open `index.html` in your browser. That's it — **no `npm install`, no bundler, no framework**.

### Deploy your own

OpenApiVault is a fully static site. Drop it on any hosting platform:

- **GitHub Pages** — push to `main`, enable Pages in repo settings
- **Netlify** — drag and drop the folder
- **Vercel** — connect the repo, auto-deploys
- **Any static host** — just serve the files

---

## Contributing

Contributions make OpenApiVault better for everyone. Here's how to add an API:

### Adding a new API

1. Fork the repo
2. Open `script.js`
3. Add a new object to the `apis` array:

```javascript
{
  name: "Your API Name",
  category: "Category",       // Use an existing category or add a new one
  auth: "None",               // "None" or "API Key"
  description: "A clear 1-2 sentence description of what the API provides.",
  useCase: "A practical real-world scenario showing how someone would use this API.",
  url: "https://api.example.com/v1",
  docs: "https://docs.example.com/"
}
```

4. Submit a PR with a brief description of the API you're adding

### Guidelines

- Only free/public APIs with a working free tier
- Include the **official documentation link** — not just the base URL
- Write use cases that answer "what would I build with this?"
- No dead, deprecated, or abandoned APIs

---

## Tech Stack

| Layer | Tech |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, animations, grid) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Inter + JetBrains Mono (Google Fonts) |
| Hosting | GitHub Pages |

Zero frameworks. Zero build tools. Zero dependencies. **Just three files.**

---

## Why "OpenApiVault"?

> A vault isn't just a storage container — it's a place where valuable things are *curated* and *protected*. That's the philosophy: every API in this collection has been hand-picked because it's genuinely useful, actively maintained, and free for developers to use.

---

<div align="center">

Made with by [JamesCowx](https://github.com/JamesCowx)

**Found a great API?** [Open a PR](https://github.com/JamesCowx/OpenApiVault/pulls) and help grow the vault!

</div>
