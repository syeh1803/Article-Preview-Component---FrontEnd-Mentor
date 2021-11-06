const open = document.querySelector("#open");
const shareIcon = document.querySelector("#share-icon");
const close = document.querySelector("#close");

// Event Listener
open.addEventListener("click", () => {
    shareIcon.classList.add("show");
});

close.addEventListener("click", () => {
  shareIcon.classList.remove("show");
});