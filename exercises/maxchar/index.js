// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  //build a map that takes the char as keys and the
  //number of instances it appears as value
  let charObj = {};

  for (let char of str) {
    if (charObj[char]) {
      charObj[char]++;
    } else {
      charObj[char] = 1;
    }
  }
  let objSorted = Object.keys(charObj).sort((a, b) => charObj[b] - charObj[a]);

  return objSorted[Object.keys(objSorted)[0]];
}

function maxChar(str) {
  //build a map that takes the char as keys and the
  //number of instances it appears as value
  let charObj = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    if (charObj[char]) {
      charObj[char]++;
    } else {
      charObj[char] = 1;
    }
  }

  for (let char in charObj) {
    if (charObj[char] > max) {
      max = charObj[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
