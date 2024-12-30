if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/pwa1/serviceWorker.js")
    .then((result) => {
      console.log("serviceWorker Registered", result);
    })
    .catch((error) => {
      console.log("serviceWorker Not Registered", error);
    });
}
