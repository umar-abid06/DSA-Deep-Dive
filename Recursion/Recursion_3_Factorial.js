// Factorial function: Which takes a number and multiple it with its previous numbers until reach to 1

// Doing Iteratively:

// function Factorial(num) {
//     let product = 1;
//     for (let i = num; i >= 1; i--) {
//         product *= i;
//     }
//     return product

// }

//Doing Recursively:

//Base Case
//Different Inputs

function Factorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * Factorial(num - 1);
}

Factorial(4);
