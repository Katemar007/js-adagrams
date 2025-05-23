
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

const LETTERS_SCORE = {
  A: 1, 
  B: 3, 
  C: 3, 
  D: 2, 
  E: 1, 
  F: 4, 
  G: 2, 
  H: 4, 
  I: 1, 
  J: 8, 
  K: 5, 
  L: 1, 
  M: 3, 
  N: 1, 
  O: 1, 
  P: 3, 
  Q: 10, 
  R: 1, 
  S: 1, 
  T: 1, 
  U: 1, 
  V: 4, 
  W: 4, 
  X: 8, 
  Y: 4, 
  Z: 10
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
    // count the # or char in `input` and in `lettersInHand`
    const countInput = helperCountInArray(char, inputList);
    const countHand = helperCountInArray(char, lettersInHand);

    if (!lettersInHand.includes(char) || countInput > countHand) {
      return false;
    };
  };
  return true;
}

export const scoreWord = (word) => {
  let score = 0;
  // add value for char as a key from dict LETTER_SCORE
  for(let char of word) {
    char = char.toUpperCase();
    score = score + LETTERS_SCORE[char];
  }
  // add extra 8 if word has >7 letters
  if (word.length >= 7) {
    score = score + 8;
  }
  return score;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};

