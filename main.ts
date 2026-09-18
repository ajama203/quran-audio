import "./style.css";

type Lesson = {
  id: string;
  name: string;
  arabic: string;
  meaning: string;
};

type LanguageCopy = {
  code: string;
  tagline: string;
  welcome: string;
  copy: string;
  copySecond: string;
  start: string;
  home: string;
  lessons: string;
  lesson: string;
  play: string;
  pause: string;
  stop: string;
  repeat: string;
};

const lessons: Lesson[] = [
  { id: "106", name: "Quraysh", arabic: "سُورَةُ قُرَيْشٍ", meaning: "Quraysh" },
  { id: "107", name: "Al-Ma'un", arabic: "سُورَةُ الْمَاعُونِ", meaning: "De hulp" },
  { id: "108", name: "Al-Kawthar", arabic: "سُورَةُ الْكَوْثَرِ", meaning: "De overvloed" },
  { id: "109", name: "Al-Kafirun", arabic: "سُورَةُ الْكَافِرُونَ", meaning: "De ongelovigen" },
  { id: "110", name: "An-Nasr", arabic: "سُورَةُ النَّصْرِ", meaning: "De overwinning" },
  { id: "111", name: "Al-Masad", arabic: "سُورَةُ الْمَسَدِ", meaning: "De palmvezel" },
  { id: "112", name: "Al-Ikhlas", arabic: "سُورَةُ الْإِخْلَاصِ", meaning: "De zuiverheid" },
  { id: "113", name: "Al-Falaq", arabic: "سُورَةُ الْفَلَقِ", meaning: "De dageraad" },
  { id: "114", name: "An-Nas", arabic: "سُورَةُ النَّاسِ", meaning: "De mensen" },
];

const languages: LanguageCopy[] = [
  { code: "NL", tagline: "Luisteren • Leren • Herhalen", welcome: "Welkom bij", copy: "Luister, leer en herhaal", copySecond: "waar en wanneer je wilt.", start: "Ga naar de lessen", home: "Home", lessons: "Lessen", lesson: "Les", play: "Afspelen", pause: "Pauzeren", stop: "Stop", repeat: "Herhalen" },
  { code: "EN", tagline: "Listen • Learn • Repeat", welcome: "Welcome to", copy: "Listen, learn and repeat", copySecond: "wherever and whenever you want.", start: "Go to lessons", home: "Home", lessons: "Lessons", lesson: "Lesson", play: "Play", pause: "Pause", stop: "Stop", repeat: "Repeat" },
  { code: "SO", tagline: "Dhageyso • Baro • Ku celi", welcome: "Ku soo dhowow", copy: "Dhageyso, baro oo ku celi", copySecond: "meel kasta iyo waqti kasta.", start: "U gudub casharrada", home: "Bogga hore", lessons: "Casharro", lesson: "Cashar", play: "Daar", pause: "Hakad", stop: "Jooji", repeat: "Ku celi" },
  { code: "AR", tagline: "استمع • تعلّم • كرّر", welcome: "مرحباً بك في", copy: "استمع وتعلّم وكرّر", copySecond: "أينما ومتى شئت.", start: "اذهب إلى الدروس", home: "الرئيسية", lessons: "الدروس", lesson: "الدرس", play: "تشغيل", pause: "إيقاف مؤقت", stop: "إيقاف", repeat: "تكرار" },
];

