const stage = document.querySelector("#stage");
const nextKeyIndicator = document.querySelector("#nextKeyIndicator");
const statsBlock = document.querySelector("#statsBlock");
const statsGrade = document.querySelector("#statsGrade");
const statsMaxCombo = document.querySelector("#statsMaxCombo");
const statsAccuracy = document.querySelector("#statsAccuracy");
const statsJudges = document.querySelector("#statsJudges");
const catStateImg = document.querySelector("#catStateImg");
const catZone = document.querySelector("#catZone");
const combGhost = document.querySelector("#combGhost");
const overlay = document.querySelector("#overlay");
const startBtn = document.querySelector("#startBtn");
const muteBtn = document.querySelector("#muteBtn");
const scoreEl = document.querySelector("#score");
const bestEl = document.querySelector("#best");
const moodEl = document.querySelector("#mood");
const messageEl = document.querySelector("#message");
const comfortFill = document.querySelector("#comfortFill");
const alertFill = document.querySelector("#alertFill");
const comboText = document.querySelector("#comboText");
const modeBtn = document.querySelector("#modeBtn");
const prevSongBtn = document.querySelector("#prevSongBtn");
const nextSongBtn = document.querySelector("#nextSongBtn");
const editSongBtn = document.querySelector("#editSongBtn");
const importSongBtn = document.querySelector("#importSongBtn");
const deleteSongBtn = document.querySelector("#deleteSongBtn");
const songNameEl = document.querySelector("#songName");
const songBpmEl = document.querySelector("#songBpm");
const judgeText = document.querySelector("#judgeText");
const keyHint = document.querySelector("#keyHint");
const beatTip = document.querySelector("#beatTip");
const countInText = document.querySelector("#countInText");
const rhythmPreview = document.querySelector("#rhythmPreview");
const fxLayer = document.querySelector("#fxLayer");
const deathTitle = document.querySelector("#deathTitle");
const floorFur = document.querySelector("#floorFur");
const thinFur = document.querySelector("#thinFur");
const catNameEl = document.querySelector("#catName");
const catPersonalityEl = document.querySelector("#catPersonality");
const toolNameEl = document.querySelector("#toolName");
const toolIcon = document.querySelector("#toolIcon");
const prevCatBtn = document.querySelector("#prevCatBtn");
const nextCatBtn = document.querySelector("#nextCatBtn");
const editCatBtn = document.querySelector("#editCatBtn");
const addCatBtn = document.querySelector("#addCatBtn");
const deleteCatBtn = document.querySelector("#deleteCatBtn");
const catModal = document.querySelector("#catModal");
const catForm = document.querySelector("#catForm");
const catModalTitle = document.querySelector("#catModalTitle");
const catModalHint = document.querySelector("#catModalHint");
const saveCatBtn = document.querySelector("#saveCatBtn");
const restoreCatBtn = document.querySelector("#restoreCatBtn");
const cancelCatBtn = document.querySelector("#cancelCatBtn");
const newCatName = document.querySelector("#newCatName");
const newCatPersonality = document.querySelector("#newCatPersonality");
const newCatRelax = document.querySelector("#newCatRelax");
const newCatAngry = document.querySelector("#newCatAngry");
const songModal = document.querySelector("#songModal");
const songForm = document.querySelector("#songForm");
const songModalTitle = document.querySelector("#songModalTitle");
const songModalHint = document.querySelector("#songModalHint");
const saveSongBtn = document.querySelector("#saveSongBtn");
const restoreSongBtn = document.querySelector("#restoreSongBtn");
const cancelSongBtn = document.querySelector("#cancelSongBtn");
const newSongName = document.querySelector("#newSongName");
const newSongBpm = document.querySelector("#newSongBpm");
const newSongPattern = document.querySelector("#newSongPattern");
const newSongAudio = document.querySelector("#newSongAudio");
const prevToolBtn = document.querySelector("#prevToolBtn");
const nextToolBtn = document.querySelector("#nextToolBtn");
const deleteToolBtn = document.querySelector("#deleteToolBtn");
const toolUpload = document.querySelector("#toolUpload");

const BASE_DIFFICULTY = {
  minRelaxedTime: 2.0,
  maxRelaxedTime: 4.5,
  minWarningTime: 0.3,
  maxWarningTime: 0.6,
  speedThreshold: 40,
  reactionTime: 0.45,
  alertGain: 1,
  alertDecay: 0.7,
};

const BEST_STORAGE_KEY = "brush-photo-cat-best";
const LEGACY_CUSTOM_CATS_STORAGE_KEY = "brush-photo-cat-custom-cats";
const LEGACY_CUSTOM_SONGS_STORAGE_KEY = "brush-photo-cat-custom-songs";
const DB_NAME = "brush-photo-cat-db";
const DB_VERSION = 1;
const DB_CAT_STORE = "cats";
const DB_SONG_STORE = "songs";
const DB_META_STORE = "meta";
const META_MIGRATED_KEY = "legacy-migrated";

const BUILTIN_CAT_SPECS = [
  {
    id: "sunny-orange",
    label: "阳光小橘",
    relaxImg: "assets/阳光小橘0.png",
    angryImg: "assets/阳光小橘1.png",
    difficulty: {},
  },
  {
    id: "inky-boss",
    label: "煤老板",
    relaxImg: "assets/煤老板0.png",
    angryImg: "assets/煤老板1.png",
    difficulty: {
      minRelaxedTime: 1.7,
      maxRelaxedTime: 3.8,
      minWarningTime: 0.35,
      maxWarningTime: 0.76,
      speedThreshold: 47,
    },
  },
  {
    id: "wild-calico",
    label: "流浪三花",
    relaxImg: "assets/流浪三花0.png",
    angryImg: "assets/流浪三花1.png",
    difficulty: {
      minRelaxedTime: 2.35,
      maxRelaxedTime: 4.9,
      minWarningTime: 0.25,
      maxWarningTime: 0.56,
      speedThreshold: 36,
    },
  },
  {
    id: "moka",
    label: "摩卡",
    relaxImg: "assets/摩卡0.png",
    angryImg: "assets/摩卡1.png",
    difficulty: {
      minRelaxedTime: 2.15,
      maxRelaxedTime: 4.6,
      minWarningTime: 0.3,
      maxWarningTime: 0.64,
      speedThreshold: 42,
    },
  },
  {
    id: "xiaomi",
    label: "小咪",
    relaxImg: "assets/小咪0.png",
    angryImg: "assets/小咪1.png",
    difficulty: {
      minRelaxedTime: 2.0,
      maxRelaxedTime: 4.1,
      minWarningTime: 0.3,
      maxWarningTime: 0.6,
      speedThreshold: 39,
    },
  },
  {
    id: "scruffy-dog",
    label: "潦草小狗",
    relaxImg: "assets/潦草小狗0.png",
    angryImg: "assets/潦草小狗1.png",
    difficulty: {
      minRelaxedTime: 2.25,
      maxRelaxedTime: 4.85,
      minWarningTime: 0.3,
      maxWarningTime: 0.66,
      speedThreshold: 41,
    },
  },
  {
    id: "black-cat",
    label: "黑猫",
    relaxImg: "assets/黑猫0.png",
    angryImg: "assets/黑猫1.png",
    difficulty: {
      minRelaxedTime: 1.8,
      maxRelaxedTime: 3.7,
      minWarningTime: 0.34,
      maxWarningTime: 0.74,
      speedThreshold: 48,
    },
  },
  {
    id: "messy-tabby",
    label: "通天岩狸花猫",
    relaxImg: "assets/通天岩狸花猫0.png",
    angryImg: "assets/通天岩狸花猫1.png",
    difficulty: {
      minRelaxedTime: 1.95,
      maxRelaxedTime: 4.0,
      minWarningTime: 0.28,
      maxWarningTime: 0.58,
      speedThreshold: 38,
    },
  },
  {
    id: "night-heron",
    label: "夜鹭",
    relaxImg: "assets/夜鹭0.png",
    angryImg: "assets/夜鹭1.png",
    difficulty: {
      minRelaxedTime: 1.65,
      maxRelaxedTime: 3.45,
      minWarningTime: 0.4,
      maxWarningTime: 0.78,
      speedThreshold: 50,
    },
  },
  {
    id: "goofy-cat",
    label: "丑猫",
    relaxImg: "assets/丑猫0.png",
    angryImg: "assets/丑猫1.png",
    difficulty: {
      minRelaxedTime: 2.2,
      maxRelaxedTime: 4.6,
      minWarningTime: 0.28,
      maxWarningTime: 0.58,
      speedThreshold: 37,
    },
  },
];

const RANDOM_CAT_NAMES = [
  "糯米团",
  "小班长",
  "糊糊",
  "奶油警官",
  "绒绒站长",
  "脆脆",
  "阿福",
  "团子舰长",
  "白袜",
  "小宇宙",
  "焦糖",
  "碎银",
];

const RANDOM_CAT_INTROS = [
  "看着懒洋洋，实际上一直在观察你有没有偷懒。",
  "喜欢别人轻轻梳，但一旦手重就会立刻回头。",
  "会在快睡着和突然警觉之间无缝切换。",
  "最擅长用无辜脸骗你继续服务。",
  "舒服的时候会眯眼，不舒服的时候会盯到你心虚。",
  "表面乖巧，内心其实是节奏判官。",
  "只要你稳一点，它就愿意再给你几拍机会。",
  "回头速度像查岗，但被梳顺了又会偷偷满意。",
];

const BUILTIN_SONG_DEFS = [
  {
    id: "purr-practice",
    name: "呼噜练习曲",
    bpm: 84,
    pattern: ["2", "0", "1", "S", "1", "1", "0", "L"],
  },
  {
    id: "tail-swing",
    name: "猫尾摇摆",
    bpm: 104,
    pattern: ["2", "1", "0", "S", "1", "0", "2", "L"],
  },
  {
    id: "midnight-fur",
    name: "午夜炸毛",
    bpm: 128,
    pattern: ["1", "0", "2", "1", "S", "0", "1", "L", "2", "0", "S", "1"],
  },
];

const RHYTHM_EVENT_DEFS = {
  tap: {
    key: "tap",
    label: "普通拍",
    judgeable: true,
    previewLabel: "拍",
    scoreBonus: 0,
    comfortBonus: 0,
    alertEase: 4,
    keybind: "J / F",
    tip: "顺着节拍梳，保持均匀手感。",
  },
  accent: {
    key: "accent",
    label: "重拍",
    judgeable: true,
    previewLabel: "重",
    scoreBonus: 1,
    comfortBonus: 2,
    alertEase: 6,
    keybind: "K / D",
    tip: "重拍到了，这一下更赚分。",
  },
  rest: {
    key: "rest",
    label: "空拍",
    judgeable: false,
    previewLabel: "空",
    keybind: "-",
    tip: "空拍收一下手，别乱刷。",
  },
  look: {
    key: "look",
    label: "回头",
    judgeable: false,
    previewLabel: "看",
    watch: true,
    watchReward: 2,
    graceBeats: 0.85,
    watchBeats: 1.15,
    keybind: "松开",
    tip: "回头拍到了，马上停手。",
  },
  peek: {
    key: "peek",
    label: "偷看",
    judgeable: false,
    previewLabel: "瞄",
    watch: true,
    watchReward: 1,
    graceBeats: 0.52,
    watchBeats: 0.8,
    keybind: "松开",
    tip: "偷看会很短，轻轻收手。",
  },
};

