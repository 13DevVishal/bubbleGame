var timer = 60;
var score = 0;
var ranNum = 0;

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
  var timerInt = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector(".footer").innerHTML = `<h1 class="over">GAME OVER</h1>`
    }
  }, 1000);
}

document.querySelector(".footer").addEventListener("click", (e) => {
    var clickedNum = Number(e.target.textContent)
    if(clickedNum === ranNum){
        increaseScore()
        makeBubble()
        getNewHit()
    }
});


document.querySelector("body").addEventListener("click",()=>{
    runTimer();
    makeBubble();
    getNewHit();
})