const icon = (name: "globe" | "theme" | "menu" | "home" | "book" | "play" | "pause" | "stop" | "repeat" | "chevron" | "headphones" | "settings" | "info" | "heart" | "shield" | "help" | "close") => {
  const paths: Record<string, string> = {
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.4 3 14.6 0 18M12 3c-3 3.4-3 14.6 0 18"/>',
    theme: '<path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9Z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    home: '<path d="m3 11 9-8 9 8M5.5 9.5V21h13V9.5M9.5 21v-7h5v7"/>',
    book: '<path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H11v17H7.5A3.5 3.5 0 0 0 4 22V5.5ZM20 5.5A3.5 3.5 0 0 0 16.5 2H13v17h3.5A3.5 3.5 0 0 1 20 22V5.5Z"/>',
    play: '<path class="filled" d="m8 5 11 7-11 7V5Z"/>',
    pause: '<path class="filled" d="M7 5h4v14H7zM14 5h4v14h-4z"/>',
    stop: '<rect class="filled" x="6" y="6" width="12" height="12" rx="1"/>',
    repeat: '<path d="m17 2 4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 0 1-3 3H3"/>',
    chevron: '<path d="m9 18 6-6-6-6"/>',
    headphones: '<path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v7H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 1-2ZM20 14h-3v7h2a2 2 0 0 0 2-2v-3a2 2 0 0 0-1-2Z"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1 1.55V21h-4v-.08A1.7 1.7 0 0 0 9 19.37a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.63 15a1.7 1.7 0 0 0-1.55-1H3v-4h.08A1.7 1.7 0 0 0 4.63 9a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.63a1.7 1.7 0 0 0 1-1.55V3h4v.08A1.7 1.7 0 0 0 15 4.63a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.37 9a1.7 1.7 0 0 0 1.55 1H21v4h-.08a1.7 1.7 0 0 0-1.52 1Z"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/>',
    heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.7 2.7 0 1 1 3.7 2.5c-.8.4-1.2.8-1.2 1.7v.3M12 17h.01"/>',
    close: '<path d="M5 5l14 14M19 5 5 19"/>',
  };
  return `<svg aria-hidden="true" viewBox="0 0 24 24">${paths[name]}</svg>`;
};

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("App container ontbreekt");

app.innerHTML = `
  <div class="app-shell">
    <header class="topbar">
      <div class="brand"><h1>Quran Audio</h1><p id="tagline">Luisteren • Leren • Herhalen</p></div>
      <div class="actions">
        <button class="pill" id="lang" aria-label="Taal wijzigen">${icon("globe")}<span>NL</span></button>
        <button class="icon-button" id="theme" aria-label="Thema wijzigen">${icon("theme")}</button>
        <button class="menu-button" id="openMenu" aria-label="Menu openen">${icon("menu")}</button>
      </div>
    </header>

    <main>
      <section id="home" class="screen active" aria-labelledby="homeTitle">
        <div class="hero-card">
          <div class="hero-content">
            <p class="welcome" id="welcome">Welkom bij</p>
            <h2 id="homeTitle">Quran Audio</h2>
            <p class="home-copy"><span id="copyLineOne">Luister, leer en herhaal</span><br><span id="copyLineTwo">waar en wanneer je wilt.</span></p>
            <button class="start-button" id="start"><span id="startText">Ga naar de lessen</span><span class="start-arrow">→</span></button>
          </div>
        </div>
      </section>

      <section id="lessons" class="screen" aria-labelledby="lessonName">
        <div class="lesson-card" id="lessonCard">
          <button class="lesson-arrow previous" id="previous" aria-label="Vorige les">‹</button>
          <button class="lesson-arrow next" id="next" aria-label="Volgende les">›</button>
          <div class="lesson-info">
            <span class="lesson-badge" id="badge">Les 9</span>
            <h2 id="lessonName">An-Nas</h2>
            <div class="arabic" id="arabic" lang="ar" dir="rtl">سُورَةُ النَّاسِ</div>
            <div class="meaning" id="meaning">De mensen</div>
          </div>
          <div class="swipe-hint"><i></i><i class="active"></i><i></i></div>
        </div>

        <div class="player">
          <input id="seek" class="seek" type="range" min="0" max="100" value="0" aria-label="Afspeelpositie">
          <div class="times"><span id="currentTime">00:00</span><span id="duration">--:--</span></div>
          <div class="controls">
            <button class="control play" id="play"><span class="round">${icon("play")}</span><small id="playLabel">Afspelen</small></button>
            <button class="control stop" id="stop"><span class="round">${icon("stop")}</span><small id="stopLabel">Stop</small></button>
            <button class="control repeat" id="repeat"><span class="round">${icon("repeat")}</span><small id="repeatLabel">Herhalen</small></button>
          </div>
        </div>
      </section>
    </main>

    <nav class="bottom-nav" aria-label="Hoofdnavigatie">
      <button id="homeNav" class="active">${icon("home")}<span id="homeLabel">Home</span></button>
      <button id="lessonNav">${icon("book")}<span id="lessonLabel">Lessen</span></button>
    </nav>

    <div class="drawer" id="drawer" aria-hidden="true">
      <button class="shade" id="shade" aria-label="Menu sluiten"></button>
      <aside class="panel" aria-label="Menu">
        <button class="close-button" id="close" aria-label="Menu sluiten">${icon("close")}</button>
        <div class="menu-logo"><div class="book-mark">${icon("book")}</div><div><strong>Quran Audio</strong><span>Luisteren • Leren • Herhalen</span></div></div>
        <div class="menu-items">
          <button class="menu-item"><span class="menu-icon">${icon("headphones")}</span>Stem kiezen<span class="chevron">${icon("chevron")}</span></button>
          <button class="menu-item"><span class="menu-icon">${icon("settings")}</span>Instellingen<span class="chevron">${icon("chevron")}</span></button>
          <button class="menu-item"><span class="menu-icon">${icon("info")}</span>Over deze app<span class="chevron">${icon("chevron")}</span></button>
          <button class="menu-item"><span class="menu-icon">${icon("heart")}</span>Steun de app<span class="chevron">${icon("chevron")}</span></button>
          <button class="menu-item"><span class="menu-icon">${icon("shield")}</span>Privacy<span class="chevron">${icon("chevron")}</span></button>
          <button class="menu-item"><span class="menu-icon">${icon("help")}</span>Help & contact<span class="chevron">${icon("chevron")}</span></button>
        </div>
      </aside>
    </div>

    <audio id="audio" preload="metadata"></audio>
  </div>
`;

