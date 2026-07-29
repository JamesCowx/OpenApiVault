// ── DATA ──
const apis = [
  {
    name: "JSONPlaceholder",
    category: "Development",
    auth: "None",
    description: "Free fake REST API for testing and prototyping. Provides posts, comments, users, todos, photos, and albums — all as predictable JSON endpoints.",
    useCase: "Mock a full backend in seconds. Ideal for frontend developers who need realistic data to test UI components or build quick prototypes.",
    url: "https://jsonplaceholder.typicode.com",
    docs: "https://jsonplaceholder.typicode.com/guide/"
  },
  {
    name: "PokeAPI",
    category: "Games",
    auth: "None",
    description: "The largest free Pokémon database API. Returns detailed data on every Pokémon including stats, abilities, moves, types, sprites, and evolution chains.",
    useCase: "Perfect for building Pokédex apps, team builders, trivia games, or any project needing rich video game data with millions of daily requests.",
    url: "https://pokeapi.co/api/v2",
    docs: "https://pokeapi.co/docs/v2"
  },
  {
    name: "REST Countries",
    category: "Data",
    auth: "None",
    description: "Comprehensive country data API providing borders, capitals, currencies, languages, flags in multiple sizes, population, timezones, and regional blocs.",
    useCase: "Great for geography quizzes, travel apps with country info, nationality dropdowns, or data visualization projects involving world statistics.",
    url: "https://restcountries.com/v3.1/all",
    docs: "https://restcountries.com/"
  },
  {
    name: "OpenWeatherMap",
    category: "Weather",
    auth: "API Key",
    description: "Access current conditions, hourly & daily forecasts, air pollution data, and historical weather for any location worldwide. 1,000 free calls/day.",
    useCase: "Build weather dashboards, add real-time weather widgets to apps, create location-based alert systems, or power outdoor activity planners.",
    url: "https://api.openweathermap.org/data/2.5",
    docs: "https://openweathermap.org/api"
  },
  {
    name: "TheCatAPI",
    category: "Animals",
    auth: "API Key",
    description: "Get random cat images, search by breed, browse a vast collection of feline photos with metadata. Generous free tier for hobby projects.",
    useCase: "Build cat image galleries, breed encyclopedias, feline adoption platforms, or just add delightful cat content to any application.",
    url: "https://api.thecatapi.com/v1",
    docs: "https://developers.thecatapi.com/"
  },
  {
    name: "Dog API",
    category: "Animals",
    auth: "None",
    description: "Simple yet powerful API for fetching random dog images and browsing by breed. Clean predictable endpoints with fast response times.",
    useCase: "Create dog breed browsers, random dog picture widgets, pet adoption platform visuals, or breed identification learning tools.",
    url: "https://dog.ceo/api",
    docs: "https://dog.ceo/dog-api/documentation/"
  },
  {
    name: "Chuck Norris Jokes",
    category: "Fun",
    auth: "None",
    description: "Hand-curated Chuck Norris facts delivered as clean JSON. Supports random jokes, categories, and free-text search across the entire collection.",
    useCase: "Add humor to your app with random joke endpoints, build Slack/Discord joke bots, or create joke-of-the-day widgets for websites.",
    url: "https://api.chucknorris.io/jokes/random",
    docs: "https://api.chucknorris.io/"
  },
  {
    name: "Bored API",
    category: "Fun",
    auth: "None",
    description: "Intelligent activity suggestion API. Filter by type, participant count, price range, and accessibility to get tailored activity recommendations.",
    useCase: "Build boredom-buster apps, integrate with productivity tools to suggest meaningful breaks, or create social activity planners.",
    url: "https://www.boredapi.com/api/activity",
    docs: "https://www.boredapi.com/documentation"
  },
  {
    name: "CoinGecko",
    category: "Finance",
    auth: "None",
    description: "Industry-leading cryptocurrency data API with live prices, market caps, trading volume, historical data, and exchange info for 10,000+ coins.",
    useCase: "Build crypto portfolio trackers, real-time price tickers, market analysis dashboards, or integrate cryptocurrency prices into fintech apps.",
    url: "https://api.coingecko.com/api/v3",
    docs: "https://www.coingecko.com/en/api"
  },
  {
    name: "ExchangeRate API",
    category: "Finance",
    auth: "None",
    description: "Free currency conversion API with daily-updated rates for 160+ currencies, sourced from the European Central Bank. No API key required.",
    useCase: "Build multi-currency e-commerce displays, travel budget calculators, international invoice systems, or real-time forex widgets.",
    url: "https://api.exchangerate-api.com/v4/latest/USD",
    docs: "https://www.exchangerate-api.com/docs"
  },
  {
    name: "Quotable",
    category: "Content",
    auth: "None",
    description: "Free open-source quotes API with 2000+ curated quotes. Supports random selection, author search, tag filtering, and configurable quote length.",
    useCase: "Create quote-of-the-day widgets, inspirational app content, writing prompt generators, or social media auto-posting tools.",
    url: "https://api.quotable.io/random",
    docs: "https://github.com/lukePeavey/quotable"
  },
  {
    name: "OpenLibrary",
    category: "Content",
    auth: "None",
    description: "Internet Archive's book catalog API. Search by title, author, ISBN, or subject. Returns cover images, metadata, and availability information.",
    useCase: "Build book search engines, personal library organizers, reading list apps, or community book recommendation platforms.",
    url: "https://openlibrary.org/api",
    docs: "https://openlibrary.org/dev/docs/api"
  },
  {
    name: "NASA APIs",
    category: "Science",
    auth: "API Key",
    description: "Official NASA data portal including Astronomy Picture of the Day, Mars Rover photos, Earth imagery, NEO tracking, and space weather data.",
    useCase: "Create stunning space image galleries, science education apps, asteroid tracking dashboards, or Mars mission visualizations.",
    url: "https://api.nasa.gov/",
    docs: "https://api.nasa.gov/"
  },
  {
    name: "Numbers API",
    category: "Fun",
    auth: "None",
    description: "Fascinating facts about numbers, dates, and years. Supports math trivia, random number facts, date facts, and batch requests for multiple numbers.",
    useCase: "Add fun number facts to math education apps, trivia games, daily calendar widgets, or create engaging classroom tools.",
    url: "http://numbersapi.com/random/trivia",
    docs: "http://numbersapi.com/"
  },
  {
    name: "TheMovieDB",
    category: "Entertainment",
    auth: "API Key",
    description: "Massive movie & TV show database with posters, cast, ratings, trailers, watch providers, and trending content. Free for non-commercial use.",
    useCase: "Build movie discovery apps, personal watchlists, Netflix-style catalogs, ratings aggregators, or entertainment recommendation engines.",
    url: "https://api.themoviedb.org/3",
    docs: "https://developers.themoviedb.org/3"
  },
  {
    name: "Open Trivia DB",
    category: "Games",
    auth: "None",
    description: "Free user-contributed trivia questions across 24 categories with multiple choice or true/false formats and configurable difficulty levels.",
    useCase: "Build quiz apps, trivia bots for Discord/Slack, educational games, pub-quiz platforms, or team-building activity tools.",
    url: "https://opentdb.com/api.php?amount=10",
    docs: "https://opentdb.com/api_config.php"
  },
  {
    name: "Jikan API",
    category: "Entertainment",
    auth: "None",
    description: "Unofficial MyAnimeList API serving anime and manga data. Access seasons, top lists, characters, episodes, reviews, and recommendations.",
    useCase: "Build anime trackers, seasonal anime browsers, personal watchlist managers, recommendation engines, or manga library catalogs.",
    url: "https://api.jikan.moe/v4",
    docs: "https://docs.api.jikan.moe/"
  },
  {
    name: "GitHub REST API",
    category: "Development",
    auth: "None",
    description: "Full programmatic access to GitHub. Fetch repos, users, commits, issues, PRs, organizations, and gists. No key needed for public data.",
    useCase: "Build developer portfolio showcases, GitHub stats widgets, automated repo analysis tools, contribution graphs, or CI/CD dashboards.",
    url: "https://api.github.com",
    docs: "https://docs.github.com/en/rest"
  },
  {
    name: "News API",
    category: "News",
    auth: "API Key",
    description: "Search global headlines from 80,000+ sources. Filter by keyword, category, country, language, or date range. 100 req/day on free tier.",
    useCase: "Build news aggregators, topic-specific news feeds, media monitoring dashboards, current events widgets, or research tools.",
    url: "https://newsapi.org/v2",
    docs: "https://newsapi.org/docs"
  },
  {
    name: "IP Geolocation",
    category: "Network",
    auth: "None",
    description: "Fast IP geolocation returning country, city, region, ISP, timezone, currency, and coordinates. Free for up to 30k requests/month without a key.",
    useCase: "Add location-aware personalization, customize content by country, build analytics tools, or implement regional redirect logic.",
    url: "https://ipapi.co/json/",
    docs: "https://ipapi.co/api/"
  },
  {
    name: "OpenFoodFacts",
    category: "Health",
    auth: "None",
    description: "Open database of food products worldwide. Access nutrition facts, ingredients, allergens, Nutri-Score, Eco-Score, and barcode scanning.",
    useCase: "Build nutrition trackers, barcode scanner apps, dietary restriction checkers, food comparison tools, or ethical shopping guides.",
    url: "https://world.openfoodfacts.org/api/v0",
    docs: "https://world.openfoodfacts.org/data"
  },
  {
    name: "Deck of Cards",
    category: "Games",
    auth: "None",
    description: "Full-featured card deck API. Create decks, shuffle, draw cards, reshuffle, add to piles, and restore previous states for card games.",
    useCase: "Build poker, blackjack, solitaire, or any card-based game without managing complex shuffling, dealing, and state-tracking logic.",
    url: "https://deckofcardsapi.com/api",
    docs: "https://deckofcardsapi.com/"
  },
  {
    name: "Art Institute of Chicago",
    category: "Art",
    auth: "None",
    description: "Access 100,000+ artworks from the Art Institute's renowned collection. High-resolution images, artist biographies, and rich metadata.",
    useCase: "Build virtual art galleries, museum tour guides, art discovery apps, educational art history platforms, or digital exhibitions.",
    url: "https://api.artic.edu/api/v1",
    docs: "https://api.artic.edu/docs/"
  },
  {
    name: "DiceBear Avatars",
    category: "Development",
    auth: "None",
    description: "Avatar generator API creating unique avatar images from any seed string. Multiple styles: bottts, identicon, pixel-art, thumbs, lorelei, etc.",
    useCase: "Generate default user profile pictures, create placeholder avatars in mockups, or add variety to test datasets with deterministic avatars.",
    url: "https://api.dicebear.com/7.x",
    docs: "https://www.dicebear.com/how-to-use/http-api/"
  },
  {
    name: "Universities List",
    category: "Education",
    auth: "None",
    description: "Global university database searchable by country. Returns institution names, domains, web pages, and state/province information.",
    useCase: "Build university search tools, education directories, college application portals, or campus comparison platforms for students.",
    url: "http://universities.hipolabs.com/search",
    docs: "https://github.com/Hipo/university-domains-list"
  },
  {
    name: "Dictionary API",
    category: "Education",
    auth: "None",
    description: "Free English dictionary API with definitions, phonetics, audio pronunciations, synonyms, antonyms, and usage example sentences.",
    useCase: "Build vocabulary apps, language learning tools, spell-check integrations, word-of-the-day widgets, or writing enhancement tools.",
    url: "https://api.dictionaryapi.dev/api/v2/entries/en/hello",
    docs: "https://dictionaryapi.dev/"
  },
  {
    name: "Genderize.io",
    category: "Data",
    auth: "None",
    description: "Predicts gender probability from a first name. Free tier returns probability and count. Companion APIs for age and nationality also available.",
    useCase: "Personalize user experiences by name, pre-fill form fields in demo apps, or enrich name-based analytics with demographic probabilities.",
    url: "https://api.genderize.io/?name=alex",
    docs: "https://genderize.io/"
  },
  {
    name: "Waifu.pics",
    category: "Fun",
    auth: "None",
    description: "Anime-style image API with dozens of SFW categories. Fast, reliable, and perfect for adding character art to Discord bots or web apps.",
    useCase: "Build anime-image bots for chat platforms, wallpaper randomizer apps, or add aesthetic character visuals to personal projects.",
    url: "https://api.waifu.pics/sfw/waifu",
    docs: "https://waifu.pics/docs"
  },
  {
    name: "Memegen.link",
    category: "Fun",
    auth: "None",
    description: "Programmatic meme generator API. Choose from popular templates, specify top and bottom text, and instantly get a shareable image URL.",
    useCase: "Build meme creator tools, social media content generators, reaction features for chat apps, or add humor to automated notifications.",
    url: "https://api.memegen.link/images",
    docs: "https://memegen.link/"
  },
  {
    name: "Random User",
    category: "Development",
    auth: "None",
    description: "Generates realistic random user profiles with names, emails, photos, addresses, logins, and more. Highly customizable with many parameters.",
    useCase: "Seed test databases with realistic data, populate UI mockups, stress-test forms with varied inputs, or generate demo account profiles.",
    url: "https://randomuser.me/api/",
    docs: "https://randomuser.me/documentation"
  },
  {
    name: "OpenStreetMap Nominatim",
    category: "Geo",
    auth: "None",
    description: "Free geocoding API converting addresses to coordinates and vice versa, powered by the collaborative OpenStreetMap database.",
    useCase: "Add maps and geocoding to apps without Google fees, geocode user addresses, build location search, or create routing applications.",
    url: "https://nominatim.openstreetmap.org",
    docs: "https://nominatim.org/release-docs/develop/api/Overview/"
  },
  {
    name: "Pokémon TCG API",
    category: "Games",
    auth: "None",
    description: "Dedicated Pokémon Trading Card Game API with comprehensive card data, set information, rarities, and high-quality card images.",
    useCase: "Build TCG collection trackers, deck builders, card price checkers, pack-opening simulators, or digital card-browsing experiences.",
    url: "https://api.pokemontcg.io/v2",
    docs: "https://docs.pokemontcg.io/"
  },
  {
    name: "Cataas",
    category: "Animals",
    auth: "None",
    description: "Cat as a Service. Get cat pictures with customizable text overlays, filters, colors, and dimensions. Endless feline content for any use.",
    useCase: "Add fun cat content to your app, create cat meme generators, build mood-based cat picture features, or brighten any UI with cats.",
    url: "https://cataas.com/cat",
    docs: "https://cataas.com/"
  },
  {
    name: "Bacon Ipsum",
    category: "Development",
    auth: "None",
    description: "A meatier lorem ipsum generator. Returns meat-themed filler text in configurable paragraphs with optional all-meat formatting.",
    useCase: "Generate placeholder content with personality for UI mockups, design presentations, or any prototyping project needing fun filler text.",
    url: "https://baconipsum.com/api/",
    docs: "https://baconipsum.com/json-api/"
  },
  {
    name: "SpaceX API",
    category: "Science",
    auth: "None",
    description: "Unofficial SpaceX API with launch data, rockets, capsules, ships, Starlink info, historical missions, and detailed telemetry data.",
    useCase: "Build SpaceX mission trackers, rocket comparison tools, launch countdowns, landing data visualizations, or space exploration dashboards.",
    url: "https://api.spacexdata.com/v4",
    docs: "https://github.com/r-spacex/SpaceX-API"
  },
  {
    name: "FreeToGame",
    category: "Games",
    auth: "None",
    description: "Curated list of free-to-play PC games with thumbnails, short descriptions, genres, platforms, and publisher information. Updated regularly.",
    useCase: "Build free game discovery platforms, budget-friendly game recommendation engines, or community sites for F2P gaming enthusiasts.",
    url: "https://www.freetogame.com/api",
    docs: "https://www.freetogame.com/api-doc"
  },
  {
    name: "Agify.io",
    category: "Data",
    auth: "None",
    description: "Predicts a person's likely age based on their first name. Simple clean API returning estimated age and data-point count for accuracy context.",
    useCase: "Add fun demographic-style personalization, create guessing game features, or build novelty name-analysis tools for entertainment apps.",
    url: "https://api.agify.io/?name=michael",
    docs: "https://agify.io/"
  },
  {
    name: "Imgflip",
    category: "Fun",
    auth: "None",
    description: "Access 100+ popular meme templates and generate captioned meme images programmatically. Returns ready-to-share image URLs instantly.",
    useCase: "Build meme creation tools, AI-powered meme bots, social media sharing apps, or integrate meme generation into chat platforms.",
    url: "https://api.imgflip.com/get_memes",
    docs: "https://imgflip.com/api"
  },
  {
    name: "ZipCodeAPI",
    category: "Geo",
    auth: "API Key",
    description: "US zip code lookup API returning city, state, county, area codes, timezones, and geolocation data. Free tier with 10 requests/hour.",
    useCase: "Add address auto-completion, zip code validation, location-based shipping estimates, or regional service availability checks to apps.",
    url: "https://www.zipcodeapi.com/rest",
    docs: "https://www.zipcodeapi.com/"
  },
  {
    name: "Kanye.rest",
    category: "Fun",
    auth: "None",
    description: "The simplest API on the internet. Returns a random Kanye West quote as plain JSON. No auth, no limits, no complexity — just quotes.",
    useCase: "Add random Kanye quotes as easter eggs, build quote-of-the-day features, or create fun Twitter/Discord bots with zero effort.",
    url: "https://api.kanye.rest/",
    docs: "https://kanye.rest/"
  }
];

