// ANAGRAMS
// Given two strings, write a function to determine
// if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging
// the letters of another, such as cinema, formed from iceman.

// 1- Check the strings if they are anagrams of each other.
// 2-
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

// 3- Break It Down
// a) Create a function which takes two strings and frst of all check for the number
// of alphabets if not equal then return false.
// b) Create object which contains string 1 elements with their frequency
// c) Loop through string 2 and check for the alphabets of the string 2 if they exist in frequencyCounter object or not? If not then return false, If yes then subtract the alphabets value by 1.
// d) I have done the logic part in the last array. CHeckout below

// 4- Solve\Simplify

function anagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  let frequencyCounter1 = {};

  for (let val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    // console.log(frequencyCounter1)
  }
  for (let i = 0; i < str2.length; i++) {
    if (!frequencyCounter1[str2[i]]) return false;
    else {
      frequencyCounter1[str2[i]] = frequencyCounter1[str2[i]] - 1;
    }
  }
  return true;
}
anagrams("aoanps", "maaspn"); //false
anagrams("amanps", "maaspn"); //true
