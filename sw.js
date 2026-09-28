/* Offline cache. Raise VERSION after changing any file so phones pick up the update. */
const VERSION = 'deutsch1';
const FILES = [
  './',
  './css/styles.css',
  './icons/apple180.png',
  './icons/icon192.png',
  './icons/icon512.png',
  './index.html',
  './js/app.js',
  './js/core/exercises.js',
  './js/core/speech.js',
  './js/core/store.js',
  './js/core/util.js',
  './js/data/lessonsA1.js',
  './js/data/lessonsA1b.js',
  './js/data/levelsUpper.js',
  './js/data/practiceA1.js',
  './js/data/verbs.js',
  './js/data/vocabA1.js',
  './js/data/vocabA1b.js',
  './js/views/grammar.js',
  './js/views/home.js',
  './js/views/learn.js',
  './js/views/practice.js',
  './js/views/roleplay.js',
  './js/views/test.js',
  './js/views/vocab.js',
  './manifest.webmanifest'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request)));
});
