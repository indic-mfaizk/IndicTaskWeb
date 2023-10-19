window.addEventListener("load", (e) => {
  setInterval(() => {
    if (window.navigator.onLine) {
      document.querySelector(".status").classList.remove("status-offline");
      document.querySelector(".status").classList.add("status-online");
      document.querySelector(".status h1").textContent = "Status: Online";
    } else {
      document.querySelector(".status").classList.remove("status-online");
      document.querySelector(".status").classList.add("status-offline");
      document.querySelector(".status h1").textContent = "Status: Offline";
    }
  }, 100);
});
