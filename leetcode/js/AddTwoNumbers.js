var addTwoNumbers = function (l1, l2) {
  let _l1 = l1;
  let _l2 = l2;
  console.log(_l1, _l2);
  let x = l1.reverse();
  let y = l2.reverse();
  console.log(x, y);
  let numberl1 = Number(x.join(""));
  let numberl2 = Number(y.join(""));
  console.log(numberl1, numberl2);
  let sum = numberl1 + numberl2;
  console.log(sum);
  let newarray1 = Array.from(String(sum));
  console.log(newarray1);
  //   return newarray1.reverse();
  console.log(newarray1.reverse());
};
addTwoNumbers([1, 2, 3, 4, 5, 6], [2, 3, 4, 5]);
