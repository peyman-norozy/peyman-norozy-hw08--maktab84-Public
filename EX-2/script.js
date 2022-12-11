"use strict";

// const entry = prompt("enter your element name's:");

// const callback = function (elem) {
//   elem.style.backgroundColor = "red";
//   elem.style.height = "40px";
// };
const callback = function (elem) {
  elem.style.backgroundColor = "red";
  elem.style.height = "40px";
};

function elemCreator(tag, callfn) {
  const newelem = document.createElement(tag);
  // const append = document.body.appendChild(newelem);
  console.log(newelem);
  callfn(newelem);
}

// console.log(elemCreator(entry, callback));

elemCreator("div", callback);