const RHYTHM_KEY_BINDINGS = {
  KeyJ: "tap",
  KeyF: "tap",
  KeyK: "accent",
  KeyD: "accent",
};

const RHYTHM_PATTERN_ALIAS = {
  0: "rest",
  1: "tap",
  2: "accent",
  "-": "rest",
  R: "rest",
  REST: "rest",
  TAP: "tap",
  T: "tap",
  A: "accent",
  ACCENT: "accent",
  L: "look",
  LOOK: "look",
  X: "look",
  "!": "look",
  S: "peek",
  P: "peek",
  PEEK: "peek",
};

const cats = [];
const songs = [];

const tools = [
  { name: "梳子", img: "assets/comb.png", cursorHotspot: "406 210" },
  { name: "锄头", img: "assets/hoe.png", cursorHotspot: "347 290" },
  { name: "掏耳勺", img: "assets/earpick.png", cursorHotspot: "406 286" },
];

const state = {
  initialized: false,
  initFailed: false,
  pendingStart: false,
  running: false,
  pointerDown: false,
  grooming: false,
  watching: false,
  score: 0,
  best: Number(localStorage.getItem(BEST_STORAGE_KEY) || 0),
  distance: 0,
  lastPoint: null,
  lastMoveAt: 0,
  comfort: 0,
  alert: 0,
  combo: 0,
  nextWatchAt: 0,
  nextWatchTimer: 0,
  leaveWatchTimer: 0,
  graceTimer: 0,
  warningGraceUntil: 0,
  audio: null,
  songBufferSource: null,
  songGain: null,
  brushNoise: null,
  brushNoiseGain: null,
  brushNoiseFilter: null,
  muted: false,
  catIndex: 0,
  toolIndex: 0,
  rhythmMode: false,
  songIndex: 0,
  watchReason: "normal",
  watchReward: 0,
  watchEligible: false,
  currentBeatKey: "rest",
  activeRhythmKeys: new Set(),
  db: null,
  managedObjectUrls: new Set(),
  migrationNotice: "",
  editingCatId: null,
  editingSongId: null,
  beatDuration: 0,
  rhythmStartTime: 0,
  rhythmScheduleCursor: 0,
  schedulerTimer: 0,
  previewFrame: 0,
  lastAnnouncedBeat: -Infinity,
  lastJudgedBeat: -1,
  countInBeats: 4,
  phraseMisses: 0,
  phraseStartBeat: 0,
  statsPerfect: 0,
  statsGood: 0,
  statsMiss: 0,
  statsMaxCombo: 0,
};

bestEl.textContent = String(state.best);
updateMuteButton();
updateCareMeters();
startBtn.disabled = true;
startBtn.textContent = "加载中...";

bootstrap();

async function bootstrap() {
  try {
    state.db = await openDatabase();
    await migrateLegacyStorageIfNeeded();
    await hydrateGameData();
    applyTool();
    applyCat({ resetToRelaxed: true });
    applySong();
    resetRoundVisuals();
    if (state.migrationNotice) {
      updateBeatTip(state.migrationNotice);
    }
    state.initialized = true;
    startBtn.disabled = false;
    if (!state.running) startBtn.textContent = "开始";
    if (state.pendingStart) {
      state.pendingStart = false;
      startGame();
    }
  } catch (error) {
    console.error("Failed to initialize game", error);
    await initializeFallbackData();
    state.initFailed = true;
    setJudgeState("降级启动", "good");
    updateBeatTip("本地存储初始化失败，已切到内置数据。");
    state.initialized = true;
    startBtn.disabled = false;
    if (!state.running) startBtn.textContent = "开始";
    if (state.pendingStart) {
      state.pendingStart = false;
      startGame();
    }
    return;
    setJudgeState("加载失败", "miss");
    updateBeatTip("初始化失败，请刷新后重试。");
  }
}

async function initializeFallbackData() {
  const [builtCats, builtSongs] = await Promise.all([buildBuiltinCats([]), buildSongs([])]);
  cats.splice(0, cats.length, ...builtCats);
  songs.splice(0, songs.length, ...builtSongs);
  state.catIndex = 0;
  state.songIndex = 0;
  applyTool();
  applyCat({ resetToRelaxed: true });
  applySong();
  resetRoundVisuals();
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function createId(prefix) {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

function currentAudioTime() {
  return state.audio ? state.audio.currentTime : performance.now() / 1000;
}

function createManagedUrl(blob) {
  const url = URL.createObjectURL(blob);
  state.managedObjectUrls.add(url);
  return url;
}

window.addEventListener("beforeunload", () => {
  for (const url of state.managedObjectUrls) URL.revokeObjectURL(url);
  state.managedObjectUrls.clear();
});

function setJudgeState(text, tone = "") {
  judgeText.textContent = text;
  judgeText.className = tone;
}

function setNextKeyIndicator(eventKey, approaching = false) {
  if (!state.running || !state.rhythmMode) {
    nextKeyIndicator.classList.remove("show");
    return;
  }
  const event = getBeatEvent(eventKey);
  nextKeyIndicator.classList.remove("tap-indicator", "accent-indicator", "watch-indicator");

  if (event.key === "tap") {
    nextKeyIndicator.innerHTML = '<span class="indicator-key">J/F</span><span>梳毛</span>';
    nextKeyIndicator.classList.add("tap-indicator", "show");
  } else if (event.key === "accent") {
    nextKeyIndicator.innerHTML = '<span class="indicator-key accent-key">K/D</span><span>重梳!</span>';
    nextKeyIndicator.classList.add("accent-indicator", "show");
  } else if (event.key === "look") {
    nextKeyIndicator.innerHTML = '<span class="indicator-key">!!</span><span>松手!</span>';
    nextKeyIndicator.classList.add("watch-indicator", "show");
  } else if (event.key === "peek") {
    nextKeyIndicator.innerHTML = '<span class="indicator-key">!</span><span>收手</span>';
    nextKeyIndicator.classList.add("watch-indicator", "show");
  } else {
    nextKeyIndicator.classList.remove("show");
  }
}

function triggerScreenShake() {
  stage.classList.remove("screen-shake");
  void stage.offsetWidth;
  stage.classList.add("screen-shake");
}

function flashCat(result) {
  catStateImg.classList.remove("cat-hit-flash", "perfect-flash", "miss-flash");
  void catStateImg.offsetWidth;
  if (result === "Perfect") {
    catStateImg.classList.add("cat-hit-flash", "perfect-flash");
    triggerScreenShake();
  } else if (result === "Good") {
    catStateImg.classList.add("cat-hit-flash");
  } else if (result === "Miss") {
    catStateImg.classList.add("miss-flash");
  }
}

function spawnComboMilestone(combo) {
  const el = document.createElement("div");
  el.className = "combo-milestone";
  el.textContent = `${combo} 连击!`;
  fxLayer.append(el);
  el.addEventListener("animationend", () => el.remove(), { once: true });
  playBrushAccent("Perfect");
}

function getGrade(accuracy, maxCombo) {
  if (accuracy >= 100) return "SS";
  if (accuracy >= 95) return "S";
  if (accuracy >= 85) return "A";
  if (accuracy >= 70) return "B";
  if (accuracy >= 55) return "C";
  return "D";
}

function updateBeatTip(text) {
  beatTip.textContent = text;
}

function updateKeyHint(text) {
  keyHint.innerHTML = text;
}

function setCountInText(text) {
  countInText.textContent = text;
}

function describeRhythmKeys() {
  return '<span class="keycap">J</span><span class="keycap">F</span> 普通拍 &nbsp; <span class="keycap accent-key">K</span><span class="keycap accent-key">D</span> 重拍 &nbsp; 回头/偷看 → 松手';
}

function describeSongRhythm(song) {
  const hasLook = song.pattern.includes("look");
  const hasPeek = song.pattern.includes("peek");
  const hasAccent = song.pattern.includes("accent");

  if (hasLook && hasPeek) {
    return hasAccent
      ? "这首歌有重拍、偷看和回头，读谱会更关键。"
      : "这首歌会在空拍里偷看，也会突然回头。";
  }
  if (hasLook) return "这首歌会跟着重音回头，重拍后别贪手。";
  if (hasPeek) return "这首歌会在空拍偷看，留一点收手空间。";
  return "顺着节拍梳，空拍时记得轻轻收手。";
}

function pickRandomCatProfile() {
  return {
    name: RANDOM_CAT_NAMES[Math.floor(Math.random() * RANDOM_CAT_NAMES.length)],
    personality: RANDOM_CAT_INTROS[Math.floor(Math.random() * RANDOM_CAT_INTROS.length)],
  };
}

function parseBeatToken(value) {
  if (typeof value === "number") return RHYTHM_PATTERN_ALIAS[value] || null;
  const token = String(value || "")
    .trim()
    .toUpperCase();
  return RHYTHM_PATTERN_ALIAS[token] || null;
}

function normalizeBeatToken(value) {
  return parseBeatToken(value) || "rest";
}

function enrichSongPattern(pattern, isCustom = false) {
  const normalized = pattern.map(normalizeBeatToken).filter(Boolean);
  if (!normalized.length) {
    return ["accent", "rest", "tap", "peek", "tap", "rest", "tap", "look"];
  }

  const enriched = normalized.slice();

  if (isCustom) {
    if (!enriched.includes("look") && !enriched.includes("peek")) {
      const last = enriched.length - 1;
      enriched[last] = enriched[last] === "rest" ? "peek" : "look";
    }
    return enriched;
  }

  if (!enriched.includes("accent") && enriched[0] === "tap") {
    enriched[0] = "accent";
  }

  if (!enriched.includes("look") && !enriched.includes("peek")) {
    const spacing = enriched.length >= 8 ? 4 : Math.max(2, Math.floor(enriched.length / 2));
    for (let index = spacing - 1; index < enriched.length; index += spacing) {
      if (index === enriched.length - 1) {
        enriched[index] = enriched[index] === "rest" ? "peek" : "look";
      } else if (enriched[index] === "rest") {
        enriched[index] = "peek";
      }
    }

    if (!enriched.includes("peek") && enriched.length > 4) {
      const middle = Math.floor(enriched.length / 2);
      if (enriched[middle] === "rest") enriched[middle] = "peek";
    }

    if (!enriched.includes("look")) {
      const last = enriched.length - 1;
      enriched[last] = enriched[last] === "rest" ? "peek" : "look";
    }
  }

  return enriched;
}

function normalizeSongDefinition(song) {
  return {
    ...song,
    builtin: Boolean(song.builtin),
    custom: Boolean(song.custom),
    override: Boolean(song.override),
    audioBlob: song.audioBlob || null,
    audioBuffer: song.audioBuffer || null,
    pattern: enrichSongPattern(Array.isArray(song.pattern) ? song.pattern : [], Boolean(song.custom)),
  };
}

function normalizeCatDefinition(cat) {
  return {
    ...cat,
    builtin: Boolean(cat.builtin),
    custom: Boolean(cat.custom),
    override: Boolean(cat.override),
    difficulty: { ...BASE_DIFFICULTY, ...(cat.difficulty || {}) },
    relaxBlob: cat.relaxBlob || null,
    angryBlob: cat.angryBlob || null,
  };
}

function getCurrentCat() {
  return cats[state.catIndex];
}

function getCurrentSong() {
  return songs[state.songIndex];
}

function getCurrentTool() {
  return tools[state.toolIndex];
}

function getCurrentDifficulty() {
  return getCurrentCat()?.difficulty || BASE_DIFFICULTY;
}

async function ensureSongAudioDecoded(song) {
  if (!song || song.audioBuffer || !song.audioBlob) return song;
  song.audioBuffer = await decodeAudioBlob(song.audioBlob);
  return song;
}

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = () => reject(request.error);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(DB_CAT_STORE)) db.createObjectStore(DB_CAT_STORE, { keyPath: "id" });
      if (!db.objectStoreNames.contains(DB_SONG_STORE)) db.createObjectStore(DB_SONG_STORE, { keyPath: "id" });
      if (!db.objectStoreNames.contains(DB_META_STORE)) db.createObjectStore(DB_META_STORE, { keyPath: "key" });
    };
    request.onsuccess = () => resolve(request.result);
  });
}