// ── DOM REFS ──
const grid = document.getElementById('apiGrid');
const filterTags = document.getElementById('filterTags');
const searchInput = document.getElementById('searchInput');
const emptyState = document.getElementById('emptyState');
const resultsText = document.getElementById('resultsText');
const btnClear = document.getElementById('btnClear');

// ── STATE ──
let activeCategory = 'All';
let searchTerm = '';

// ── CATEGORIES ──
function getCategories() {
  const cats = new Set(apis.map(a => a.category));
  return ['All', ...[...cats].sort()];
}

// ── RENDER FILTER PILLS ──
function renderFilters() {
  const categories = getCategories();
  filterTags.innerHTML = categories.map(c =>
    `<button class="filter-tag${c === activeCategory ? ' active' : ''}" data-category="${c}">${c}</button>`
  ).join('');
}

// ── FILTER LOGIC ──
function getFilteredApis() {
  let filtered = apis;
  if (activeCategory !== 'All') {
    filtered = filtered.filter(a => a.category === activeCategory);
  }
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

// ── ESCAPE HTML ──
function esc(str) {
  const d = document.createElement('div');
  d.appendChild(document.createTextNode(str));
  return d.innerHTML;
}

// ── RENDER CARDS ──
function renderCards() {
  const filtered = getFilteredApis();

  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyState.style.display = 'block';
    resultsText.textContent = '0 results';
  } else {
    emptyState.style.display = 'none';
    resultsText.textContent = `Showing ${filtered.length} of ${apis.length} APIs`;

    grid.innerHTML = filtered.map((api, i) => `
      <article class="api-card" style="animation-delay:${i * 0.04}s">
        <div class="card-top">
          <h3>${esc(api.name)}</h3>
          <div class="card-tags">
            <span class="tag tag-cat">${esc(api.category)}</span>
            <span class="tag ${api.auth === 'None' ? 'tag-free' : 'tag-key'}">${esc(api.auth)}</span>
          </div>
        </div>
        <p class="card-desc">${esc(api.description)}</p>
        <div class="card-usecase">
          <strong>Use Case</strong> &mdash; ${esc(api.useCase)}
        </div>
        <div class="card-bottom">
          <a class="card-url" href="${esc(api.url)}" target="_blank" rel="noopener" title="${esc(api.url)}">${esc(api.url)}</a>
          <a class="btn-docs" href="${esc(api.docs)}" target="_blank" rel="noopener">
            Docs
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7 17L17 7"/>
              <path d="M7 7h10v10"/>
            </svg>
          </a>
        </div>
      </article>
    `).join('');
  }
}

