// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1,num2) {
  if(num1 > num2){
    return num1;
  }
  else{
    return num2;
  }
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  if(words.length === 0){
    return null;
  }
  else{
    var longestWord = words[0];
    for(var i = 0; i < words.length; i++){
      if(words.length > longestWord.length){ 
        longestWord = strSplit[i]; 
       }
    }

    return longestWord; 
  }
}


// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum=0;
  if (numbers.length === 0) {
    return 0;
  } else {
  for(let i=0; i<numbers.length; i++){
    sum += array[i];
  }
  return sum;
}
}


// Iteration #3.1 Bonus:
function sum(array) {
  let sum=0;
  if (array.length === 0) {
    return 0;
  } else {
  for(let i=0; i<array.length; i++){
    if (typeof(array[i]) === "number") {
      sum += array[i];
    }else if(typeof(array[i])==='string'){
      sum += array[i].length;
    } else if (typeof array[i] === "boolean") {
      if (array[i] === true) {
        sum += 1;
      } else if (array[i] === false) {
        sum += 0;
      }
    } else if (Array.isArray(array[i]) || typeof array[i] === "object") {
      throw new Error("Unsupported data type sir or ma'am");
    }
    
    }
}
  return sum;
}



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
  let sum=0;
  if (array.length === 0) {
    return null;
  }else{
  for(let i=0; i<array.length; i++){
    sum += array[i];
  }
  return sum/array.length;
}
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(array) {
  let sum=0;
  let arrLength = array.length;
  if (arrLength === 0) {
    return null;
  } else if (arrLength === 1) {
    return array[0].length / 1;
  }else{
  for(let i=0; i<arrLength; i++){
    sum += array[i].length;
  }
  let avg= sum/array.length;
  return avg;
  }
}

// Bonus - Iteration #4.1
function avg(array) {
  let sum1=0;
  if (array.length === 0) {
    return null;
  } else {
  for(let i=0; i<array.length; i++){
    if (typeof(array[i]) === "number") {
      sum1 += array[i];
    }else if(typeof(array[i])==='string'){
      sum1 += array[i].length;
    } else if (typeof array[i] === "boolean") {
      if (array[i] === true) {
        sum1 += 1;
      } else if (array[i] === false) {
        sum1 += 0;
      }
    } else if (Array.isArray(array[i]) || typeof array[i] === "object") {
      throw new Error("Unsupported data type sir or ma'am");
    }
    
    }
}
  let avg=parseFloat((sum1/array.length));
  return avg;
}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(array) {
  if (array.length === 0) {
    return null;
  } else{
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) === i) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}
}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(array, wordToFind) {

  let flag = 0; // Initialize flag outside of the loop
  if (array.length === 0) {
    return null;
  } else{
  for(let i=0; i<array.length; i++){
    if(array[i]===wordToFind){
      flag= 1;
      break;// Exit the loop once the word is found
    }
    
}if(flag===1){
      return true;
    }else{
      return false;
    }
}
}



// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
const targetCountWord = 'matter';
function howManyTimes(wordsCount, targetCountWord) {
  let count = 0;
  for(const word of wordsCount){
    if(word === targetCountWord)
      count++;
  }
  return count;
}

// Iteration #8: Bonus
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  let maxProduct = 0;
  
  for(let row = 0; row < numRows; row++){
    for(let col = 0; col <= numCols-4; col++){
      const product = matrix[row][col] * matrix[row][col + 1] * matrix[row][col + 2] * matrix[row][col + 3]; 
      maxProduct = Math.max(maxProduct, product);
    }
  }

  for(let row = 0; row <= numRows-4; row++){
    for(let col = 0; col < numCols; col++){
      const product = matrix[row][col] * matrix[row + 1][col] * matrix[row + 2][col] * matrix[row + 3][col]; 
      maxProduct = Math.max(maxProduct, product);
    }
  }
  return maxProduct;
}

// Iteration #8.1 : Bonus
function greatestProductOfDiagonals(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  let maxProduct = 0;
  // Check diagonals from top-left to bottom-right
  for (let row = 0; row <= numRows - 4; row++) {
    for (let col = 0; col <= numCols - 4; col++) {
      const product = matrix[row][col] * matrix[row + 1][col + 1] * matrix[row + 2][col + 2] * matrix[row + 3][col + 3];
      maxProduct = Math.max(maxProduct, product);
    }
  }
  // Check diagonals from top-right to bottom-left
  for (let row = 0; row <= numRows - 4; row++) {
    for (let col = 3; col < numCols; col++) {
      const product = matrix[row][col] * matrix[row + 1][col - 1] * matrix[row + 2][col - 2] * matrix[row + 3][col - 3];
      maxProduct = Math.max(maxProduct, product);
    }
  }
  return maxProduct;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
