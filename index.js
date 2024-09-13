let btn = document.querySelector(".press");
let alla = document.querySelector(".alla");
let imgAlla = alla.querySelector(".img");
let textAlla = alla.querySelector("p");
let arrow = document.querySelector(".arrow");
let arrowLeft = document.querySelector(".arrow__left");

btn.addEventListener("click", () => {
  const intervalId = setInterval(() => {
    alla.style.animation = "an 2s linear forwards";

    alla.addEventListener(
      "animationend",
      () => {
        alla.style.animation = "";
        clearInterval(intervalId);

        alla.style.left = "0px";
      },
      { once: true }
    );
  }, 300);
  setInterval(() => {
    if (
      getComputedStyle(imgAlla, null).getPropertyValue("background-image") ==
      `url("https://gaondarech726.github.io/BabushkaDR/Alla.jpg")`
    ) {
      imgAlla.style.backgroundImage = `url("./Alla2.jpg")`;
    } else if (
      getComputedStyle(imgAlla, null).getPropertyValue("background-image") ==
      `url("https://gaondarech726.github.io/BabushkaDR/Alla2.jpg")`
    ) {
      imgAlla.style.backgroundImage = `url("./Alla.jpg")`;
    }
  }, 250);
});

function playAudio() {
  var audio = document.getElementById("myAudio");
  audio.play();
}