// ── COUNTER ANIMATION ──
function animateCounters() {
  document.querySelectorAll('.counter').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1200;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    }

    requestAnimationFrame(tick);
  });
}

// ── CARD MOUSE TRACKING FOR GLOW ──
function initCardGlow() {
  grid.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.api-card');
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  });
}

// ── KEYBOARD SHORTCUT ──
function initKeyboard() {
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      searchInput.focus();
    }
    if (e.key === 'Escape' && document.activeElement === searchInput) {
      searchInput.blur();
      searchInput.value = '';
      searchTerm = '';
      renderCards();
    }
  });
}

// ── EVENT LISTENERS ──
filterTags.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-tag');
  if (!btn) return;
  activeCategory = btn.dataset.category;
  renderFilters();
  renderCards();

  // Scroll active pill into view on mobile
  btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
});

searchInput.addEventListener('input', () => {
  searchTerm = searchInput.value;
  renderCards();
});

btnClear.addEventListener('click', () => {
  searchInput.value = '';
  searchTerm = '';
  activeCategory = 'All';
  renderFilters();
  renderCards();
  searchInput.focus();
});

// ── STICKY TOOLBAR SHRINK ──
function initToolbarShrink() {
  const toolbar = document.getElementById('toolbar');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 40) {
          toolbar.classList.add('toolbar-compact');
        } else {
          toolbar.classList.remove('toolbar-compact');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ── INIT ──
document.querySelectorAll('.api-count-num').forEach(el => { el.textContent = apis.length; });
renderFilters();
renderCards();
animateCounters();
initCardGlow();
initKeyboard();
initToolbarShrink();
