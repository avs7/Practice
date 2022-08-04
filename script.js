"use strict";

function sumAll(arr) {
  //sort array from smallest to largest
  let sortArr = arr.sort(function (a, b) {
    return a - b;
  });

  //fill array with first, last and in-between numbers
  let newArr = [];
  let i = sortArr[0];
  while (i >= sortArr[0] && i <=sortArr[1]) {
    newArr.push(i);
    i++;
  }
  return newArr;
}

console.log(sumAll([23, 3]));
