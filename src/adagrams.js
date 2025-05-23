
const LETTER_POOL = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
};

export function helperLettersList() {
  // buils a list of letters according to their amount in LETTER_POOL
  const lettersList = [];

  for (const key in LETTER_POOL) {
    for (let index = 0; index < LETTER_POOL[key]; index++) {
      lettersList.push(key);
    }
  };

  return lettersList;
}
// returns the number of letters in an array
export const helperCountInArray = (char, array) => {
  return array.filter(letter => letter === char).length;
}

export const drawLetters = () => {
  const lettersInHand = [];
  const lettersList = helperLettersList();

  while (lettersInHand.length < 10) {
  // Returns a random integer from 0 to 100:
    const randomInteger = Math.floor(Math.random() * lettersList.length);
    const char = lettersList[randomInteger];
    // Returns number of appearances of 'letter' in listTiles
    const countLetter = helperCountInArray(char, lettersInHand);

    // checks if the number of `letter` in `tiles` does not exceed the one on the LETTER_POOL
    if (countLetter < LETTER_POOL[char]) {
      lettersInHand.push(char);
    }
  }
  return lettersInHand;
}

export const usesAvailableLetters = (input, lettersInHand) => {
  for (const char of input) {
    const inputList = input.split('')
    const countInput = helperCountInArray(char, inputList);
    const countHand = helperCountInArray(char, lettersInHand);

    if (!lettersInHand.includes(char) || countInput > countHand) {
      return false;
    };
  };
  return true;
}


export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
