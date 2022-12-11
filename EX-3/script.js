"use strict";

let counterMaker = function () {
  let counting = 0;
  function coun(entery) {
    if (Number(entery) > 0) {
      counting += Number(entery);
      // console.log(counting);
    } else if (Number(entery) < 0) {
      counting = counting - -Number(entery);
      // console.log(counting);
    } else if (Number(entery) === 0) {
      // console.log(counting);
    }
    return counting;
    // counter(prompt("entery your number"));
  }
  return coun;
};
const counter = counterMaker();
console.log(counter()); // 0
console.log(counter()); // 0
console.log(counter(1)); // 1
console.log(counter()); // 1
console.log(counter(3)); // 4
console.log(counter(7)); // 11
console.log(counter(-5)); // 6
// counterMaker();

// let number = +prompt("enter your number");
// console.log(number);
// if (number > 0) {
//   console.log("positive");
// } else if (number < 0) {
//   console.log("negative");
// }
