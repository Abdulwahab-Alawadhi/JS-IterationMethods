// const numbs = ["1", "2", "3"];

// function printNumbs(x) {
//   console.log(` the number is ${x}`);
// }

// numbs.forEach(printNumbs);

// const budgets = [150, 1000, 3000, 10500, 12000];

// function filterBudget(x) {
//   return x > 3000;
// }

// console.log(budgets.filter(filterBudget));

///////////////////////////////////////////////////////////////////////////////////

//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
function filterGreaterOrE(x) {
  if (x >= 25) {
    return x;
  } else {
  }
}
console.log(numbers.filter(filterGreaterOrE));

function filterDivsBy5(x) {
  if (x % 5 == 0) {
    return x;
  } else {
  }
}
console.log(numbers.filter(filterDivsBy5));

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
//q3
function mapSquared(x) {
  return x * x;
}
console.log(numbers.map(mapSquared));
//q4
function mapDoubled(x) {
  return x * 2;
}
console.log(numbers.map(mapDoubled));

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
//q5

console.log(numbers.filter(filterGreaterOrE).map(mapSquared));

//q6

function mapTripled(x) {
  return x * 3;
}

console.log(numbers.filter(filterDivsBy5).map(mapTripled));
