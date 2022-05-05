// power(2,4)
//16
// power(3,2)
//9
// power(3,3)
//27

// Write a function which accepts a base an an exponent.
// It should return the result of raising the base to that exponent

// 2^4 = 2 * 2^3
//     = 2 * 2 * 2^2
//     = 2 * 2 * 2* 2^1
//     = 2 * 2 * 2 * 2 * 2^0
//     = 2 * 2 * 2 * 2 * 1

function power(base, exponent) {
  let result;

  if (exponent === 0 && base === 0) return undefined;
  if (exponent === 0) return 1;
  if (base === 0) return 0;

  function helper(b, exp) {
    if (exp === 0) return 1;

    return (result = b * helper(b, exp - 1));
  }

  helper(base, exponent);

  return result;
}

power(2, 3);
