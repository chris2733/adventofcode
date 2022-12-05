const problem1input = require("./problem1-input.js");
const inputArrayFormatted = problem1input()
  .split(/\n/)
  .map((el) => Number(el.trim()));

function problem1() {
  let biggest = 0;
  let cumulation = 0;
  inputArrayFormatted.forEach((each) => {
    if (each === 0) {
      biggest = cumulation > biggest ? cumulation : biggest;
      cumulation = 0;
    } else {
      cumulation += each;
    }
  });
  return biggest;
}

console.log(problem1());
// answer: 71471

function problem1pt2() {
  let biggest = [0, 0, 0];
  let cumulation = 0;
  inputArrayFormatted.forEach((each) => {
    if (each === 0) {
      if (cumulation > biggest[0]) {
        biggest.splice(0, 0, cumulation, ...biggest);
      } else if (cumulation > biggest[1]) {
        biggest.splice(1, 0, cumulation, ...biggest);
      } else if (cumulation > biggest[2]) {
        biggest.splice(2, 0, cumulation, ...biggest);
      }
      cumulation = 0;
      biggest = biggest.slice(0, 3);
    } else {
      cumulation += each;
    }
  });
  return biggest.reduce((a, b) => a + b);
}

console.log(problem1pt2());
// answer: 211189;
// [ 71471, 70523, 69195 ]

module.exports = {
  problem1,
  problem1pt2,
};
