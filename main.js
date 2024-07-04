const shareButton = document.querySelector(".share-button");
const shareOptions = document.querySelector(".share-options");

shareButton.onclick = function () {
  if (shareOptions.classList.contains("hidden")) {
    console.log("removing hidden class");
    shareOptions.classList.remove("hidden");
  } else {
    console.log("adding hidden class");
    shareOptions.classList.add("hidden");
  }
};
