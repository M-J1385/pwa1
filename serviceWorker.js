const mycache = "mycache-v1";
const urltocache = [
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/coffee1.jpg",
  "/images/coffee2.jpg",
  "/images/coffee3.jpg",
  "/images/coffee4.jpg",
  "/images/coffee5.jpg",
  "/images/coffee6.jpg",
];

self.addEventListener("install", (installevent) => {
  installevent.waitUntil(
    caches.open(mycache).then((result) => {
      return result.addAll(urltocache);
    })
  );
});

self.addEventListener("fetch", (fetchevent) => {
  fetchevent.respondWith(
    caches.match(fetchevent.request).then((result) => {
      if (result) {
        return result;
      }
      return fetch(fetchevent.request);
    })
  );
});
