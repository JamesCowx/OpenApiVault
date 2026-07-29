const apis = [
  {
    name: "JSONPlaceholder",
    category: "Development",
    auth: "None",
    description: "Free fake REST API for testing and prototyping. Provides posts, comments, users, todos, photos, and albums as predictable JSON endpoints.",
    useCase: "Mock a full backend in seconds. Ideal for frontend devs who need realistic data to test components or build quick prototypes.",
    url: "https://jsonplaceholder.typicode.com",
    docs: "https://jsonplaceholder.typicode.com/guide/"
  },
  {
    name: "PokeAPI",
    category: "Games",
    auth: "None",
    description: "The largest free Pokemon database. Returns detailed data on every Pokemon including stats, abilities, moves, types, sprites, and evolution chains.",
    useCase: "Build Pokedex apps, team builders, trivia games, or any project that needs rich video game data at scale.",
    url: "https://pokeapi.co/api/v2",
    docs: "https://pokeapi.co/docs/v2"
  },
  {
    name: "REST Countries",
    category: "Data",
    auth: "None",
    description: "Comprehensive country data with borders, capitals, currencies, languages, flags in multiple sizes, population, and timezones.",
    useCase: "Geography quizzes, travel apps, country dropdowns, or visualisation projects that need world statistics.",
    url: "https://restcountries.com/v3.1/all",
    docs: "https://restcountries.com/"
  },
  {
    name: "OpenWeatherMap",
    category: "Weather",
    auth: "API Key",
    description: "Current conditions, hourly and daily forecasts, air pollution data, and historical weather for any location. Free tier includes 1,000 calls/day.",
    useCase: "Weather dashboards, real-time weather widgets, location-based alert systems, or outdoor activity planners.",
    url: "https://api.openweathermap.org/data/2.5",
    docs: "https://openweathermap.org/api"
  },
  {
    name: "TheCatAPI",
    category: "Animals",
    auth: "API Key",
    description: "Random cat images, breed search, and a vast collection of feline photos with metadata. Generous free tier.",
    useCase: "Cat image galleries, breed encyclopedias, adoption platforms, or just adding some feline charm to any app.",
    url: "https://api.thecatapi.com/v1",
    docs: "https://developers.thecatapi.com/"
  },
  {
    name: "Dog API",
    category: "Animals",
    auth: "None",
    description: "Random dog images with breed filtering. Clean, predictable endpoints with fast response times.",
    useCase: "Dog breed browsers, random picture widgets, pet adoption visuals, or breed identification tools.",
    url: "https://dog.ceo/api",
    docs: "https://dog.ceo/dog-api/documentation/"
  },
  {
    name: "Chuck Norris Jokes",
    category: "Fun",
    auth: "None",
    description: "Hand-curated Chuck Norris facts delivered as clean JSON. Supports random jokes, categories, and free-text search.",
    useCase: "Add a random joke endpoint to your app, build a Slack bot, or create a joke-of-the-day widget.",
    url: "https://api.chucknorris.io/jokes/random",
    docs: "https://api.chucknorris.io/"
  },
  {
    name: "Bored API",
    category: "Fun",
    auth: "None",
    description: "Activity suggestion API. Filter by type, participant count, price, and accessibility to get tailored recommendations.",
    useCase: "Boredom-buster apps, break-suggestion integrations for productivity tools, or social activity planners.",
    url: "https://www.boredapi.com/api/activity",
    docs: "https://www.boredapi.com/documentation"
  },
  {
    name: "CoinGecko",
    category: "Finance",
    auth: "None",
    description: "Industry-leading crypto data with live prices, market caps, volume, historical data, and exchange info for 10,000+ coins.",
    useCase: "Crypto portfolio trackers, price tickers, market analysis dashboards, or fintech integrations.",
    url: "https://api.coingecko.com/api/v3",
    docs: "https://www.coingecko.com/en/api"
  },
  {
    name: "ExchangeRate API",
    category: "Finance",
    auth: "None",
    description: "Currency conversion with daily-updated rates for 160+ currencies sourced from the European Central Bank. No key required.",
    useCase: "Multi-currency ecommerce, travel budget calculators, international invoicing, or forex widgets.",
    url: "https://api.exchangerate-api.com/v4/latest/USD",
    docs: "https://www.exchangerate-api.com/docs"
  },
  {
    name: "Quotable",
    category: "Content",
    auth: "None",
    description: "Open-source quotes API with 2,000+ curated entries. Random selection, author search, tag filtering, and quote-length control.",
    useCase: "Quote-of-the-day widgets, inspirational app content, writing prompts, or social media posting tools.",
    url: "https://api.quotable.io/random",
    docs: "https://github.com/lukePeavey/quotable"
  },
  {
    name: "OpenLibrary",
    category: "Content",
    auth: "None",
    description: "Internet Archive's book catalog. Search by title, author, ISBN, or subject. Cover images, metadata, and availability included.",
    useCase: "Book search engines, personal library organisers, reading list apps, or community recommendation platforms.",
    url: "https://openlibrary.org/api",
    docs: "https://openlibrary.org/dev/docs/api"
  },
  {
    name: "NASA APIs",
    category: "Science",
    auth: "API Key",
    description: "Official NASA portal: Astronomy Picture of the Day, Mars Rover photos, Earth imagery, NEO tracking, and space weather.",
    useCase: "Space image galleries, science education apps, asteroid trackers, or Mars mission visualisations.",
    url: "https://api.nasa.gov/",
    docs: "https://api.nasa.gov/"
  },
  {
    name: "Numbers API",
    category: "Fun",
    auth: "None",
    description: "Fascinating facts about numbers, dates, and years. Math trivia, random facts, date facts, and batch requests.",
    useCase: "Math education apps, trivia games, daily calendar widgets, or classroom tools.",
    url: "http://numbersapi.com/random/trivia",
    docs: "http://numbersapi.com/"
  },
  {
    name: "TheMovieDB",
    category: "Entertainment",
    auth: "API Key",
    description: "Massive movie and TV database with posters, cast, ratings, trailers, watch providers, and trending content.",
    useCase: "Movie discovery apps, personal watchlists, Netflix-style catalogs, or recommendation engines.",
    url: "https://api.themoviedb.org/3",
    docs: "https://developers.themoviedb.org/3"
  },
  {
    name: "Open Trivia DB",
    category: "Games",
    auth: "None",
    description: "User-contributed trivia across 24 categories with multiple-choice or true/false formats and configurable difficulty.",
    useCase: "Quiz apps, Discord/Slack trivia bots, educational games, or pub-quiz platforms.",
    url: "https://opentdb.com/api.php?amount=10",
    docs: "https://opentdb.com/api_config.php"
  },
  {
    name: "Jikan",
    category: "Entertainment",
    auth: "None",
    description: "Unofficial MyAnimeList API for anime and manga. Seasons, top charts, characters, episodes, reviews, and recommendations.",
    useCase: "Anime trackers, seasonal browsers, watchlist managers, or manga library catalogs.",
    url: "https://api.jikan.moe/v4",
    docs: "https://docs.api.jikan.moe/"
  },
  {
    name: "GitHub REST API",
    category: "Development",
    auth: "None",
    description: "Full programmatic access to GitHub. Repos, users, commits, issues, pull requests, organisations, and gists. No key for public data.",
    useCase: "Portfolio showcases, GitHub stats widgets, automated repo analysis, contribution graphs, or CI/CD dashboards.",
    url: "https://api.github.com",
    docs: "https://docs.github.com/en/rest"
  },
  {
    name: "News API",
    category: "News",
    auth: "API Key",
    description: "Global headlines from 80,000+ sources. Filter by keyword, category, country, language, or date range. 100 req/day free.",
    useCase: "News aggregators, topic feeds, media monitoring dashboards, or current-events widgets.",
    url: "https://newsapi.org/v2",
    docs: "https://newsapi.org/docs"
  },
  {
    name: "IP Geolocation",
    category: "Network",
    auth: "None",
    description: "Fast IP lookup returning country, city, region, ISP, timezone, currency, and coordinates. 30k requests/month free.",
    useCase: "Location-aware personalisation, content customisation by country, analytics tools, or regional redirect logic.",
    url: "https://ipapi.co/json/",
    docs: "https://ipapi.co/api/"
  },
  {
    name: "OpenFoodFacts",
    category: "Health",
    auth: "None",
    description: "Open food product database. Nutrition facts, ingredients, allergens, Nutri-Score, Eco-Score, and barcode scanning.",
    useCase: "Nutrition trackers, barcode scanner apps, dietary restriction checkers, or ethical shopping guides.",
    url: "https://world.openfoodfacts.org/api/v0",
    docs: "https://world.openfoodfacts.org/data"
  },
  {
    name: "Deck of Cards",
    category: "Games",
    auth: "None",
    description: "Full-featured card deck API. Create decks, shuffle, draw, reshuffle, and manage piles. All the card-game plumbing handled.",
    useCase: "Poker, blackjack, solitaire, or any card game without managing shuffling, dealing, and state logic yourself.",
    url: "https://deckofcardsapi.com/api",
    docs: "https://deckofcardsapi.com/"
  },
  {
    name: "Art Institute of Chicago",
    category: "Art",
    auth: "None",
    description: "Access 100,000+ artworks with high-resolution images, artist biographies, and rich metadata from the Institute's collection.",
    useCase: "Virtual art galleries, museum guides, art discovery apps, or educational art history platforms.",
    url: "https://api.artic.edu/api/v1",
    docs: "https://api.artic.edu/docs/"
  },
  {
    name: "DiceBear",
    category: "Development",
    auth: "None",
    description: "Avatar generator that creates unique images from any seed string. Multiple styles: bottts, identicon, pixel-art, thumbs, and more.",
    useCase: "Default profile pictures, placeholder avatars in mockups, or deterministic test-data avatars.",
    url: "https://api.dicebear.com/7.x",
    docs: "https://www.dicebear.com/how-to-use/http-api/"
  },
  {
    name: "Universities List",
    category: "Education",
    auth: "None",
    description: "Global university database searchable by country. Returns institution names, domains, web pages, and location info.",
    useCase: "University search tools, education directories, college application portals, or campus comparison platforms.",
    url: "http://universities.hipolabs.com/search",
    docs: "https://github.com/Hipo/university-domains-list"
  },
  {
    name: "Dictionary API",
    category: "Education",
    auth: "None",
    description: "English dictionary with definitions, phonetics, audio pronunciations, synonyms, antonyms, and example sentences.",
    useCase: "Vocabulary apps, language-learning tools, spell-check integrations, or word-of-the-day widgets.",
    url: "https://api.dictionaryapi.dev/api/v2/entries/en/hello",
    docs: "https://dictionaryapi.dev/"
  },
  {
    name: "Genderize.io",
    category: "Data",
    auth: "None",
    description: "Predicts gender probability from a first name. Companion APIs for age and nationality prediction also available.",
    useCase: "Personalise UX by name, pre-fill demo forms, or enrich name-based analytics with demographic probabilities.",
    url: "https://api.genderize.io/?name=alex",
    docs: "https://genderize.io/"
  },
  {
    name: "Waifu.pics",
    category: "Fun",
    auth: "None",
    description: "Anime-style image API with dozens of SFW categories. Fast, reliable, and great for bots or playful web apps.",
    useCase: "Anime-image bots for chat platforms, wallpaper randomisers, or character visuals in personal projects.",
    url: "https://api.waifu.pics/sfw/waifu",
    docs: "https://waifu.pics/docs"
  },
  {
    name: "Memegen.link",
    category: "Fun",
    auth: "None",
    description: "Programmatic meme generator. Pick a template, specify top and bottom text, get a shareable image URL instantly.",
    useCase: "Meme creation tools, social content generators, or reaction features inside chat apps.",
    url: "https://api.memegen.link/images",
    docs: "https://memegen.link/"
  },
  {
    name: "Random User",
    category: "Development",
    auth: "None",
    description: "Realistic random user profiles with names, emails, photos, addresses, and logins. Highly configurable parameters.",
    useCase: "Seed test databases, populate UI mockups, stress-test forms, or generate demo account profiles.",
    url: "https://randomuser.me/api/",
    docs: "https://randomuser.me/documentation"
  },
  {
    name: "Nominatim",
    category: "Geo",
    auth: "None",
    description: "Free geocoding from OpenStreetMap. Convert addresses to coordinates and back without Google Maps pricing.",
    useCase: "Add maps and geocoding to apps for free, geocode addresses, build location search, or create routing tools.",
    url: "https://nominatim.openstreetmap.org",
    docs: "https://nominatim.org/release-docs/develop/api/Overview/"
  },
  {
    name: "Pokemon TCG API",
    category: "Games",
    auth: "None",
    description: "Dedicated Trading Card Game API with comprehensive card data, set info, rarities, and high-quality card images.",
    useCase: "TCG collection trackers, deck builders, card price checkers, or pack-opening simulators.",
    url: "https://api.pokemontcg.io/v2",
    docs: "https://docs.pokemontcg.io/"
  },
  {
    name: "Cataas",
    category: "Animals",
    auth: "None",
    description: "Cat as a Service. Get cat pictures with custom text overlays, filters, colours, and dimensions.",
    useCase: "Add cat content to any app, build meme generators, or create mood-based cat-picture features.",
    url: "https://cataas.com/cat",
    docs: "https://cataas.com/"
  },
  {
    name: "Bacon Ipsum",
    category: "Development",
    auth: "None",
    description: "A meatier lorem ipsum. Meat-themed filler text in configurable paragraphs with optional all-meat formatting.",
    useCase: "Placeholder content with personality for UI mockups, presentations, or prototyping.",
    url: "https://baconipsum.com/api/",
    docs: "https://baconipsum.com/json-api/"
  },
  {
    name: "SpaceX API",
    category: "Science",
    auth: "None",
    description: "Unofficial SpaceX API with launches, rockets, capsules, ships, Starlink info, and historical mission data.",
    useCase: "Mission trackers, rocket comparison tools, launch countdowns, or space-exploration dashboards.",
    url: "https://api.spacexdata.com/v4",
    docs: "https://github.com/r-spacex/SpaceX-API"
  },
  {
    name: "FreeToGame",
    category: "Games",
    auth: "None",
    description: "Curated list of free-to-play PC games with thumbnails, descriptions, genres, platforms, and publisher info.",
    useCase: "Free game discovery platforms, budget-friendly recommendation engines, or F2P community sites.",
    url: "https://www.freetogame.com/api",
    docs: "https://www.freetogame.com/api-doc"
  },
  {
    name: "Agify.io",
    category: "Data",
    auth: "None",
    description: "Predicts a person's age from their first name. Returns estimated age and sample size for accuracy context.",
    useCase: "Fun demographic personalisation, guessing-game features, or novelty name-analysis tools.",
    url: "https://api.agify.io/?name=michael",
    docs: "https://agify.io/"
  },
  {
    name: "Imgflip",
    category: "Fun",
    auth: "None",
    description: "Access 100+ popular meme templates and generate captioned meme images programmatically. Instant image URLs.",
    useCase: "Meme creation tools, AI meme bots, social sharing apps, or meme generation inside chat platforms.",
    url: "https://api.imgflip.com/get_memes",
    docs: "https://imgflip.com/api"
  },
  {
    name: "ZipCodeAPI",
    category: "Geo",
    auth: "API Key",
    description: "US zip code lookup returning city, state, county, area codes, timezone, and geolocation. 10 requests/hour free.",
    useCase: "Address auto-completion, zip validation, location-based shipping estimates, or regional service checks.",
    url: "https://www.zipcodeapi.com/rest",
    docs: "https://www.zipcodeapi.com/"
  },
  {
    name: "Kanye.rest",
    category: "Fun",
    auth: "None",
    description: "The simplest API on the internet. Returns a random Kanye West quote as plain JSON. No auth, no rate limits.",
    useCase: "Random Kanye quotes as easter eggs, quote-of-the-day features, or fun Twitter/Discord bots with zero setup.",
    url: "https://api.kanye.rest/",
    docs: "https://kanye.rest/"
  }
];