const get = <T extends HTMLElement>(id: string) => {
  const element = document.getElementById(id) as T | null;
  if (!element) throw new Error(`Element #${id} ontbreekt`);
  return element;
};

const audio = get<HTMLAudioElement>("audio");
const seek = get<HTMLInputElement>("seek");
const currentTime = get<HTMLSpanElement>("currentTime");
const duration = get<HTMLSpanElement>("duration");
const playButton = get<HTMLButtonElement>("play");
const drawer = get<HTMLDivElement>("drawer");

let lessonIndex = 8;
let languageIndex = 0;
let themeIndex = 0;
let touchStartX = 0;

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds)) return "--:--";
  const total = Math.floor(seconds);
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
};

const updatePlayButton = () => {
  const copy = languages[languageIndex];
  playButton.querySelector(".round")!.innerHTML = icon(audio.paused ? "play" : "pause");
  get<HTMLSpanElement>("playLabel").textContent = audio.paused ? copy.play : copy.pause;
};

const showScreen = (page: "home" | "lessons") => {
  document.querySelectorAll<HTMLElement>(".screen").forEach((screen) => {
    screen.classList.toggle("active", screen.id === page);
  });
  get<HTMLButtonElement>("homeNav").classList.toggle("active", page === "home");
  get<HTMLButtonElement>("lessonNav").classList.toggle("active", page === "lessons");
};

const loadLesson = (index: number, autoplay = false) => {
  lessonIndex = Math.max(0, Math.min(lessons.length - 1, index));
  const lesson = lessons[lessonIndex];

  audio.pause();

  // Lokale bestanden: public/audio/106.mp3 t/m public/audio/114.mp3
  audio.src = `/audio/${lesson.id}.mp3`;
  audio.load();

  get<HTMLSpanElement>("badge").textContent = `${languages[languageIndex].lesson} ${lessonIndex + 1}`;
  get<HTMLHeadingElement>("lessonName").textContent = lesson.name;
  get<HTMLDivElement>("arabic").textContent = lesson.arabic;
  get<HTMLDivElement>("meaning").textContent = lesson.meaning;
  get<HTMLButtonElement>("previous").disabled = lessonIndex === 0;
  get<HTMLButtonElement>("next").disabled = lessonIndex === lessons.length - 1;

  seek.value = "0";
  currentTime.textContent = "00:00";
  duration.textContent = "--:--";
  updatePlayButton();

  if (autoplay) {
    audio.play().then(updatePlayButton).catch((error) => {
      console.error("Audio kon niet starten:", error);
      updatePlayButton();
    });
  }
};

