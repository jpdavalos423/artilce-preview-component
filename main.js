const desktopMedia = window.matchMedia("(min-width: 768px)");

const shareButton = document.querySelector(".share-button");
const shareOptions = document.querySelector(".share-options");
const authorInfo = document.querySelector(".author-info");

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
    if (authorInfo.classList.contains("hidden")) {
      console.log("removing hidden class");
      //   shareOptions.classList.remove("hidden");
      authorInfo.classList.remove("hidden");
      shareButton.style.justifyContent = "space";
    } else {
      console.log("adding hidden class");
      //   shareOptions.classList.add("hidden");
      authorInfo.classList.add("hidden");
    }
  }
};
