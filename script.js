const move = ["HEADS", "TAILS"];
let adversary = move[Math.trunc(Math.random() * move.length)];

const headsBTN = document.querySelector(".heads");
const tailsBTN = document.querySelector(".tails");

headsBTN.addEventListener("click", function () {
  if ("HEADS" === adversary) {
    alert(`WIN! IT'S ${adversary} 😁`);
  } else {
    alert(`LOSE! IT'S ${adversary} 😰`);
  }
});

tailsBTN.addEventListener("click", function () {
  if ("TAILS" === adversary) {
    alert(`WIN! IT'S ${adversary} 😁`);
  } else {
    alert(`LOSE! IT'S ${adversary} 😰`);
  }
});

resetGame();
