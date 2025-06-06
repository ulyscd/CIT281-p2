/*
    CIT 281 Project 2
    Name: Ulys Chauncey Drumrongthai
*/

// Returns a random number between min (inclusive) and max (exclusive).
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";

/* ------------------------- Random Letter Function: ------------------------ */

// Returns a single, random, lowercase letter.
function getRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet[getRandomInteger(0, alphabet.length)];
}

/* ------------------------- Random String Function: ------------------------ */

// Returns a random length string of random, lowercase letters.
function getRandomString(minLength, maxLength) {
    let rString = "";
    const stringLength = getRandomInteger(minLength, maxLength);
    for (let i = 0; i < stringLength; i++) {
        rString += getRandomLetter();
    }
    return rString;
}

/* ------------------------- Sorted String Function: ------------------------ */

// Returns a string in acsending alphabetical order.
function getSortedString(string) {
    return string.split("").sort().join("");
}

/* ---------------------------- For Loop Section: --------------------------- */

  for (let i = 0; i < getRandomInteger(5, 26); i++) {
    // result += alphabet[getRandomInteger(1, alphabet.length - 1)];
    result += getRandomLetter();
  }
  
  console.log(result);
  console.log(getRandomString(10, 20));
  console.log(getSortedString(result));
