//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];
/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/

const result1 = numbers.filter((num) => {
  if (num >= 25) {
    return num;
  }
});
console.log(result1);

const result2 = numbers.filter((num) => {
  if (num % 5 == 0) {
    return num;
  }
});

console.log(result2);

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/

const result3 = numbers.map((num) => {
  return num ** 2;
});

console.log(result3);

const result4 = numbers.map((num) => {
  return num * 2;
});

console.log(result4);

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

const result5 = numbers.filter((num) => {
  if (num >= 20) {
    return true;
  }
});

const result6 = result5.map((num) => {
  return num ** 2;
});

console.log(result6);

const result7 = numbers.filter((num) => {
  if (num % 5 == 0) {
    return true;
  }
});

const result8 = result7.map((num) => {
  return num * 3;
});

console.log(result8);