const grid = document.getElementById('apiGrid');
const filterTags = document.getElementById('filterTags');
const searchInput = document.getElementById('searchInput');
const emptyState = document.getElementById('emptyState');
const resultsText = document.getElementById('resultsText');
const btnClear = document.getElementById('btnClear');

let activeCategory = 'All';
let searchTerm = '';

function getCategories() {
  const cats = new Set(apis.map(a => a.category));
  return ['All', ...[...cats].sort()];
}

function renderFilters() {
  const categories = getCategories();
  filterTags.innerHTML = categories.map(c =>
    `<button class="pill${c === activeCategory ? ' active' : ''}" data-category="${c}">${c}</button>`
  ).join('');
}

function getFiltered() {
  let filtered = apis;
  if (activeCategory !== 'All') filtered = filtered.filter(a => a.category === activeCategory);
  if (searchTerm.trim()) {
    const q = searchTerm.toLowerCase().trim();
    filtered = filtered.filter(a =>
      a.name.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q) ||
      a.useCase.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q)
    );
  }
  return filtered;
}

function esc(str) {
  const d = document.createElement('div');
  d.appendChild(document.createTextNode(str));
  return d.innerHTML;
}

function render() {
  const filtered = getFiltered();
  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyState.style.display = 'block';
    resultsText.textContent = '';
  } else {
    emptyState.style.display = 'none';
    resultsText.textContent = `Showing ${filtered.length} of ${apis.length}`;

    grid.innerHTML = filtered.map(api => `
      <article class="card">
        <div class="card-head">
          <h3>${esc(api.name)}</h3>
          <div class="chips">
            <span class="chip chip-cat">${esc(api.category)}</span>
            <span class="chip ${api.auth === 'None' ? 'chip-auth-free' : 'chip-auth-key'}">${esc(api.auth)}</span>
          </div>
        </div>
        <p class="card-desc">${esc(api.description)}</p>
        <div class="card-usecase"><em>Use case</em> &mdash; ${esc(api.useCase)}</div>
        <div class="card-foot">
          <a class="card-host" href="${esc(api.url)}" target="_blank" rel="noopener">${esc(api.url)}</a>
          <a class="btn" href="${esc(api.docs)}" target="_blank" rel="noopener">
            Docs
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
          </a>
        </div>
      </article>
    `).join('');
  }
}

filterTags.addEventListener('click', (e) => {
  const btn = e.target.closest('.pill');
  if (!btn) return;
  activeCategory = btn.dataset.category;
  renderFilters();
  render();
  btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
});

searchInput.addEventListener('input', () => {
  searchTerm = searchInput.value;
  render();
});

btnClear.addEventListener('click', () => {
  searchInput.value = '';
  searchTerm = '';
  activeCategory = 'All';
  renderFilters();
  render();
  searchInput.focus();
});

document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    searchInput.focus();
  }
  if (e.key === 'Escape' && document.activeElement === searchInput) {
    searchInput.blur();
    searchInput.value = '';
    searchTerm = '';
    render();
  }
});

renderFilters();
render();
