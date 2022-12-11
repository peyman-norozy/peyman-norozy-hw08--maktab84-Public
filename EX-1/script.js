"use strict";

const user = {};

function setterGenerator(name, fname, age) {
  this.name = name;
  this.fname = fname;
  this.age = age;
}

function nameSetter(setname, setfname, setage, setter) {
  return new setter(setname, setfname, setage);
}

const total = nameSetter("jack", "norozy", 22, setterGenerator);

const arr = Object.entries(total);
console.log(arr);
arr.forEach((element) => {
  user[element[0]] = element[1];
});

console.log(user);

// const user = {};

// const setterGenerator = (name) => {
//   user.name = name;
//   return user;
// };

// function nameSetter(setname, setter) {
//   return setter(setname);
// }

// console.log(nameSetter("jack", setterGenerator));

// // const nameSetter = (setname, setter) => setter(setname);

// // console.log(nameSetter("jack", setterGenerator));
