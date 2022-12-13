const problem1input = require("./problem2-input.js");
const inputArrayFormatted = problem1input().split(/\n/);

// A for Rock, B for Paper, and C for Scissors
// X for Rock 1, Y for Paper 2, and Z for Scissors 3
// 0 if you lost, 3 if the round was a draw, and 6 if you won
function problem2() {
  let score = 0;
  const round = inputArrayFormatted.map((el) => el.trim().split(" "));
  round.forEach((el) => {
    const me = el[1];
    const opponent = el[0];
    score += (me === "X" && 1) + (me === "Y" && 2) + (me === "Z" && 3);
    if (me === "X") {
      if (opponent === "A") {
        score += 3;
      } else if (opponent === "C") {
        score += 6;
      }
    } else if (me === "Y") {
      if (opponent === "B") {
        score += 3;
      } else if (opponent === "A") {
        score += 6;
      }
    } else if (me === "Z") {
      if (opponent === "C") {
        score += 3;
      } else if (opponent === "B") {
        score += 6;
      }
    }
  });
  return score;
}

console.log(problem2());

// X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win
function problem2pt2() {
  let score = 0;
  const round = inputArrayFormatted.map((el) => el.trim().split(" "));
  round.forEach((el) => {
    const me = el[1];
    const opponent = el[0];
    if (me === "Z") {
      score += 6;
      if (opponent === "A") {
        score += 2;
      } else if (opponent === "B") {
        score += 3;
      } else {
        score += 1;
      }
    } else if (me === "Y") {
      score += 3;
      if (opponent === "A") {
        score += 1;
      } else if (opponent === "B") {
        score += 2;
      } else {
        score += 3;
      }
    } else if (me === "X") {
      if (opponent === "A") {
        score += 3;
      } else if (opponent === "B") {
        score += 1;
      } else {
        score += 2;
      }
    }
  });
  return score;
}

console.log(problem2pt2());

module.exports = {
  problem2,
};
