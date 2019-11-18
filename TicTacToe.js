let move  = document.querySelector(".moveButton");
let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let playArea = document.querySelector(".playArea");
let boxes = document.querySelectorAll(".box");
let elKnappo = document.querySelector(".elKnappo");
let message = document.querySelector(".message");
let popup = document.querySelector(".popup");
let tie = document.querySelector(".tie");

//----------------AMINATION----------------//

window.addEventListener("load", () => {

  move.style.transition = "2s";
  move.style.transform = "translateY(0)";
});

button1.addEventListener("click", () => {
  move.style.animationName = "buttonAnimation";
  move.style.animationDuration = "1.5s";
  setTimeout( () => {
    move.style.transform = "translateY(-600px)";
  }, 1500);

  setTimeout( () => {
    playArea.style.animationName = "playArea";
    playArea.style.animationDuration = "1.5s";
    setTimeout(() => {
      playArea.style.transform = "translateY(-75px)";
    }, 1500);
  }, 750);

  setTimeout( () => {
    elKnappo.style.animationName = "elKnappo";
    elKnappo.style.animationDuration = "1.5s"
    setTimeout( () => {
      elKnappo.style.transform = "translate(400px, 320px)";
    }, 1500);
  },1000);
});

//------------------------Javascript--------------------//
let amount = 0
let turn = true;
let box;
let gameOver = false;


function nextMove(){
  for (let i = 0; i < boxes.length; i++){
    let box = boxes[i];

    box.addEventListener("click", (e) => {
      if (gameOver === true) return;

      let checkbox = e.target.textContent
      console.log(e.target);
            if (turn && checkbox === ""){

              box.classList.add("tom");
              box.innerHTML = "X"
              amount++;
              turn = false;


            } else if(!turn && checkbox === ""){

              box.classList.add("tom");
              box.innerHTML = "O"
              amount++;
              turn = true;

            }
            gameOverAgain();
            checkWinner();

    });
  };
};
nextMove();

function checkWinner(){

  let winCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ];

let won;

for (let wins of winCases){
  let wonX = true;
  let wonO = true;

  for (let win of wins){

    if (boxes[win].textContent === "X"){
      wonO = false;
    } else if (boxes[win].textContent === "O"){
      wonX = false;
    } else if (boxes[win].textContent === "") {
      wonO = false;
      wonX = false;
    }
  }

  if (wonX) {
    won = "X";
    break;
  } else if (wonO) {
    won = "O";
    break;
  }
}

if (won) {
    popup.textContent = won + " won";
    popup.style.transition = "3s";
    popup.style.display = "block";
    gameOver = true;
    console.log("WINNER IS ", won);
}
else if (!won && amount === 9){

  tie.style.animationName = "tie";
  tie.style.animationDuration = "3s";
  setTimeout( () => {
    tie.style.transform = "translate(-460px, 150px)";
  }, 3000);

  //popup.textContent = "Oavgjort";
  //popup.style.transition = "3s";
  //popup.style.display = "block";
}

