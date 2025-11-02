var timer = 60;
var score = 0;
var ranNum = 0;
var timerInt = null; // Prevent multiple timers

function increaseScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

function makeBubble() {
  let clutter = "";

  for (var i = 1; i <= 55; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div id="bubble">${rn}</div>`;
  }
  document.querySelector(".footer").innerHTML = clutter;
}

function getNewHit() {
  ranNum = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = ranNum;
}

function runTimer() {
  // Prevent multiple intervals
  if (timerInt !== null) return;

  timerInt = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerInt);
      timerInt = null;
      document.querySelector(".footer").innerHTML = `<h1 class="over">GAME OVER</h1>`;
    }
  }, 1000);
}

// 🎯 Listen for bubble clicks (gameplay)
document.querySelector(".footer").addEventListener("click", (e) => {
  var clickedNum = Number(e.target.textContent);
  if (clickedNum === ranNum) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

// 🎮 Start game on first click in footer only
document.querySelector(".footer").addEventListener("click", () => {
  if (timerInt === null && timer === 60) { 
    // Only start timer the first time
    runTimer();
    makeBubble();
    getNewHit();
  }
}, { once: false });
