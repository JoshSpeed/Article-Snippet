const share = document.querySelector(".share");
const speech = document.querySelector(".speech-bubble");
const shareIcon = document.querySelector(".share-icon");

share.addEventListener("click", function () {
    speech.classList.toggle("hidden");
    share.classList.toggle("share-active");
    shareIcon.classList.toggle("share-icon-active");
});