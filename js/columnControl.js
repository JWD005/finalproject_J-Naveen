const colToStart = document.getElementById("colToStart");
const colInProgress = document.getElementById("colInProgress");
const colInReview = document.getElementById("colInReview");
const colCompleted = document.getElementById("colCompleted");

// Continuously detect browser width
var winWidth = $(window).width();
$(window).resize(function () {
  winWidth = $(window).width();
  toggleToStartColOpen();
});

function toggleToStartColOpen() {
  if (winWidth > 1200) {
    colToStart.style.width = "Calc(100% - 22rem)";
    colToStart.style.height = "85vh";
    colToStart.style.backgroundColor = "rgb(255, 229, 209)";
  } else {
    colToStart.style.width = "95vw";
    colToStart.style.height = " Calc(100% - 10rem)";
    colToStart.style.backgroundColor = "rgb(255, 229, 209)";
  }
  document.querySelector("#colToStart > p").style.fontSize = "1.5rem";
  document.querySelector("#colToStart > div").style.display = "flex";
}
function toggleToStartColOff() {
  if (winWidth > 1200) {
    colToStart.style.width = "8rem";
    colToStart.style.height = "85vh";
    colToStart.style.backgroundColor = "rgb(255, 239, 227)";
  } else {
    colToStart.style.width = "95vw";
    colToStart.style.height = " 2rem";
    colToStart.style.backgroundColor = "rgb(255, 239, 227)";
  }
  document.querySelector("#colToStart > p").style.fontSize = "0.5rem";
  document.querySelector("#colToStart > div").style.display = "none";
}
// In Progress Column
colInProgress.addEventListener("mouseenter", toggleToStartColOff);
colInProgress.addEventListener("mouseenter", () => {
  document.querySelector("#colInProgress > p").style.fontSize = "1.5rem";
  document.querySelector("#colInProgress > div").style.display = "flex";
});
colInProgress.addEventListener("mouseleave", toggleToStartColOpen);
colInProgress.addEventListener("mouseleave", () => {
  document.querySelector("#colInProgress > p").style.fontSize = "0.5rem";
  document.querySelector("#colInProgress > div").style.display = "none";
});
// In Review Column
colInReview.addEventListener("mouseenter", toggleToStartColOff);
colInReview.addEventListener("mouseenter", () => {
  document.querySelector("#colInReview > p").style.fontSize = "1.5rem";
  document.querySelector("#colInReview > div").style.display = "flex";
});
colInReview.addEventListener("mouseleave", toggleToStartColOpen);
colInReview.addEventListener("mouseleave", () => {
  document.querySelector("#colInReview > p").style.fontSize = "0.5rem";
  document.querySelector("#colInReview > div").style.display = "none";
});
// Completed Column
colCompleted.addEventListener("mouseenter", toggleToStartColOff);
colCompleted.addEventListener("mouseenter", () => {
  document.querySelector("#colCompleted > p").style.fontSize = "1.5rem";
  document.querySelector("#colCompleted > div").style.display = "flex";
});
colCompleted.addEventListener("mouseleave", toggleToStartColOpen);
colCompleted.addEventListener("mouseleave", () => {
  document.querySelector("#colCompleted > p").style.fontSize = "0.5rem";
  document.querySelector("#colCompleted > div").style.display = "none";
});
