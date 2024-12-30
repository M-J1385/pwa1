const mycache = "mycache-v1";
const urltocache = [
  "/pwa1/index.html",
  "/pwa1/css/style.css",
  "/pwa1/js/app.js",
  "/pwa1/images/coffee1.jpg",
  "/pwa1/images/coffee2.jpg",
  "/pwa1/images/coffee3.jpg",
  "/pwa1/images/coffee4.jpg",
  "/pwa1/images/coffee5.jpg",
  "/pwa1/images/coffee6.jpg",
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
