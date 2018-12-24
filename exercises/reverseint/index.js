// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let reversed = parseInt(
    n
      .toString()
      .split("")
      .reverse()
      .join("")
  );
  //   debugger;
  return Math.sign(n) === -1 ? Math.abs(reversed) * -1 : reversed;
}

// reverseInt(0);

module.exports = reverseInt;
