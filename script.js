console.log("Welcome to tic tac toe");
let music = new Audio("go1.mp3");
let turnAudio = new Audio("ting.mp3");
let gameOver = new Audio("go2.wav");
let isgameover = false;
let turn = "X";
//function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

//Function to Checkwin
const Checkwin = () => {
  let boxtext = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".Info").innerText =
        boxtext[e[0]].innerText + " Won";
      isgameover = true;
      document.getElementById("imgwin").style.visibility = "visible";
      gameOver.play()
      music.pause()
    }
  });
};

//Logic
music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      turnAudio.play();
      Checkwin();
      
      if (!isgameover) {
        document.getElementsByClassName("Info")[0].innerText =
          "Turn for " + turn;

      }
    }
  });
});
// Add onclick listener to reset button
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxText");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameover = false;
  document.getElementsByClassName("Info")[0].innerText = "Turn for " + turn;
  document.getElementById("imgwin").style.visibility = "hidden";
  gameOver.pause()
  music.play()
});
