// // Task: Two sum 

// // #1

// let nums = [15, 2, 11, 7];
// let target = 9;

// let calculateSumOfTwoFn = function (numbers, ourTarget) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     let sum = 0;
//     for (let k = 0; k < numbers.length; k += 1) {
//       sum = numbers[i] + numbers[k];
//       if (sum === ourTarget) {
//         return `index ${i} and index ${k}`;
//       }
//     }
//   }
// };

// console.log(calculateSumOfTwoFn(nums, target));

// // #1

// let nums = [15, 2, 11, 7];
// let target = 9;

let calculateSumOfTwoFn = function (numbers, ourTarget) {
  for (let key of numbers) {
    let sum = 0;
    for (let num of numbers) {
      sum = num + key;
      if (sum === ourTarget) {
        return `index ${numbers.indexOf(num)} and index ${numbers.indexOf(
          key
        )} `;
      }
    }
  }
};

console.log(calculateSumOfTwoFn(nums, target));

// // Task: Palindrome number

let number = 121;
let numberArray = String(number).split("");

const palindromFn = function (numArr, num) {
  let reversedNumberArray = [];

  for (let i = numArr.length - 1; i >= 0; i -= 1) {
    reversedNumberArray.push(numArr[i]);
  }
  let makeNumber = Number(reversedNumberArray.join(""));

  if (makeNumber === num) {
    return true;
  } else {
    false;
  }
};

console.log(palindromFn(numberArray, number));