//   if (boxes[0].textContent === "X" && boxes[1].textContent === "X" && boxes[2].textContent === "X" ||
//       boxes[3].textContent === "X" && boxes[4].textContent === "X" && boxes[5].textContent === "X" ||
//       boxes[6].textContent === "X" && boxes[7].textContent === "X" && boxes[8].textContent === "X" ||
//       boxes[0].textContent === "X" && boxes[4].textContent === "X" && boxes[8].textContent === "X" ||
//       boxes[2].textContent === "X" && boxes[4].textContent === "X" && boxes[6].textContent === "X" ||
//       boxes[0].textContent === "X" && boxes[3].textContent === "X" && boxes[6].textContent === "X" ||
//       boxes[1].textContent === "X" && boxes[4].textContent === "X" && boxes[7].textContent === "X" ||
//       boxes[2].textContent === "X" && boxes[5].textContent === "X" && boxes[8].textContent === "X")
//       {
//         console.log("x är vinnaren");
//         popup.textContent = "X vann";
//
//         popup.style.transition = "3s";
//         popup.style.display = "block";
//         gameOver = false;
//       }
//
//   else if (boxes[0].textContent === "O" && boxes[1].textContent === "O" && boxes[2].textContent === "O" ||
//         boxes[3].textContent === "O" && boxes[4].textContent === "O" && boxes[5].textContent === "O" ||
//         boxes[6].textContent === "O" && boxes[7].textContent === "O" && boxes[8].textContent === "O" ||
//         boxes[0].textContent === "O" && boxes[4].textContent === "O" && boxes[8].textContent === "O" ||
//         boxes[2].textContent === "O" && boxes[4].textContent === "O" && boxes[6].textContent === "O" ||
//         boxes[0].textContent === "O" && boxes[3].textContent === "O" && boxes[6].textContent === "O" ||
//         boxes[1].textContent === "O" && boxes[4].textContent === "O" && boxes[7].textContent === "O" ||
//         boxes[2].textContent === "O" && boxes[5].textContent === "O" && boxes[8].textContent === "O")
//         {
//           console.log("O är vinnaren");
//           popup.textContent = "O vann"
//
//           popup.style.transition = "3s";
//           popup.style.display = "block";
//           gameOver = false;
//         }
 };

 function clear(){
   button2.addEventListener("click", () => {
     for (let i = 0; i < boxes.length; i++){
       let box = boxes[i];
       box.classList.remove("tom");
       box.innerHTML = "";
       //box.style.transition = "1s";
       popup.style.display = "none";


       if (amount === 9){
         tie.style.animationName = "tieDown";
         tie.style.animationDuration = "4s";
         setTimeout( () => {
           tie.style.transform = "translate(-460px, 450px)";
         }, 4000);
       }
       amount = 0;

       gameOverAgain();

     };
   });
 }
 clear();

  function gameOverAgain(){
    gameOver = false;
  }










//-------------------SNÖ-------------------------//

(function () {

  var COUNT = 500;
  var masthead = document.querySelector('body');
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var width = masthead.clientWidth;
  var height = masthead.clientHeight;
  var i = 0;
  var active = false;

  function onResize() {
    width = masthead.clientWidth;
    height = masthead.clientHeight;
    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = '#FFF';

    var wasActive = active;
    active = width > 600;

    if (!wasActive && active)
      requestAnimFrame(update);
  }

  var Snowflake = function () {
    this.x = 0;
    this.y = 0;
    this.vy = 0;
    this.vx = 0;
    this.r = 0;

    this.reset();
  }

  Snowflake.prototype.reset = function() {
    this.x = Math.random() * width;
    this.y = Math.random() * -height;
    this.vy = 1 + Math.random() * 3;
    this.vx = 0.5 - Math.random();
    this.r = 1 + Math.random() * 3;
    this.o = 0.5 + Math.random() * 0.5;
  }

  canvas.style.position = 'absolute';
  canvas.style.left = canvas.style.top = '0';

  var snowflakes = [], snowflake;
  for (i = 0; i < COUNT; i++) {
    snowflake = new Snowflake();
    snowflake.reset();
    snowflakes.push(snowflake);
  }

  function update() {

    ctx.clearRect(0, 0, width, height);

    if (!active)
      return;

    for (i = 0; i < COUNT; i++) {
      snowflake = snowflakes[i];
      snowflake.y += snowflake.vy;
      snowflake.x += snowflake.vx;

      ctx.globalAlpha = snowflake.o;
      ctx.beginPath();
      ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
      ctx.closePath();
      ctx.fill();

      if (snowflake.y > height) {
        snowflake.reset();
      }
    }

    requestAnimFrame(update);
  }

  // shim layer with setTimeout fallback
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();

  onResize();
  window.addEventListener('resize', onResize, false);

  masthead.appendChild(canvas);
})();
