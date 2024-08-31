// let player = prompt("HEADS OR TAILS?").toLocaleUpperCase();
const move = ["heads", "tails"];
let adversary = move[Math.trunc(Math.random() * move.length)].toUpperCase();

if (player === adversary) {
  console.log(`WIN! IT'S ${adversary}`);
} else {
  player !== adversary;
  console.log(`LOSE! IT'S ${adversary}`);
}

const headsBTN = document.getElementById(".heads");
const tailsBTN = document.getElementById(".tails");

const clickHeads = headsBTN.addEventListener("click", function () {});
const clickTails = tailsBTN.addEventListener("click", function () {});
