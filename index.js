const btn = document.querySelector(".btn-submit");
const response = document.querySelector(".response");
const text = document.querySelector(".text-container");
const message = document.querySelector(".message");
const message1 = document.querySelector(".reset");
const gif1 = document.querySelector(".giphy-embed1");
const gif = document.querySelector(".giphy-embed");
const view = document.querySelector(".btn");
//const list = document.querySelector(".list p");
const start = document.querySelector(".start");
let score = [,];
score[0] = 0;
let round = 10;
let maxWin = 0;
let currentTurn = 0;
const localScore = localStorage.getItem("score");
console.log("local"+localScore);
if (localScore != null) {
  score[1] = JSON.parse(localScore);
}else
{
  score[1] = 0
  //localScore.setItem("score", 0)

}
const data = [
  ["Alaska", "Juneau"],
  ["Texas	", "Austin"],
  ["California	", "Sacramento"],
  ["Montana	", "Helena"],
  ["New Mexico", "Santa Fe"],
  ["Arizona	", "Phoenix"],
  ["Nevada	", "Carson City"],
  ["Colorado	", "Denver"],
  ["Oregon	", "Salem"],
  ["Wyoming	", "Cheyenne"],
  //next
  ["Michigan	", "Lansing"],
  ["Minnesota	", "St Paul"],
  ["Utah	", "Salt Lake City"],
  ["Idaho	", "Boise"],
  ["Kansas	", "Topeka"],
  ["Nebraska	", "Lincoln"],
  ["South Dakota	", "Pierre"],
  ["Washington	", "Olympia"],
  ["North Dakota	", "Bismarck"],
  ["Florida	", "Tallahassee"],
  ["Oklahoma	", "Oklahoma City"],
  ["Missouri	", "Jefferson City"],
  ["Georgia	", "Atlanta"],
  ["Wisconsin	", "Madison"],
  ["Illinois	", "Springfield"],
  ["Iowa	", "Des Moines"],
  ["New York	", "Albany"],
  ["North Carolina	", "Raleigh"],
  ["Virginia	", "Richmond"],
  ["Arkansas	", "Little Rock"],
  ["Alabama	", "Montgomery	"],
  ["Louisiana	", "Baton Rouge"],
  ["Mississippi	", "Jackson"],
  ["Pennsylvania	", "Harrisburg"],
  ["Ohio	", "Columbus"],
  ["Tennessee	", "Nashville"],
  ["Kentucky	", "Frankfort"],
  ["Maine	", "Augusta"],
  ["Indiana	", "Indianapolis"],
  ["South Carolina	", "Columbia"],
  ["West Virginia	", " Charleston"],
  ["Maryland	", "Annapolis"],
  ["Hawaii	", "Honolulu	"],
  ["Massachusetts	", "Boston	"],
  ["Vermont	", "Montpelier"],
  ["New Hampshire	", "Concord	"],
  ["New Jersey	", "Trenton	"],
  ["Connecticut	", "Hartford"],
  ["Delaware	", "Dover"],
  ["Rhode ", "Island	Providence"],
];

start.addEventListener("click", () => {
  start.style.display = "none";
  getRandomQuestion();
});
console.log(data[20]);
let player = [0, 0];
const reset = () => {
  response.value = "";

  // message.innerHTML =""
};
const getRandomQuestion = () => {
  var random = Math.floor(Math.random() * 10) + 21;
  console.log("Random Question", random);
  player = data[random];
  text.innerHTML = "What is the capital of " + player[0];
  //list.innerHTML = player[1] + ", " + player[0];
  // Comment line below after comfortable with practice
  //list.classList.add("ox-messages");
  response.focus();
};
const getScore = () => {
  message.innerHTML = score[0];
  message1.innerHTML = "Highest Score: " + score[1];
};
// getRandomQuestion();
view.addEventListener("click", () => {
  //unblur background
  getRandomQuestion();
  const body = document.querySelector("body");
  body.style.backdropFilter = "none";
  body.addEventListener("keyup", () => {
    document.querySelector(".game-container").style.display = "block";

    body.style.backdropFilter = "blur(5px)";
  });
  //hide game
  document.querySelector(".game-container").style.display = "none";
});
getScore();
const getAnswer = () => {
  //list.classList.remove("ox-messages");
  if (
    player[1].toString().toLowerCase() ===
    response.value.toString().toLowerCase()
  ) {
    // message.innerHTML = "Correct Answer</br>";
    gif1.style.display = "block";
    gif.style.display = "none";
    score[0] = score[0] + 1;
    maxWin++;
    score[1] = Math.max(score[1], maxWin);
    localStorage.setItem("score", score[1]);
  } else {
    gif1.style.display = "none";
    gif.style.display = "none";
    maxWin = 0;
    score[0] = 0;
  }
};
response.addEventListener("keyup", function (e) {
  //list.classList.remove("ox-messages");
  const keyName = e.key;
  if (keyName === "Enter") {
    getAnswer();
    getScore();
    getRandomQuestion();
    reset();
    currentTurn++;
  }
  console.log("currentTurn " + currentTurn);
});

const game = (counters) => {
  while (0) {
    getRandomQuestion();
    reset();
    getScore();
    console.log(currentTurn);
  }
};
game(round);
