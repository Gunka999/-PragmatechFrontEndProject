// let nums = [1, 2, 7, 8, 11, 15];
// let target = 9;
// let a = [];

// for (i = 0; i < 4; i++) {
//   for (j = 1; j < 4; j++) {
//     if (nums[i] + nums[i + j] == target) {
//       a.push(i, i + j);
//       a.sort(function (a, b) {
//         return a - b;
//       });
//     }
//   }
// }

// console.log(a);

var twoSum = function (_nums, _target) {
  let nums = _nums;
  let target = _target;
  let a = [];
  a.length;
  for (i = 0; i < nums.length - 1; i++) {
    for (j = 1; j < nums.length; j++) {
      if (nums[i] + nums[i + j] == target) {
        a.push(i, i + j);
        a.sort(function (a, b) {
          return a - b;
        });
        console.log(a);
      }
    }
  }
};
twoSum([3, 3], 6);
