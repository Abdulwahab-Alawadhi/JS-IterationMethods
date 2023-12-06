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

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/

/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
