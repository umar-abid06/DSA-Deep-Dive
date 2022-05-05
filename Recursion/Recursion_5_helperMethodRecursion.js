// This is a pattern for writing helper method recursion

// function outer(input) {
//   var outerScopedVariable = [];

//   function helper(helperInput) {
//     // modify the outerScopedVariable
//     helper(helperInput--);
//   }

//   helper(input);

//   return outerScopedVariable;
// }

function outer(input) {
  var outerScopedVariable = [];

  function helper(helperInput) {
    // use the base-case

    helper(helperInput--);
    // change the outerScopedVariable using .push, .concat, spread operator in case of arrays, substrand slice in case of strings, and Object.assign or the spread operator in case of objects.
  }
  helper(input);

  return outerScopedVariable;
}