function idbGetAll(storeName) {
  return new Promise((resolve, reject) => {
    const tx = state.db.transaction(storeName, "readonly");
    const store = tx.objectStore(storeName);
    const request = store.getAll();
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result || []);
  });
}

function idbGet(storeName, key) {
  return new Promise((resolve, reject) => {
    const tx = state.db.transaction(storeName, "readonly");
    const store = tx.objectStore(storeName);
    const request = store.get(key);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
}

function idbReplaceAll(storeName, records) {
  return new Promise((resolve, reject) => {
    const tx = state.db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);
    const clearRequest = store.clear();
    clearRequest.onerror = () => reject(clearRequest.error);
    clearRequest.onsuccess = () => {
      for (const record of records) store.put(record);
    };
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

function idbDelete(storeName, key) {
  return new Promise((resolve, reject) => {
    const tx = state.db.transaction(storeName, "readwrite");
    tx.objectStore(storeName).delete(key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

function idbPut(storeName, record) {
  return new Promise((resolve, reject) => {
    const tx = state.db.transaction(storeName, "readwrite");
    tx.objectStore(storeName).put(record);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

function isStableImageSource(src) {
  if (!src || typeof src !== "string") return false;
  return !src.startsWith("blob:");
}

async function migrateLegacyStorageIfNeeded() {
  const migrated = await idbGet(DB_META_STORE, META_MIGRATED_KEY);
  if (migrated?.value) return;

  const legacyCatNotes = [];
  const legacySongNotes = [];
  const catRecords = [];
  const songRecords = [];

  try {
    const rawCats = localStorage.getItem(LEGACY_CUSTOM_CATS_STORAGE_KEY);
    if (rawCats) {
      const parsedCats = JSON.parse(rawCats);
      if (Array.isArray(parsedCats)) {
        for (const cat of parsedCats) {
          if (!isStableImageSource(cat.relaxImg) || !isStableImageSource(cat.angryImg)) {
            legacyCatNotes.push("旧自定义猫的图片无法恢复，需要重新设置。");
            continue;
          }
          catRecords.push({
            id: cat.id || createId("custom-cat"),
            custom: true,
            builtin: false,
            override: false,
            name: cat.name || "自定义猫",
            personality: cat.personality || "神秘的梳毛客人。",
            difficulty: { ...BASE_DIFFICULTY, ...(cat.difficulty || {}) },
            relaxSrc: cat.relaxImg,
            angrySrc: cat.angryImg,
            combinedImg: cat.combinedImg || "",
            displayAspectRatio: cat.displayAspectRatio || null,
          });
        }
      }
    }

    const rawSongs = localStorage.getItem(LEGACY_CUSTOM_SONGS_STORAGE_KEY);
    if (rawSongs) {
      const parsedSongs = JSON.parse(rawSongs);
      if (Array.isArray(parsedSongs)) {
        for (const song of parsedSongs) {
          songRecords.push({
            id: song.id || createId("custom-song"),
            custom: true,
            builtin: false,
            override: false,
            name: song.name || "迁移节拍",
            bpm: Number(song.bpm) || 100,
            pattern: Array.isArray(song.pattern) ? song.pattern : [],
            audioBlob: null,
          });
        }
        if (parsedSongs.length) {
          legacySongNotes.push("旧自定义歌曲的节拍已迁移，音频需要重新选择一次。");
        }
      }
    }
  } catch (error) {
    console.warn("Failed to migrate legacy storage", error);
  }

  if (catRecords.length) await idbReplaceAll(DB_CAT_STORE, catRecords);
  if (songRecords.length) await idbReplaceAll(DB_SONG_STORE, songRecords);
  await idbPut(DB_META_STORE, { key: META_MIGRATED_KEY, value: true });

  localStorage.removeItem(LEGACY_CUSTOM_CATS_STORAGE_KEY);
  localStorage.removeItem(LEGACY_CUSTOM_SONGS_STORAGE_KEY);

  const notes = [...legacyCatNotes, ...legacySongNotes];
  if (notes.length) state.migrationNotice = notes[0];
}

function ensureAudioContext() {
  if (!state.audio) {
    state.audio = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (!state.songGain) {
    state.songGain = state.audio.createGain();
    state.songGain.gain.value = 0.18;
    state.songGain.connect(state.audio.destination);
  }
}

function unlockAudio() {
  ensureAudioContext();
  if (state.audio.state === "suspended") state.audio.resume();
}

function decodeAudioBlob(blob) {
  if (!blob) return Promise.resolve(null);
  ensureAudioContext();
  return blob.arrayBuffer().then((bytes) => state.audio.decodeAudioData(bytes.slice(0)));
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

async function combineStateImages(angrySrc, relaxSrc) {
  const [angry, relax] = await Promise.all([loadImage(angrySrc), loadImage(relaxSrc)]);
  const angryWidth = angry.naturalWidth || angry.width;
  const angryHeight = angry.naturalHeight || angry.height;
  const relaxWidth = relax.naturalWidth || relax.width;
  const relaxHeight = relax.naturalHeight || relax.height;
  const halfWidth = Math.max(angryWidth, relaxWidth);
  const height = Math.max(angryHeight, relaxHeight);
  const canvas = document.createElement("canvas");
  canvas.width = halfWidth * 2;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(angry, 0, Math.max(0, (height - angryHeight) / 2));
  ctx.drawImage(relax, halfWidth, Math.max(0, (height - relaxHeight) / 2));
  return {
    src: canvas.toDataURL("image/png"),
    aspectRatio: halfWidth / height,
  };
}

function getDisplayedCatImage(cat = getCurrentCat()) {
  if (!cat) return "";
  return state.watching ? cat.angryImg || cat.relaxImg : cat.relaxImg || cat.angryImg;
}

async function buildBuiltinCats(storedCatRecords) {
  const overrides = new Map(storedCatRecords.filter((item) => item.override).map((item) => [item.id, item]));
  return Promise.all(
    BUILTIN_CAT_SPECS.map(async (spec) => {
      const profile = pickRandomCatProfile();
      const override = overrides.get(spec.id);
      const baseCat = normalizeCatDefinition({
        id: spec.id,
        builtin: true,
        custom: false,
        override: false,
        originLabel: spec.label,
        name: profile.name,
        personality: profile.personality,
        relaxImg: spec.relaxImg,
        angryImg: spec.angryImg,
        difficulty: { ...BASE_DIFFICULTY, ...(spec.difficulty || {}) },
      });

      const merged = normalizeCatDefinition({
        ...baseCat,
        ...(override || {}),
        builtin: true,
        custom: false,
        override: Boolean(override),
        originLabel: spec.label,
        difficulty: { ...baseCat.difficulty, ...(override?.difficulty || {}) },
      });

      if (override?.relaxBlob) merged.relaxImg = createManagedUrl(override.relaxBlob);
      else if (override?.relaxSrc) merged.relaxImg = override.relaxSrc;

      if (override?.angryBlob) merged.angryImg = createManagedUrl(override.angryBlob);
      else if (override?.angrySrc) merged.angryImg = override.angrySrc;

      return normalizeCatDefinition(merged);
    }),
  );
}

async function hydrateStoredCustomCat(record) {
  const relaxImg = record.relaxBlob ? createManagedUrl(record.relaxBlob) : record.relaxSrc;
  const angryImg = record.angryBlob ? createManagedUrl(record.angryBlob) : record.angrySrc;
  if (!relaxImg || !angryImg) return null;
  return normalizeCatDefinition({
    ...record,
    relaxImg,
    angryImg,
  });
}

async function buildSongs(storedSongRecords) {
  const overrides = new Map(storedSongRecords.filter((item) => item.override).map((item) => [item.id, item]));
  const builtins = await Promise.all(
    BUILTIN_SONG_DEFS.map(async (song) => {
      const override = overrides.get(song.id);
      const merged = normalizeSongDefinition({
        ...song,
        ...(override || {}),
        builtin: true,
        custom: false,
        override: Boolean(override),
      });
      if (override?.audioBlob) merged.audioBlob = override.audioBlob;
      return merged;
    }),
  );

  const customs = [];
  for (const record of storedSongRecords.filter((item) => item.custom)) {
    const hydrated = normalizeSongDefinition(record);
    customs.push(hydrated);
  }

  return [...builtins, ...customs];
}

async function hydrateGameData() {
  const [storedCatRecords, storedSongRecords] = await Promise.all([
    idbGetAll(DB_CAT_STORE),
    idbGetAll(DB_SONG_STORE),
  ]);

  const [builtCats, builtSongs] = await Promise.all([
    buildBuiltinCats(storedCatRecords),
    buildSongs(storedSongRecords),
  ]);

  const customCats = [];
  for (const record of storedCatRecords.filter((item) => item.custom)) {
    const cat = await hydrateStoredCustomCat(record);
    if (cat) customCats.push(cat);
  }

  cats.splice(0, cats.length, ...builtCats, ...customCats);
  songs.splice(0, songs.length, ...builtSongs);
  state.catIndex = clamp(state.catIndex, 0, Math.max(0, cats.length - 1));
  state.songIndex = clamp(state.songIndex, 0, Math.max(0, songs.length - 1));
}

function serializeCatRecord(cat) {
  return {
    id: cat.id,
    builtin: cat.builtin,
    custom: cat.custom,
    override: cat.override,
    name: cat.name,
    personality: cat.personality,
    difficulty: cat.difficulty,
    relaxBlob: cat.relaxBlob || null,
    angryBlob: cat.angryBlob || null,
    relaxSrc: cat.relaxBlob ? null : cat.relaxImg,
    angrySrc: cat.angryBlob ? null : cat.angryImg,
    combinedImg: cat.combinedImg || "",
    displayAspectRatio: cat.displayAspectRatio || null,
  };
}

function serializeSongRecord(song) {
  return {
    id: song.id,
    builtin: song.builtin,
    custom: song.custom,
    override: song.override,
    name: song.name,
    bpm: song.bpm,
    pattern: song.pattern,
    audioBlob: song.audioBlob || null,
  };
}

async function persistCats() {
  const records = cats.filter((cat) => cat.custom || cat.override).map(serializeCatRecord);
  await idbReplaceAll(DB_CAT_STORE, records);
}

async function persistSongs() {
  const records = songs.filter((song) => song.custom || song.override).map(serializeSongRecord);
  await idbReplaceAll(DB_SONG_STORE, records);
}

function pointInsideCat(point) {
  const rect = catZone.getBoundingClientRect();
  return point.x >= rect.left && point.x <= rect.right && point.y >= rect.top && point.y <= rect.bottom;
}

function getPoint(event) {
  const touch = event.touches?.[0] || event.changedTouches?.[0];
  return {
    x: touch ? touch.clientX : event.clientX,
    y: touch ? touch.clientY : event.clientY,
  };
}

function moveComb(point) {
  const rect = stage.getBoundingClientRect();
  combGhost.style.left = `${point.x - rect.left}px`;
  combGhost.style.top = `${point.y - rect.top}px`;
  combGhost.classList.add("visible");
}

function isUiInteractionTarget(target) {
  if (!(target instanceof Element)) return false;
  return Boolean(
    target.closest(
      ".modal.show, .overlay.show, .hud, .care-panel, .rhythm-panel, .selector, .mute-btn, .panel, button, input, label, select, textarea",
    ),
  );
}

function updateCareMeters() {
  comfortFill.style.width = `${Math.round(state.comfort)}%`;
  alertFill.style.width = `${Math.round(state.alert)}%`;
  comboText.textContent = `连击 x${state.combo}`;
  if (state.combo >= 25) {
    comboText.classList.add("combo-hot");
  } else {
    comboText.classList.remove("combo-hot");
  }
}

function updateMuteButton() {
  muteBtn.textContent = state.muted ? "🔇" : "🔊";
  muteBtn.setAttribute("aria-label", state.muted ? "开启声音" : "静音");
}

function updateOverlayCopy() {
  messageEl.textContent = state.rhythmMode
    ? "跟着节拍梳毛：重拍更赚分，回头和偷看时要及时收手。"
    : "按住并在猫身上移动来梳毛。它会随机回头，而且盯你的时间并不固定。";
}

function applyCat({ resetToRelaxed = false } = {}) {
  const cat = normalizeCatDefinition(getCurrentCat());
  cats[state.catIndex] = cat;
  catStateImg.src = getDisplayedCatImage(cat);
  catStateImg.alt = cat.name;
  catNameEl.textContent = cat.name;
  catPersonalityEl.textContent = cat.personality;
  deleteCatBtn.disabled = cat.builtin;
  editCatBtn.disabled = false;

  if (cat.displayAspectRatio) {
    catZone.style.aspectRatio = String(cat.displayAspectRatio);
  } else {
    catZone.style.removeProperty("aspect-ratio");
  }

  if (resetToRelaxed) {
    state.watching = false;
    setRelaxedState();
  }
}

function applySong() {
  const song = getCurrentSong();
  songNameEl.textContent = song.name;
  songBpmEl.textContent = `${song.bpm} BPM`;
  deleteSongBtn.disabled = song.builtin;
  editSongBtn.disabled = false;
  if (state.rhythmMode) {
    updateBeatTip(describeSongRhythm(song));
    updateKeyHint(describeRhythmKeys());
  }
}

function applyTool() {
  const tool = getCurrentTool();
  toolNameEl.textContent = tool.name;
  toolIcon.src = tool.img;
  toolIcon.alt = tool.name;
  combGhost.src = tool.img;
  stage.style.cursor = `url("${tool.img}") ${tool.cursorHotspot}, auto`;
}

function setRelaxedState() {
  state.watching = false;
  state.warningGraceUntil = 0;
  catStateImg.src = getDisplayedCatImage();
  moodEl.textContent = "放松";
  stage.classList.remove("watching", "grace");
  stage.classList.add("relaxed");
}

function setWarningState() {
  catStateImg.src = getDisplayedCatImage();
  moodEl.textContent = "警觉";
  stage.classList.remove("relaxed");
  stage.classList.add("watching", "grace");
}

function getWarningDynamicCut() {
  return Math.floor(state.score / 20) * 0.03;
}

function clearTimers() {
  window.clearTimeout(state.nextWatchTimer);
  window.clearTimeout(state.leaveWatchTimer);
  window.clearTimeout(state.graceTimer);
  window.clearTimeout(state.schedulerTimer);
  if (state.previewFrame) cancelAnimationFrame(state.previewFrame);
  state.nextWatchTimer = 0;
  state.leaveWatchTimer = 0;
  state.graceTimer = 0;
  state.schedulerTimer = 0;
  state.previewFrame = 0;
}

function scheduleWatch() {
  window.clearTimeout(state.nextWatchTimer);
  state.nextWatchTimer = 0;
  state.nextWatchAt = 0;
  if (!state.running || state.rhythmMode || !state.grooming || state.watching) return;
  const difficulty = getCurrentDifficulty();
  const minTime = difficulty.minRelaxedTime;
  const maxTime = Math.max(minTime, difficulty.maxRelaxedTime);
  const alertPressure = state.alert / 100;
  const relaxedWindowMs = Math.max(0.8, randomBetween(minTime, maxTime) * (1 - alertPressure * 0.55)) * 1000;
  state.nextWatchAt = performance.now() + relaxedWindowMs;
  state.nextWatchTimer = window.setTimeout(() => {
    state.nextWatchTimer = 0;
    state.nextWatchAt = 0;
    if (!state.running || state.rhythmMode || state.watching || !state.grooming || !state.pointerDown) return;
    enterWatch();
  }, relaxedWindowMs);
}

function maybeEnterWatch() {
  if (!state.running || !state.grooming || state.rhythmMode || state.watching) return;
  if (state.alert >= 100) {
    enterWatch({
      reason: "normal",
      reward: 0,
      graceMs: Math.max(220, getCurrentDifficulty().reactionTime * 1000 * 0.75),
    });
    return;
  }
  if (!state.nextWatchTimer) scheduleWatch();
}

function enterWatch(options = {}) {
  const {
    reason = "normal",
    reward = 0,
    graceMs = null,
    watchMs = null,
    allowIdle = false,
  } = options;

  if (!state.running || state.watching) return;
  if (!allowIdle && !state.grooming) {
    setRelaxedState();
    return;
  }

  window.clearTimeout(state.nextWatchTimer);
  window.clearTimeout(state.leaveWatchTimer);
  window.clearTimeout(state.graceTimer);
  state.nextWatchTimer = 0;
  state.nextWatchAt = 0;
  state.watching = true;
  state.watchReason = reason;
  state.watchReward = reward;
  state.watchEligible = state.pointerDown || state.grooming || state.activeRhythmKeys.size > 0;
  state.lastPoint = null;
  stopBrushLoop();
  setWarningState();

  const difficulty = getCurrentDifficulty();
  const reactionTime = difficulty.reactionTime || BASE_DIFFICULTY.reactionTime;
  const graceDuration = graceMs ?? reactionTime * 1000;
  const minTime = Math.max(0.2, difficulty.minWarningTime);
  const maxTime = Math.max(0.2, difficulty.maxWarningTime - getWarningDynamicCut());
  const watchDuration = watchMs ?? randomBetween(minTime, Math.max(minTime, maxTime)) * 1000;

  state.warningGraceUntil = performance.now() + graceDuration;
  state.graceTimer = window.setTimeout(checkWarningGrace, graceDuration);
  state.leaveWatchTimer = window.setTimeout(leaveWatch, watchDuration);

  if (reason === "look") {
    setJudgeState("回头", "miss");
    updateBeatTip("回头拍到了，这一拍别继续梳。");
    updateKeyHint("立刻松开鼠标或按键");
  } else if (reason === "peek") {
    setJudgeState("偷看", "good");
    updateBeatTip("偷看时间很短，轻轻收手。");
    updateKeyHint("保持松手，别贪拍");
  } else {
    setJudgeState("回头", "miss");
    updateBeatTip("它回头了，先别继续梳。");
  }
}

function checkWarningGrace() {
  if (!state.running || !state.watching) return;
  stage.classList.remove("grace");
  if (state.grooming) endGame();
}

function leaveWatch() {
  if (!state.running) return;
  const avoidedInTime = !state.grooming;
  if (state.rhythmMode && state.watchReward > 0 && state.watchEligible && avoidedInTime) {
    state.score += state.watchReward;
    scoreEl.textContent = String(state.score);
    state.alert = clamp(state.alert - (state.watchReason === "look" ? 8 : 5), 0, 100);
    spawnHint(`收手 +${state.watchReward}`, "#b8ffb1");
    playBrushAccent("Good");
  } else {
    state.alert = Math.max(0, state.alert - 35);
  }

  state.watching = false;
  state.warningGraceUntil = 0;
  state.watchReason = "normal";
  state.watchReward = 0;
  state.watchEligible = false;
  stage.classList.remove("grace");
  setRelaxedState();
  updateCareMeters();
  if (state.rhythmMode) {
    setJudgeState("继续");
    updateBeatTip(describeSongRhythm(getCurrentSong()));
    updateKeyHint(describeRhythmKeys());
  } else if (state.grooming) {
    scheduleWatch();
  }
}

function resetFurPile() {
  fxLayer.replaceChildren();
  floorFur.replaceChildren();
  thinFur.style.opacity = "0";
}

function startGame() {
  if (!state.initialized) {
    state.pendingStart = true;
    startBtn.textContent = "继续加载中...";
    setJudgeState("加载中", "good");
    updateBeatTip("猫咪资料和节奏资源还在准备，马上就好。");
    return;
  }
  clearTimers();
  stopRhythmTrack();
  unlockAudio();
  state.running = true;
  state.pointerDown = false;
  state.grooming = false;
  state.watching = false;
  state.score = 0;
  state.distance = 0;
  state.lastPoint = null;
  state.lastMoveAt = 0;
  state.comfort = 0;
  state.alert = 0;
  state.combo = 0;
  state.nextWatchAt = 0;
  state.currentBeatKey = "rest";
  state.watchReason = "normal";
  state.watchReward = 0;
  state.watchEligible = false;
  state.activeRhythmKeys.clear();
  state.lastJudgedBeat = -1;
  state.phraseMisses = 0;
  state.phraseStartBeat = 0;
  state.statsPerfect = 0;
  state.statsGood = 0;
  state.statsMiss = 0;
  state.statsMaxCombo = 0;
  scoreEl.textContent = "0";
  updateCareMeters();
  setRelaxedState();
  overlay.classList.remove("show");
  deathTitle.classList.remove("show");
  stage.classList.remove("jumpscare", "brushing");
  resetFurPile();
  setCountInText("");
  setJudgeState(state.rhythmMode ? "预备" : "准备");
  updateBeatTip(state.rhythmMode ? describeSongRhythm(getCurrentSong()) : "普通模式下，小猫会随机回头。");
  updateKeyHint(state.rhythmMode ? describeRhythmKeys() : "普通模式主要用鼠标或触摸梳毛。");
  if (state.initFailed) {
    updateBeatTip("已用降级数据启动，功能可以正常玩。");
  }
  if (state.rhythmMode) startRhythmTrack();
}

function endGame() {
  if (!state.running) return;
  state.running = false;
  state.pointerDown = false;
  state.grooming = false;
  state.activeRhythmKeys.clear();
  clearTimers();
  stopBrushLoop();
  stopRhythmTrack();
  nextKeyIndicator.classList.remove("show");
  stage.classList.remove("brushing", "grace");
  setWarningState();
  moodEl.textContent = "被抓";
  deathTitle.classList.add("show");
  playFailSound();

  stage.classList.add("jumpscare");
  window.setTimeout(() => stage.classList.remove("jumpscare"), 900);

  if (state.score > state.best) {
    state.best = state.score;
    localStorage.setItem(BEST_STORAGE_KEY, String(state.best));
    bestEl.textContent = String(state.best);
  }

  const totalJudged = state.statsPerfect + state.statsGood + state.statsMiss;
  const accuracy = totalJudged > 0
    ? Math.round(((state.statsPerfect * 100 + state.statsGood * 50) / totalJudged) * 10) / 10
    : 0;
  const grade = getGrade(accuracy, state.statsMaxCombo);
  const isFullCombo = state.statsMiss === 0 && totalJudged > 0;

  window.setTimeout(() => {
    if (state.rhythmMode && totalJudged > 0) {
      messageEl.textContent = isFullCombo ? "完美! 一次都没被抓到!" : `本局分数：${state.score}`;
      statsBlock.classList.add("show");
      statsGrade.textContent = grade;
      statsGrade.className = `stats-grade grade-${grade.toLowerCase()}`;
      statsMaxCombo.textContent = String(state.statsMaxCombo);
      statsAccuracy.textContent = `${accuracy}%`;
      statsJudges.textContent = `${state.statsPerfect}P / ${state.statsGood}G / ${state.statsMiss}M`;
    } else {
      messageEl.textContent = `你被发现了。本局分数：${state.score}`;
      statsBlock.classList.remove("show");
    }
    startBtn.textContent = "再来一次";
    overlay.classList.add("show");
  }, 850);
}

function handlePointerStart(event) {
  if (!state.running) return;
  if (isUiInteractionTarget(event.target)) return;
  event.preventDefault();
  unlockAudio();
  const point = getPoint(event);
  state.pointerDown = true;
  state.grooming = pointInsideCat(point);
  state.lastPoint = state.grooming ? point : null;
  state.lastMoveAt = performance.now();
  moveComb(point);
  if (state.grooming && !state.watching && !state.rhythmMode) scheduleWatch();
  if (state.grooming && state.rhythmMode) judgeRhythmHit(point);
  if (state.watching && state.grooming && performance.now() >= state.warningGraceUntil) endGame();
}

function handlePointerMove(event) {
  if (isUiInteractionTarget(event.target)) return;
  const point = getPoint(event);
  moveComb(point);
  if (!state.running || !state.pointerDown) return;
  event.preventDefault();

  if (state.watching) {
    state.grooming = pointInsideCat(point);
    if (state.grooming && performance.now() >= state.warningGraceUntil) endGame();
    return;
  }

  if (!pointInsideCat(point)) {
    state.lastPoint = null;
    state.grooming = false;
    window.clearTimeout(state.nextWatchTimer);
    state.nextWatchTimer = 0;
    state.nextWatchAt = 0;
    stage.classList.remove("brushing");
    stopBrushLoop();
    return;
  }

  const shouldStartWatchTimer = !state.grooming;
  state.grooming = true;
  if (shouldStartWatchTimer && !state.rhythmMode) scheduleWatch();
  if (shouldStartWatchTimer && state.rhythmMode) judgeRhythmHit(point);
  stage.classList.add("brushing");

  if (!state.lastPoint) {
    state.lastPoint = point;
    return;
  }

  const dx = point.x - state.lastPoint.x;
  const dy = point.y - state.lastPoint.y;
  const moveDistance = Math.hypot(dx, dy);
  const now = performance.now();
  const deltaSeconds = Math.max(0.016, (now - state.lastMoveAt) / 1000);
  const speed = moveDistance / deltaSeconds;
  state.distance += moveDistance;
  state.lastPoint = point;
  state.lastMoveAt = now;
  updateBrushLoop(speed);

  if (!state.rhythmMode) updateCatMoodFromStroke(speed, moveDistance);

  if (state.rhythmMode) {
    const threshold = Math.max(18, getCurrentDifficulty().speedThreshold * 0.65);
    while (state.distance >= threshold) {
      state.distance -= threshold;
      judgeRhythmHit(point);
    }
  } else {
    const threshold = getCurrentDifficulty().speedThreshold;
    while (state.distance >= threshold) {
      state.distance -= threshold;
      addScore(point);
    }
    maybeEnterWatch();
  }
}

function handlePointerEnd() {
  state.pointerDown = false;
  state.grooming = false;
  state.lastPoint = null;
  state.distance = 0;
  state.combo = 0;
  state.activeRhythmKeys.clear();
  window.clearTimeout(state.nextWatchTimer);
  state.nextWatchTimer = 0;
  state.nextWatchAt = 0;
  stage.classList.remove("brushing");
  stopBrushLoop();
  updateCareMeters();
}

function updateCatMoodFromStroke(speed, moveDistance) {
  const difficulty = getCurrentDifficulty();
  const calmStroke = speed >= 80 && speed <= 520;
  const roughStroke = speed > 760;
  const idleDrag = speed < 45;

  if (calmStroke) {
    state.comfort = clamp(state.comfort + moveDistance * 0.09, 0, 100);
    state.alert = clamp(state.alert - difficulty.alertDecay * 1.5, 0, 100);
    moodEl.textContent = state.combo >= 6 ? "很舒服" : "放松";
  } else if (roughStroke) {
    state.alert = clamp(state.alert + difficulty.alertGain * (speed / 260), 0, 100);
    state.comfort = clamp(state.comfort - 1.4, 0, 100);
    state.combo = 0;
    moodEl.textContent = "嫌弃";
    spawnHint("太快了", "#ffdf80");
  } else if (idleDrag) {
    state.alert = clamp(state.alert + 0.35, 0, 100);
  }

  if (state.comfort >= 100) {
    state.comfort = 55;
    state.score += 5;
    scoreEl.textContent = String(state.score);
    spawnHint("舒服 +5", "#b8ffb1");
    playPurrSound();
  }

  updateCareMeters();
}

function spawnHint(text, color) {
  const rect = stage.getBoundingClientRect();
  const catRect = catZone.getBoundingClientRect();
  const hint = document.createElement("span");
  hint.className = "hint-pop";
  hint.textContent = text;
  hint.style.left = `${catRect.left - rect.left + catRect.width / 2}px`;
  hint.style.top = `${catRect.top - rect.top + catRect.height * 0.2}px`;
  hint.style.color = color;
  fxLayer.append(hint);
  hint.addEventListener("animationend", () => hint.remove(), { once: true });
}

function addScore(point) {
  state.combo += 1;
  const bonus = state.combo > 0 && state.combo % 8 === 0 ? 2 : 0;
  state.score += 1 + bonus;
  scoreEl.textContent = String(state.score);
  if (bonus) spawnHint(`连击 +${bonus}`, "#fff4bd");
  moodEl.textContent = state.combo >= 6 ? "呼噜" : "放松";
  spawnPlusOne(point, bonus);
  spawnFur(point);
  updateFurPile();
  updateCareMeters();
  window.setTimeout(playRustleSound, 100);
}

function spawnPlusOne(point, bonus = 0, isPerfect = false) {
  const rect = stage.getBoundingClientRect();
  const plus = document.createElement("span");
  plus.className = "plus-one";
  if (isPerfect) plus.classList.add("perfect-pop");
  plus.textContent = bonus ? `+${1 + bonus}` : "+1";
  plus.style.left = `${point.x - rect.left}px`;
  plus.style.top = `${point.y - rect.top}px`;
  fxLayer.append(plus);
  plus.addEventListener("animationend", () => plus.remove(), { once: true });
}

function spawnFur(point) {
  const rect = stage.getBoundingClientRect();
  const count = Math.floor(randomBetween(3, 6));
  for (let i = 0; i < count; i += 1) {
    const hair = document.createElement("span");
    const length = randomBetween(8, 18);
    const driftX = randomBetween(-58, 58);
    const driftY = randomBetween(-50, -20);
    hair.className = "fur-hair";
    hair.style.left = `${point.x - rect.left + randomBetween(-12, 12)}px`;
    hair.style.top = `${point.y - rect.top + randomBetween(-8, 8)}px`;
    hair.style.width = `${length}px`;
    hair.style.rotate = `${randomBetween(-35, 35)}deg`;
    hair.style.setProperty("--drift-x", `${driftX}px`);
    hair.style.setProperty("--drift-y", `${driftY}px`);
    hair.style.animationDelay = `${randomBetween(0, 70)}ms`;
    if (Math.random() > 0.55) hair.classList.add("curly");
    fxLayer.append(hair);
    hair.addEventListener("animationend", () => hair.remove(), { once: true });
  }
}

function updateFurPile() {
  const thinning = Math.min(0.32, Math.max(0, (state.score - 12) / 95));
  thinFur.style.opacity = String(thinning);

  if (state.score % 12 !== 0 || floorFur.childElementCount >= 8) return;

  const ball = document.createElement("span");
  ball.className = "fur-ball";
  ball.style.left = `${randomBetween(18, 82)}%`;
  ball.style.scale = `${randomBetween(0.75, 1.3)}`;
  floorFur.append(ball);
}

function stopSongAudio() {
  if (!state.songBufferSource) return;
  try {
    state.songBufferSource.stop();
  } catch {}
  state.songBufferSource.disconnect();
  state.songBufferSource = null;
}

function startSongAudio(syncStartTime) {
  stopSongAudio();
  const song = getCurrentSong();
  if (!song.audioBuffer || !state.audio || state.muted) return;

  const source = state.audio.createBufferSource();
  source.buffer = song.audioBuffer;
  source.loop = true;
  source.connect(state.songGain);
  const startAt = Math.max(state.audio.currentTime + 0.02, syncStartTime);
  const offset =
    startAt > syncStartTime
      ? ((startAt - syncStartTime) % song.audioBuffer.duration + song.audioBuffer.duration) %
        song.audioBuffer.duration
      : 0;
  source.start(startAt, offset);
  state.songBufferSource = source;
}

function ensureBrushLoop() {
  if (!state.audio || state.muted) return;
  if (state.brushNoise) return;

  const sampleRate = state.audio.sampleRate;
  const buffer = state.audio.createBuffer(1, sampleRate * 2, sampleRate);
  const data = buffer.getChannelData(0);
  let previous = 0;
  for (let i = 0; i < data.length; i += 1) {
    previous = previous * 0.82 + (Math.random() * 2 - 1) * 0.18;
    data[i] = previous;
  }

  const source = state.audio.createBufferSource();
  const high = state.audio.createBiquadFilter();
  const band = state.audio.createBiquadFilter();
  const volume = state.audio.createGain();

  source.buffer = buffer;
  source.loop = true;
  high.type = "highpass";
  high.frequency.value = 180;
  band.type = "bandpass";
  band.frequency.value = 950;
  band.Q.value = 0.8;
  volume.gain.value = 0.0001;

  source.connect(high).connect(band).connect(volume).connect(state.audio.destination);
  source.start();

  state.brushNoise = source;
  state.brushNoiseGain = volume;
  state.brushNoiseFilter = band;
}

function updateBrushLoop(speed) {
  unlockAudio();
  if (!state.audio || state.muted || !state.grooming || state.watching) return;
  ensureBrushLoop();
  const now = state.audio.currentTime;
  const intensity = clamp(speed / 900, 0.12, 1);
  state.brushNoiseFilter.frequency.setTargetAtTime(650 + intensity * 1450, now, 0.03);
  state.brushNoiseGain.gain.setTargetAtTime(0.012 + intensity * 0.035, now, 0.025);
}

function stopBrushLoop() {
  if (!state.audio || !state.brushNoiseGain) return;
  state.brushNoiseGain.gain.setTargetAtTime(0.0001, state.audio.currentTime, 0.04);
}

function tone({ frequency, duration, type = "sine", gain = 0.05, delay = 0 }) {
  if (!state.audio || state.muted) return;
  const now = state.audio.currentTime + delay;
  const oscillator = state.audio.createOscillator();
  const volume = state.audio.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, now);
  volume.gain.setValueAtTime(0.0001, now);
  volume.gain.exponentialRampToValueAtTime(gain, now + 0.015);
  volume.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  oscillator.connect(volume).connect(state.audio.destination);
  oscillator.start(now);
  oscillator.stop(now + duration + 0.02);
}

function noiseBurst({ duration = 0.08, gain = 0.03, delay = 0, lowpass = 1800, highpass = 260 } = {}) {
  if (!state.audio || state.muted) return;
  const now = state.audio.currentTime + delay;
  const sampleRate = state.audio.sampleRate;
  const buffer = state.audio.createBuffer(1, Math.ceil(sampleRate * duration), sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
  }

  const source = state.audio.createBufferSource();
  const high = state.audio.createBiquadFilter();
  const low = state.audio.createBiquadFilter();
  const volume = state.audio.createGain();

  source.buffer = buffer;
  high.type = "highpass";
  high.frequency.setValueAtTime(highpass, now);
  low.type = "lowpass";
  low.frequency.setValueAtTime(lowpass, now);
  volume.gain.setValueAtTime(0.0001, now);
  volume.gain.linearRampToValueAtTime(gain, now + 0.01);
  volume.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  source.connect(high).connect(low).connect(volume).connect(state.audio.destination);
  source.start(now);
  source.stop(now + duration + 0.02);
}

function playRustleSound() {
  unlockAudio();
  noiseBurst({ duration: 0.09, gain: 0.022, lowpass: 1500, highpass: 420 });
  noiseBurst({ duration: 0.05, gain: 0.012, delay: 0.03, lowpass: 2200, highpass: 700 });
}

function playPurrSound() {
  unlockAudio();
  tone({ frequency: 72, duration: 0.16, type: "triangle", gain: 0.025 });
  tone({ frequency: 92, duration: 0.12, type: "sine", gain: 0.018, delay: 0.05 });
}

function playBrushAccent(result) {
  unlockAudio();
  const gain = result === "Perfect" ? 0.032 : 0.018;
  noiseBurst({ duration: 0.055, gain, lowpass: result === "Perfect" ? 2600 : 1900, highpass: 360 });
}

function playMissSound() {
  unlockAudio();
  tone({ frequency: 180, duration: 0.08, type: "sawtooth", gain: 0.02 });
}

function playFailSound() {
  unlockAudio();
  tone({ frequency: 980, duration: 0.26, type: "square", gain: 0.12 });
  tone({ frequency: 1420, duration: 0.2, type: "sawtooth", gain: 0.09, delay: 0.08 });
}

function playCountInSound(count, delay = 0) {
  unlockAudio();
  const strong = count === 1;
  tone({
    frequency: strong ? 960 : 760,
    duration: strong ? 0.09 : 0.06,
    type: strong ? "square" : "triangle",
    gain: strong ? 0.045 : 0.028,
    delay,
  });
}

function playBeatSound(beatEvent, delay = 0) {
  unlockAudio();
  if (beatEvent.key === "look") {
    tone({ frequency: 620, duration: 0.08, type: "square", gain: 0.04, delay });
    tone({ frequency: 310, duration: 0.08, type: "triangle", gain: 0.025, delay: delay + 0.04 });
  } else if (beatEvent.key === "peek") {
    tone({ frequency: 520, duration: 0.05, type: "triangle", gain: 0.02, delay });
  } else if (beatEvent.key === "accent") {
    tone({ frequency: 920, duration: 0.05, type: "square", gain: 0.03, delay });
    tone({ frequency: 460, duration: 0.04, type: "triangle", gain: 0.012, delay: delay + 0.03 });
  } else if (beatEvent.key === "rest") {
    tone({ frequency: 700, duration: 0.025, type: "sine", gain: 0.012, delay });
  } else {
    tone({ frequency: 880, duration: 0.035, type: "sine", gain: 0.025, delay });
  }
}

function stopRhythmTrack() {
  window.clearTimeout(state.schedulerTimer);
  state.schedulerTimer = 0;
  if (state.previewFrame) cancelAnimationFrame(state.previewFrame);
  state.previewFrame = 0;
  rhythmPreview.innerHTML = "";
  setCountInText("");
  stopSongAudio();
}

function getBeatEvent(eventKey) {
  return RHYTHM_EVENT_DEFS[eventKey] || RHYTHM_EVENT_DEFS.rest;
}

function getBeatEventAt(beatIndex) {
  const song = getCurrentSong();
  const patternIndex = ((beatIndex % song.pattern.length) + song.pattern.length) % song.pattern.length;
  const eventKey = song.pattern[patternIndex];
  return {
    ...getBeatEvent(eventKey),
    patternIndex,
  };
}

function getJudgeWindows(beatEvent, bpm) {
  const beatMs = 60000 / bpm;
  const perfectWindow = clamp(Math.round(beatMs * 0.18), 55, beatEvent.key === "accent" ? 96 : 88);
  const judgeWindow = clamp(Math.round(beatMs * 0.42), 120, beatEvent.key === "accent" ? 235 : 215);
  return { perfectWindow, judgeWindow };
}

function rhythmBeatTime(beatNumber) {
  return state.rhythmStartTime + beatNumber * state.beatDuration;
}

function completePhraseIfNeeded(beatNumber) {
  if (beatNumber <= 0 || beatNumber % 8 !== 0) return;
  if (state.phraseMisses === 0) {
    state.score += 6;
    scoreEl.textContent = String(state.score);
    spawnHint("小节 Clear +6", "#b8ffb1");
    playBrushAccent("Perfect");
  }
  state.phraseMisses = 0;
  state.phraseStartBeat = beatNumber;
}

function buildBeatTip(beatNumber, beatEvent) {
  const nextEvent = getBeatEventAt(beatNumber + 1);
  if (!beatEvent.watch && nextEvent.watch) {
    return `${beatEvent.tip} 下一拍要收手。`;
  }
  return beatEvent.tip;
}

function announceTransportBeat(beatNumber) {
  if (!state.running || !state.rhythmMode) return;

  if (beatNumber < 0) {
    const count = Math.abs(beatNumber);
    setJudgeState("预备");
    setCountInText(count === 1 ? "GO" : `${count}`);
    updateBeatTip("先跟着拍点准备，正式记分马上开始。");
    updateKeyHint(describeRhythmKeys());
    return;
  }

  if (beatNumber === 0) {
    setCountInText("开始");
    window.setTimeout(() => {
      if (countInText.textContent === "开始") setCountInText("");
    }, 220);
  } else {
    setCountInText("");
  }

  completePhraseIfNeeded(beatNumber);

  const beatEvent = getBeatEventAt(beatNumber);
  state.currentBeatKey = beatEvent.key;
  stage.classList.remove("beat-pop");
  void stage.offsetWidth;
  stage.classList.add("beat-pop");

  if (beatEvent.watch) {
    enterRhythmWarning(beatEvent);
  } else if (beatEvent.judgeable && state.grooming) {
    state.alert = clamp(state.alert - beatEvent.alertEase, 0, 100);
    updateCareMeters();
    if (!state.watching) setJudgeState(beatEvent.label);
  } else if (!state.watching) {
    setJudgeState(beatEvent.label);
  }

  updateBeatTip(buildBeatTip(beatNumber, beatEvent));
  updateKeyHint(describeRhythmKeys());
  setNextKeyIndicator(beatEvent.key);

  if (beatNumber >= 0) {
    const nextEvent = getBeatEventAt(beatNumber + 1);
    if (nextEvent.watch) setNextKeyIndicator(nextEvent.key);
  }
}

function scheduleRhythmLoop() {
  window.clearTimeout(state.schedulerTimer);

  const tick = () => {
    if (!state.running || !state.rhythmMode) return;
    const now = currentAudioTime();
    const lookahead = 0.7;

    while (rhythmBeatTime(state.rhythmScheduleCursor) <= now + lookahead) {
      const beatTime = rhythmBeatTime(state.rhythmScheduleCursor);
      const delay = Math.max(0, beatTime - now);
      if (state.rhythmScheduleCursor < 0) {
        playCountInSound(Math.abs(state.rhythmScheduleCursor), delay);
      } else {
        playBeatSound(getBeatEventAt(state.rhythmScheduleCursor), delay);
      }
      state.rhythmScheduleCursor += 1;
    }

    const dueBeat = Math.floor((now - state.rhythmStartTime) / state.beatDuration + 0.04);
    while (state.lastAnnouncedBeat < dueBeat) {
      state.lastAnnouncedBeat += 1;
      if (state.lastAnnouncedBeat >= -state.countInBeats) announceTransportBeat(state.lastAnnouncedBeat);
    }

    state.schedulerTimer = window.setTimeout(tick, 25);
  };

  tick();
}

function renderRhythmPreview() {
  if (!state.running || !state.rhythmMode) {
    rhythmPreview.innerHTML = "";
    return;
  }

  const now = currentAudioTime();
  const lookBackBeats = 1.2;
  const lookAheadBeats = 4.6;
  const startBeat = Math.floor((now - state.rhythmStartTime) / state.beatDuration - lookBackBeats);
  const endBeat = Math.ceil((now - state.rhythmStartTime) / state.beatDuration + lookAheadBeats);
  const markup = [];

  for (let beat = Math.max(-state.countInBeats, startBeat); beat <= endBeat; beat += 1) {
    const beatTime = rhythmBeatTime(beat);
    const deltaBeats = (beatTime - now) / state.beatDuration;
    const position = ((deltaBeats + lookBackBeats) / (lookBackBeats + lookAheadBeats)) * 100;
    if (position < -8 || position > 108) continue;

    if (beat < 0) {
      markup.push(
        `<span class="preview-note count${Math.abs(deltaBeats) < 0.18 ? " is-now" : ""}" data-label="${
          Math.abs(beat) === 1 ? "GO" : Math.abs(beat)
        }" style="left:${position}%;"></span>`,
      );
      continue;
    }

    const event = getBeatEventAt(beat);
    const nextEvent = getBeatEventAt(beat + 1);
    const classes = ["preview-note", event.key];
    if (Math.abs(deltaBeats) < 0.18) classes.push("is-now");
    if (!event.watch && nextEvent.watch && deltaBeats > -0.2 && deltaBeats < 1.25) classes.push("is-danger");
    markup.push(
      `<span class="${classes.join(" ")}" data-label="${event.previewLabel}" style="left:${position}%;"></span>`,
    );
  }

  rhythmPreview.innerHTML = markup.join("");
  state.previewFrame = requestAnimationFrame(renderRhythmPreview);
}

function startRhythmTrack() {
  const song = getCurrentSong();
  unlockAudio();
  state.beatDuration = 60 / song.bpm;
  const anchorTime = currentAudioTime() + 0.18;
  state.rhythmStartTime = anchorTime + state.countInBeats * state.beatDuration;
  state.rhythmScheduleCursor = -state.countInBeats;
  state.lastAnnouncedBeat = -state.countInBeats - 1;
  state.lastJudgedBeat = -1;
  state.currentBeatKey = "rest";
  state.phraseMisses = 0;
  state.phraseStartBeat = 0;
  scheduleRhythmLoop();
  renderRhythmPreview();
  void ensureSongAudioDecoded(song).then(() => {
    if (state.running && state.rhythmMode && getCurrentSong()?.id === song.id) {
      startSongAudio(state.rhythmStartTime);
    }
  });
}

function enterRhythmWarning(beatEvent) {
  if (!state.running || state.watching) return;
  enterWatch({
    reason: beatEvent.key,
    reward: beatEvent.watchReward,
    graceMs: state.beatDuration * beatEvent.graceBeats * 1000,
    watchMs: state.beatDuration * beatEvent.watchBeats * 1000,
    allowIdle: true,
  });
}

function judgeRhythmHit(point, inputType = null) {
  if (!state.running || !state.rhythmMode || state.watching) return;
  unlockAudio();
  const audioNow = currentAudioTime();
  if (audioNow < state.rhythmStartTime - state.beatDuration * 0.35) {
    setJudgeState("太早", "miss");
    updateBeatTip("先听完倒数，再开始记分。");
    return;
  }

  const elapsed = audioNow - state.rhythmStartTime;
  const beatFloat = elapsed / state.beatDuration;
  const nearestBeat = Math.round(beatFloat);
  if (nearestBeat < 0 || nearestBeat === state.lastJudgedBeat) return;

  const beatEvent = getBeatEventAt(nearestBeat);
  const plannedTime = rhythmBeatTime(nearestBeat);
  const beatDeltaMs = Math.abs(audioNow - plannedTime) * 1000;
  const windows = getJudgeWindows(beatEvent, getCurrentSong().bpm);
  state.lastJudgedBeat = nearestBeat;

  if (inputType && beatEvent.judgeable && inputType !== beatEvent.key && beatDeltaMs <= windows.judgeWindow) {
    applyRhythmJudge("Miss", point, beatEvent, "按错键");
    return;
  }

  if (!beatEvent.judgeable || beatDeltaMs > windows.judgeWindow) {
    applyRhythmJudge("Miss", point, beatEvent);
  } else if (beatDeltaMs <= windows.perfectWindow) {
    applyRhythmJudge("Perfect", point, beatEvent);
  } else {
    applyRhythmJudge("Good", point, beatEvent);
  }
}

function applyRhythmJudge(result, point, beatEvent = getBeatEventAt(state.lastJudgedBeat), missLabel = "Miss") {
  const config = {
    Perfect: {
      score: 3 + (beatEvent.scoreBonus || 0),
      comfort: 13 + (beatEvent.comfortBonus || 0),
      alert: -7 - Math.max(0, (beatEvent.alertEase || 0) - 4),
      color: "#b8ffb1",
      label: beatEvent.label === "重拍" ? "重拍 Perfect" : "Perfect",
    },
    Good: {
      score: 1 + Math.max(0, (beatEvent.scoreBonus || 0) - 1),
      comfort: 6 + Math.max(0, (beatEvent.comfortBonus || 0) - 1),
      alert: -2 - Math.max(0, (beatEvent.alertEase || 0) - 4) * 0.5,
      color: "#fff4bd",
      label: beatEvent.label === "重拍" ? "重拍 Good" : "Good",
    },
    Miss: {
      score: 0,
      comfort: -4,
      alert: 12,
      color: "#ff9b8a",
      label: missLabel,
    },
  }[result];

  setJudgeState(result, result.toLowerCase());

  if (result === "Perfect") state.statsPerfect += 1;
  else if (result === "Good") state.statsGood += 1;
  else state.statsMiss += 1;

  state.combo = result === "Miss" ? 0 : state.combo + 1;
  if (state.combo > state.statsMaxCombo) state.statsMaxCombo = state.combo;
  if (result === "Miss") state.phraseMisses += 1;
  state.score += config.score + (state.combo > 0 && state.combo % 12 === 0 ? 4 : 0);
  state.comfort = clamp(state.comfort + config.comfort, 0, 100);
  state.alert = clamp(state.alert + config.alert, 0, 100);
  scoreEl.textContent = String(state.score);
  updateCareMeters();

  if (result !== "Miss") {
    spawnPlusOne(point, Math.max(0, config.score - 1), result === "Perfect");
    spawnFur(point);
    playBrushAccent(result);
    flashCat(result);
    if (result === "Perfect") {
      spawnHint(config.label, config.color);
      const milestones = [25, 50, 75, 100];
      if (milestones.includes(state.combo)) spawnComboMilestone(state.combo);
    }
  } else {
    playMissSound();
    spawnHint(config.label, config.color);
    flashCat("Miss");
  }
}

function createRhythmPoint() {
  const rect = catZone.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
  };
}

function handleRhythmKeyDown(event) {
  if (!state.running || !state.rhythmMode || event.repeat || isUiInteractionTarget(event.target)) return;
  const inputType = RHYTHM_KEY_BINDINGS[event.code];
  if (!inputType) return;

  event.preventDefault();
  unlockAudio();
  state.activeRhythmKeys.add(event.code);

  if (state.watching) {
    if (performance.now() >= state.warningGraceUntil) endGame();
    return;
  }

  state.pointerDown = true;
  state.grooming = true;
  judgeRhythmHit(createRhythmPoint(), inputType);
}

function handleRhythmKeyUp(event) {
  if (!RHYTHM_KEY_BINDINGS[event.code]) return;
  state.activeRhythmKeys.delete(event.code);
  if (!state.rhythmMode) return;
  if (state.activeRhythmKeys.size === 0) {
    state.pointerDown = false;
    state.grooming = false;
  }
}

function setRhythmMode(enabled) {
  state.rhythmMode = enabled;
  modeBtn.textContent = enabled ? "节奏模式" : "自由模式";
  stage.classList.toggle("rhythm-mode", enabled);
  setJudgeState(enabled ? "预备" : "准备");
  updateBeatTip(enabled ? describeSongRhythm(getCurrentSong()) : "普通模式下，小猫会随机回头。");
  updateKeyHint(enabled ? describeRhythmKeys() : "普通模式主要用鼠标或触摸梳毛。");
  updateOverlayCopy();
  resetRoundVisuals();
}

function changeSong(direction) {
  state.songIndex = (state.songIndex + direction + songs.length) % songs.length;
  applySong();
  if (state.rhythmMode) resetRoundVisuals();
}

async function deleteCurrentSong() {
  const currentSong = getCurrentSong();
  if (currentSong.builtin) {
    spawnHint("内置歌曲不能删除", "#ffdf80");
    return;
  }

  songs.splice(state.songIndex, 1);
  state.songIndex = Math.min(state.songIndex, songs.length - 1);
  await persistSongs();
  applySong();
  if (state.rhythmMode) resetRoundVisuals();
}

function changeCat(direction) {
  const wasRunning = state.running;
  state.pointerDown = false;
  state.grooming = false;
  state.activeRhythmKeys.clear();
  state.catIndex = (state.catIndex + direction + cats.length) % cats.length;
  applyCat({ resetToRelaxed: true });
  clearTimers();
  state.nextWatchAt = 0;
  state.watchReason = "normal";
  state.watchReward = 0;
  state.watchEligible = false;
  state.distance = 0;
  state.lastPoint = null;
  stopBrushLoop();
  if (state.rhythmMode) {
    stopRhythmTrack();
    setJudgeState("预备");
    updateBeatTip(describeSongRhythm(getCurrentSong()));
    if (wasRunning) startRhythmTrack();
  } else {
    setJudgeState("准备");
  }
  if (!wasRunning) {
    stage.classList.remove("watching", "jumpscare", "brushing");
    stage.classList.add("relaxed");
  }
  overlay.classList.toggle("show", !wasRunning);
}

async function deleteCurrentCat() {
  const currentCat = getCurrentCat();
  if (currentCat.builtin) {
    spawnHint("内置猫不能删除", "#ffdf80");
    return;
  }
  if (cats.length <= 1) {
    spawnHint("至少留一只猫", "#ffdf80");
    return;
  }
  cats.splice(state.catIndex, 1);
  state.catIndex = Math.min(state.catIndex, cats.length - 1);
  applyCat({ resetToRelaxed: true });
  await persistCats();
}

function changeTool(direction) {
  state.toolIndex = (state.toolIndex + direction + tools.length) % tools.length;
  applyTool();
}

function deleteCurrentTool() {
  if (tools.length <= 1) {
    spawnHint("至少留一个工具", "#ffdf80");
    return;
  }
  tools.splice(state.toolIndex, 1);
  state.toolIndex = Math.min(state.toolIndex, tools.length - 1);
  applyTool();
}

function resetRoundVisuals() {
  state.running = false;
  state.pointerDown = false;
  state.grooming = false;
  state.watching = false;
  state.distance = 0;
  state.lastPoint = null;
  state.nextWatchAt = 0;
  state.watchReason = "normal";
  state.watchReward = 0;
  state.watchEligible = false;
  state.currentBeatKey = "rest";
  state.activeRhythmKeys.clear();
  clearTimers();
  stopRhythmTrack();
  stage.classList.remove("watching", "jumpscare", "brushing");
  stage.classList.add("relaxed");
  deathTitle.classList.remove("show");
  statsBlock.classList.remove("show");
  nextKeyIndicator.classList.remove("show");
  overlay.classList.add("show");
  updateOverlayCopy();
  startBtn.textContent = "开始";
  setCountInText("");
  setJudgeState(state.rhythmMode ? "预备" : "准备");
  updateBeatTip(state.rhythmMode ? describeSongRhythm(getCurrentSong()) : "普通模式下，小猫会随机回头。");
}

function makeUploadedDifficulty() {
  return {
    ...BASE_DIFFICULTY,
    minRelaxedTime: randomBetween(1.9, 2.5),
    maxRelaxedTime: randomBetween(4.2, 5.0),
    minWarningTime: randomBetween(0.25, 0.35),
    maxWarningTime: randomBetween(0.5, 0.75),
    speedThreshold: Math.round(randomBetween(36, 48)),
    reactionTime: randomBetween(0.4, 0.55),
    alertGain: randomBetween(0.9, 1.2),
    alertDecay: randomBetween(0.65, 0.9),
  };
}

function fillCatForm(cat) {
  newCatName.value = cat?.name || "";
  newCatPersonality.value = cat?.personality || "";
  newCatRelax.value = "";
  newCatAngry.value = "";
}

function fillSongForm(song) {
  newSongName.value = song?.name || "";
  newSongBpm.value = String(song?.bpm || 100);
  newSongPattern.value = song ? serializePatternForInput(song.pattern) : "";
  newSongAudio.value = "";
}

function serializePatternForInput(pattern) {
  const tokenMap = {
    tap: "1",
    accent: "2",
    rest: "0",
    peek: "S",
    look: "L",
  };
  return pattern.map((token) => tokenMap[token] || token).join(",");
}

function openCatModal(mode, cat = null) {
  handlePointerEnd();
  state.editingCatId = cat?.id || null;
  catModalTitle.textContent = mode === "edit" ? "编辑猫咪" : "添加猫咪";
  catModalHint.textContent =
    mode === "edit"
      ? "可以改名字、介绍，也可以替换 0 / 1 状态图。"
      : "0 图是平静状态，1 图是警惕状态。";
  saveCatBtn.textContent = mode === "edit" ? "保存修改" : "添加猫咪";
  restoreCatBtn.hidden = !(mode === "edit" && cat?.builtin);
  fillCatForm(cat);
  catModal.classList.add("show");
  catModal.setAttribute("aria-hidden", "false");
  newCatName.focus();
}

function closeCatModal() {
  state.editingCatId = null;
  catModal.classList.remove("show");
  catModal.setAttribute("aria-hidden", "true");
  catForm.reset();
}

function openSongModal(mode, song = null) {
  handlePointerEnd();
  state.editingSongId = song?.id || null;
  songModalTitle.textContent = mode === "edit" ? "编辑歌曲" : "添加歌曲";
  songModalHint.textContent =
    mode === "edit"
      ? "可以替换 BPM、节拍和音频；留空则保留当前音频。"
      : "支持继续使用 1 / 2 / 0 / S / L 的旧节拍格式。";
  saveSongBtn.textContent = mode === "edit" ? "保存修改" : "添加歌曲";
  restoreSongBtn.hidden = !(mode === "edit" && song?.builtin);
  fillSongForm(song);
  songModal.classList.add("show");
  songModal.setAttribute("aria-hidden", "false");
  newSongName.focus();
}

function closeSongModal() {
  state.editingSongId = null;
  songModal.classList.remove("show");
  songModal.setAttribute("aria-hidden", "true");
  songForm.reset();
}

function parseSongPatternInput(input) {
  const trimmed = input.trim();
  if (!trimmed) {
    throw new Error("先填一串节拍，比如 1,0,2,S,1,0,L,0");
  }

  const rawTokens = /[\s,|/]+/.test(trimmed)
    ? trimmed.split(/[\s,|/]+/).filter(Boolean)
    : trimmed.replace(/\s+/g, "").split("");

  if (!rawTokens.length) {
    throw new Error("节拍序列不能为空");
  }

  const pattern = rawTokens.map((token) => {
    const normalized = parseBeatToken(token);
    if (!normalized) {
      throw new Error(`不认识 "${token}"。可用 1、2、0、L、S`);
    }
    return normalized;
  });

  if (pattern.length < 4) {
    throw new Error("至少需要 4 拍，小猫才来得及进入状态。");
  }

  return pattern;
}

async function saveCatFromForm() {
  const name = newCatName.value.trim() || "自定义猫";
  const personality = newCatPersonality.value.trim() || "神秘的梳毛客人。";
  const relaxFile = newCatRelax.files?.[0] || null;
  const angryFile = newCatAngry.files?.[0] || null;

  if (state.editingCatId) {
    const index = cats.findIndex((cat) => cat.id === state.editingCatId);
    const currentCat = cats[index];
    if (!currentCat) return;

    let relaxBlob = currentCat.relaxBlob || null;
    let angryBlob = currentCat.angryBlob || null;
    let relaxImg = currentCat.relaxImg;
    let angryImg = currentCat.angryImg;

    if (relaxFile) {
      relaxBlob = relaxFile;
      relaxImg = createManagedUrl(relaxBlob);
    }
    if (angryFile) {
      angryBlob = angryFile;
      angryImg = createManagedUrl(angryBlob);
    }

    const visuals = await combineStateImages(angryImg, relaxImg);
    cats[index] = normalizeCatDefinition({
      ...currentCat,
      name,
      personality,
      relaxBlob,
      angryBlob,
      relaxImg,
      angryImg,
      combinedImg: visuals.src,
      displayAspectRatio: visuals.aspectRatio,
      override: currentCat.builtin ? true : currentCat.override,
    });
    await persistCats();
    applyCat({ resetToRelaxed: true });
    closeCatModal();
    spawnHint("猫咪资料已更新", "#9fdfeb");
    return;
  }

  if (!relaxFile || !angryFile) {
    throw new Error("新增猫咪时需要同时提供平静图和警惕图。");
  }

  const relaxBlob = relaxFile;
  const angryBlob = angryFile;
  const relaxImg = createManagedUrl(relaxBlob);
  const angryImg = createManagedUrl(angryBlob);
  const visuals = await combineStateImages(angryImg, relaxImg);

  cats.push(
    normalizeCatDefinition({
      id: createId("custom-cat"),
      name,
      personality,
      relaxBlob,
      angryBlob,
      relaxImg,
      angryImg,
      combinedImg: visuals.src,
      displayAspectRatio: visuals.aspectRatio,
      difficulty: makeUploadedDifficulty(),
      custom: true,
      builtin: false,
      override: false,
    }),
  );

  state.catIndex = cats.length - 1;
  await persistCats();
  applyCat({ resetToRelaxed: true });
  closeCatModal();
  spawnHint("新猫入场", "#9fdfeb");
}

async function restoreCurrentCatDefault() {
  if (!state.editingCatId) return;
  const spec = BUILTIN_CAT_SPECS.find((item) => item.id === state.editingCatId);
  if (!spec) return;
  await idbDelete(DB_CAT_STORE, spec.id);
  await hydrateGameData();
  state.catIndex = cats.findIndex((cat) => cat.id === spec.id);
  applyCat({ resetToRelaxed: true });
  closeCatModal();
  spawnHint("已恢复默认猫咪资料", "#fff4bd");
}

async function saveSongFromForm() {
  const bpm = Number(newSongBpm.value);
  if (!Number.isFinite(bpm) || bpm < 40 || bpm > 220) {
    throw new Error("BPM 请填 40 到 220。");
  }

  const pattern = parseSongPatternInput(newSongPattern.value);
  const name = newSongName.value.trim() || "自定义节拍";
  const audioFile = newSongAudio.files?.[0] || null;

  if (state.editingSongId) {
    const index = songs.findIndex((song) => song.id === state.editingSongId);
    const currentSong = songs[index];
    if (!currentSong) return;

    let audioBlob = currentSong.audioBlob || null;
    let audioBuffer = currentSong.audioBuffer || null;
    if (audioFile) {
      audioBlob = audioFile;
      audioBuffer = await decodeAudioBlob(audioBlob);
    }

    songs[index] = normalizeSongDefinition({
      ...currentSong,
      name,
      bpm: Math.round(bpm),
      pattern,
      audioBlob,
      audioBuffer,
      override: currentSong.builtin ? true : currentSong.override,
    });

    await persistSongs();
    applySong();
    closeSongModal();
    if (state.rhythmMode) resetRoundVisuals();
    spawnHint("歌曲配置已更新", "#9fdfeb");
    return;
  }

  const audioBlob = audioFile || null;
  const audioBuffer = audioBlob ? await decodeAudioBlob(audioBlob) : null;

  songs.push(
    normalizeSongDefinition({
      id: createId("custom-song"),
      name,
      bpm: Math.round(bpm),
      pattern,
      custom: true,
      builtin: false,
      override: false,
      audioBlob,
      audioBuffer,
    }),
  );

  state.songIndex = songs.length - 1;
  await persistSongs();
  applySong();
  closeSongModal();
  if (state.rhythmMode) resetRoundVisuals();
  spawnHint("新歌入场", "#9fdfeb");
}

async function restoreCurrentSongDefault() {
  if (!state.editingSongId) return;
  await idbDelete(DB_SONG_STORE, state.editingSongId);
  await hydrateGameData();
  state.songIndex = songs.findIndex((song) => song.id === state.editingSongId);
  applySong();
  closeSongModal();
  if (state.rhythmMode) resetRoundVisuals();
  spawnHint("已恢复默认歌曲", "#fff4bd");
}

function addUploadedTool(file) {
  const url = createManagedUrl(file);
  const img = new Image();
  img.onload = () => {
    tools.push({
      name: file.name.replace(/\.[^.]+$/, "") || "自定义工具",
      img: url,
      cursorHotspot: `${Math.round(img.naturalWidth / 2)} ${Math.round(img.naturalHeight / 2)}`,
    });
    state.toolIndex = tools.length - 1;
    applyTool();
  };
  img.src = url;
}

function toggleMute() {
  state.muted = !state.muted;
  if (state.muted) stopBrushLoop();
  if (state.songGain) {
    state.songGain.gain.setTargetAtTime(state.muted ? 0.0001 : 0.18, state.audio?.currentTime || 0, 0.03);
  }
  if (state.muted) {
    stopSongAudio();
  } else if (state.running && state.rhythmMode) {
    startSongAudio(state.rhythmStartTime);
  }
  updateMuteButton();
}

startBtn.addEventListener("click", startGame);
muteBtn.addEventListener("click", toggleMute);
modeBtn.addEventListener("click", () => setRhythmMode(!state.rhythmMode));
prevSongBtn.addEventListener("click", () => changeSong(-1));
nextSongBtn.addEventListener("click", () => changeSong(1));
editSongBtn.addEventListener("click", () => openSongModal("edit", getCurrentSong()));
importSongBtn.addEventListener("click", () => openSongModal("add"));
deleteSongBtn.addEventListener("click", () => {
  void deleteCurrentSong();
});
prevCatBtn.addEventListener("click", () => changeCat(-1));
nextCatBtn.addEventListener("click", () => changeCat(1));
editCatBtn.addEventListener("click", () => openCatModal("edit", getCurrentCat()));
addCatBtn.addEventListener("click", () => openCatModal("add"));
deleteCatBtn.addEventListener("click", () => {
  void deleteCurrentCat();
});
cancelCatBtn.addEventListener("click", closeCatModal);
restoreCatBtn.addEventListener("click", () => {
  void restoreCurrentCatDefault();
});
catModal.addEventListener("mousedown", (event) => {
  if (event.target === catModal) closeCatModal();
});
catModal.addEventListener("touchstart", (event) => {
  if (event.target === catModal) closeCatModal();
});
catForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    await saveCatFromForm();
  } catch (error) {
    const message = error instanceof Error ? error.message : "保存猫咪失败";
    setJudgeState("保存失败", "miss");
    updateBeatTip(message);
    spawnHint(message, "#ff9b8a");
  }
});
cancelSongBtn.addEventListener("click", closeSongModal);
restoreSongBtn.addEventListener("click", () => {
  void restoreCurrentSongDefault();
});
songModal.addEventListener("mousedown", (event) => {
  if (event.target === songModal) closeSongModal();
});
songModal.addEventListener("touchstart", (event) => {
  if (event.target === songModal) closeSongModal();
});
songForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    await saveSongFromForm();
  } catch (error) {
    const message = error instanceof Error ? error.message : "保存歌曲失败";
    setJudgeState("保存失败", "miss");
    updateBeatTip(message);
    spawnHint(message, "#ff9b8a");
  }
});
window.addEventListener("keydown", (event) => {
  handleRhythmKeyDown(event);
  if (event.key === "Escape" && catModal.classList.contains("show")) closeCatModal();
  if (event.key === "Escape" && songModal.classList.contains("show")) closeSongModal();
});
window.addEventListener("keyup", handleRhythmKeyUp);

prevToolBtn.addEventListener("click", () => changeTool(-1));
nextToolBtn.addEventListener("click", () => changeTool(1));
deleteToolBtn.addEventListener("click", deleteCurrentTool);
toolUpload.addEventListener("change", () => {
  const file = toolUpload.files?.[0];
  if (file) addUploadedTool(file);
  toolUpload.value = "";
});

catStateImg.addEventListener("load", () => {
  const currentCat = getCurrentCat();
  if (!currentCat) return;
  const fallbackRatio = catStateImg.naturalWidth && catStateImg.naturalHeight
    ? catStateImg.naturalWidth / catStateImg.naturalHeight
    : null;
  const ratio = currentCat.displayAspectRatio || fallbackRatio;
  if (ratio) catZone.style.aspectRatio = String(ratio);
});

stage.addEventListener("mousedown", handlePointerStart);
stage.addEventListener("mousemove", handlePointerMove);
window.addEventListener("mouseup", handlePointerEnd);

stage.addEventListener("touchstart", handlePointerStart, { passive: false });
stage.addEventListener("touchmove", handlePointerMove, { passive: false });
window.addEventListener("touchend", handlePointerEnd);
window.addEventListener("touchcancel", handlePointerEnd);

stage.addEventListener("mouseleave", () => {
  combGhost.classList.remove("visible");
});
