const shareButton = document.querySelector(".share-button");
const shareOptions = document.querySelector(".share-options");

shareButton.onclick = function () {
  if (shareOptions.classList.contains("hidden")) {
    shareOptions.classList.remove("hidden");
  } else {
    shareOptions.classList.add("hidden");
  }
};
