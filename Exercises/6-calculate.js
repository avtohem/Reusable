'use strict';

const square = x => x * x;

const cube = x => x ** 3;

const average = (oneItm, secItm) => {
  const aver = (oneItm + secItm) / 2;
  return aver;
};

const calculate = () => {

  const resArr = [];
  for (let i = 0; i <= 9; i++) {
    resArr.push(average(square(i), cube(i)));
  }
  return resArr;
};

module.exports = { square, cube, average, calculate };
