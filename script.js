"use strict";

function destroyer(arr, ...nums) {
  return arr.filter((value) => !nums.includes(value));
}

const result = destroyer([1, 2, 3, 1, 2, 3], 2, 3);

console.log(result);
