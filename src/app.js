/* eslint-disable */
//import "bootstrap";
import "./style.css";

window.onload = function() {
  console.log(randomExcuse());
  document.getElementById("excuseButton").onclick = function() {
    document.getElementById("excuse").innerHTML = randomExcuse();
  };
};
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
let words = [who, action, what, when];
function randomExcuse() {
  let excuses = "";
  for (let i = 0; i < words.length; i++) {
    excuses = excuses + " " + words[i][randomNumber(words[i].length)];
  }
  return excuses;
}
function randomNumber(lenght) {
  let number = Math.floor(Math.random() * lenght);
  return number;
}
