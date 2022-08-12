"use strict";

function destroyer(arr, ...nums) {
  arr.filter((value, index) => {
    if (nums.includes(value)) {
      arr.pop(index);
    }
  });
  return arr;
}

const result = destroyer([1, 2, 3, 1, 2, 3], 2, 3);

console.log(result);
