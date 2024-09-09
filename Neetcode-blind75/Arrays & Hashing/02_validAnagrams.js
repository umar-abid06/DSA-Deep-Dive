// function validAnagrams(s, t) {
//   if (s.length !== t.length) return false;
//   let str1 = s.toLowerCase();
//   let str2 = t.toLowerCase();
//   const obj = {};
//   for (let i = 0; i < str1.length; i++) {
//     const element = str1[i];

//     obj[element] = (obj[element] || 0) + 1;
//   }

//   for (let j = 0; j < str2.length; j++) {
//     const char = str2[j];
//     if (!obj[char]) {
//       console.log("false");
//       return false;
//     } else {
//       obj[char] = obj[char] - 1;
//     }
//   }
//   console.log("true");
//   return true;
// }

// function validAnagrams(s, t) {
//   const countS = {};
//   const countT = {};

//   for (let i = 0; i < s.length; i++) {
//     countS[s[i]] = 1 + (countS[s[i]] || 0);
//     countT[t[i]] = 1 + (countT[t[i]] || 0);
//   }

//   for (const key in countS) {
//     console.log(countS, countT, key, countS[key], countT[key]);
//     if (countS[key] !== countT[key]) {
//       return false;
//     }
//   }

//   return true;
// }
// validAnagrams("Anagram", "gramnaa");
validAnagrams("ana", "naa");