const applyLanguage = () => {
  const copy = languages[languageIndex];

  get<HTMLButtonElement>("lang").querySelector("span")!.textContent = copy.code;
  get<HTMLParagraphElement>("tagline").textContent = copy.tagline;
  get<HTMLParagraphElement>("welcome").textContent = copy.welcome;
  get<HTMLSpanElement>("copyLineOne").textContent = copy.copy;
  get<HTMLSpanElement>("copyLineTwo").textContent = copy.copySecond;
  get<HTMLSpanElement>("startText").textContent = copy.start;
  get<HTMLSpanElement>("homeLabel").textContent = copy.home;
  get<HTMLSpanElement>("lessonLabel").textContent = copy.lessons;
  get<HTMLSpanElement>("stopLabel").textContent = copy.stop;
  get<HTMLSpanElement>("repeatLabel").textContent = copy.repeat;
  get<HTMLSpanElement>("badge").textContent = `${copy.lesson} ${lessonIndex + 1}`;

  updatePlayButton();
};

const setDrawer = (open: boolean) => {
  drawer.classList.toggle("open", open);
  drawer.setAttribute("aria-hidden", String(!open));
  document.body.classList.toggle("drawer-open", open);
};

get<HTMLButtonElement>("start").addEventListener("click", () => showScreen("lessons"));
get<HTMLButtonElement>("homeNav").addEventListener("click", () => showScreen("home"));
get<HTMLButtonElement>("lessonNav").addEventListener("click", () => showScreen("lessons"));
get<HTMLButtonElement>("previous").addEventListener("click", () => loadLesson(lessonIndex - 1));
get<HTMLButtonElement>("next").addEventListener("click", () => loadLesson(lessonIndex + 1));
get<HTMLButtonElement>("openMenu").addEventListener("click", () => setDrawer(true));
get<HTMLButtonElement>("close").addEventListener("click", () => setDrawer(false));
get<HTMLButtonElement>("shade").addEventListener("click", () => setDrawer(false));

get<HTMLButtonElement>("lang").addEventListener("click", () => {
  languageIndex = (languageIndex + 1) % languages.length;
  applyLanguage();
});

get<HTMLButtonElement>("theme").addEventListener("click", () => {
  themeIndex = (themeIndex + 1) % 3;
  document.body.dataset.theme = ["dark", "light", "green"][themeIndex];
});

playButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play().then(updatePlayButton).catch((error) => {
      console.error("Audio kon niet starten:", error);
      updatePlayButton();
    });
  } else {
    audio.pause();
    updatePlayButton();
  }
});

get<HTMLButtonElement>("stop").addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
  updatePlayButton();
});

get<HTMLButtonElement>("repeat").addEventListener("click", () => {
  audio.currentTime = 0;
  audio.play().then(updatePlayButton).catch((error) => {
    console.error("Audio kon niet starten:", error);
    updatePlayButton();
  });
});

audio.addEventListener("loadedmetadata", () => {
  duration.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
  seek.value = String(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0);
  currentTime.textContent = formatTime(audio.currentTime);
});

audio.addEventListener("ended", updatePlayButton);
audio.addEventListener("pause", updatePlayButton);
audio.addEventListener("play", updatePlayButton);

audio.addEventListener("error", () => {
  console.error("Audiofout:", audio.src);
});

seek.addEventListener("input", () => {
  if (audio.duration) {
    audio.currentTime = (Number(seek.value) / 100) * audio.duration;
  }
});

const lessonCard = get<HTMLDivElement>("lessonCard");

lessonCard.addEventListener(
  "touchstart",
  (event) => {
    touchStartX = event.changedTouches[0].screenX;
  },
  { passive: true }
);

lessonCard.addEventListener(
  "touchend",
  (event) => {
    const distance = event.changedTouches[0].screenX - touchStartX;
    if (Math.abs(distance) > 65) {
      loadLesson(lessonIndex + (distance < 0 ? 1 : -1));
    }
  },
  { passive: true }
);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setDrawer(false);

  if (get<HTMLElement>("lessons").classList.contains("active")) {
    if (event.key === "ArrowRight") loadLesson(lessonIndex + 1);
    if (event.key === "ArrowLeft") loadLesson(lessonIndex - 1);
  }
});

loadLesson(lessonIndex);
