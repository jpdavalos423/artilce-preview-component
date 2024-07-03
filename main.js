const desktopMedia = window.matchMedia("(min-width: 768px)");

const contentFooter = document.querySelector(".content-footer");

const shareButton = document.querySelector(".share-button");
const shareOptions = document.querySelector(".share-options");

shareButton.onclick = function () {
  if (desktopMedia.matches) {
    if (shareOptions.classList.contains("hidden")) {
      console.log("removing hidden class");
      shareOptions.classList.remove("hidden");
    } else {
      console.log("adding hidden class");
      shareOptions.classList.add("hidden");
    }
  } else {
    if (shareOptions.classList.contains("hidden")) {
      console.log("removing hidden class");
      shareOptions.classList.remove("hidden");
    } else {
      console.log("adding hidden class");
      shareOptions.classList.add("hidden");
    }
  }
};
