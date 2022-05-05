function PalindromicFactors(num) {
  let factors = [];
  for (let i = 1; i <= num + 1; i++) {
    if (num % i === 0) {
      let j = i.toString();
      if (j === j.split("").reverse().join("")) {
        factors.push(i);
      }
    }
  }
  return factors.length;
}

PalindromicFactors(242);
