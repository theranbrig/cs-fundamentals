// Programming Questions

// You may do the following problems in any language of your choice. Use the clean code principles taught in this section while writing the code.

// Square Given an array of integers, find out whether the sum of the integers is a perfect square. If it is a perfect square, return the square root, otherwise return the sum.

// Example:
// [10,1,4,6,1,1,2] returns 5 because the square root of 25 is 5.
// [1,1] returns 2 because 2 is not a perfect square.
// The square root of 2 is approximately 1.414213562373095.

squareArray1 = [10,1,4,6,1,1,2]
squareArray2 = [1,1]
squareArray3 = [1,2,3,4,5]

function checkSquare(arr) {
  let arrayTotal = arr.reduce((a, b) =>  a + b);
  let squareRoot = Math.sqrt(arrayTotal);
  if (squareRoot % 1 === 0) {
    return squareRoot;
  } else {
    return arrayTotal;
  }
}

console.log(checkSquare(squareArray1)) // returns 5
console.log(checkSquare(squareArray2)) // returns 2
console.log(checkSquare(squareArray3)) // returns 15


// Duplicate Given an array of integers, find out whether the array contains any duplicate elements. The function should return true if any value appears at least twice in the array, and false if every element is distinct.

function findDuplicates(array) {
  const sortedArray = array.sort((a,b) => a - b)
  console.log(sortedArray);
  let results = [];
  for (let i = 0; i < sortedArray.length; i++) {
    if(sortedArray[i] === sortedArray[i + 1]) {
      results.push(sortedArray[i]);
    }
  }
  if (results.length > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(findDuplicates([1,1,1]));
console.log(findDuplicates([1,1,2]));
console.log(findDuplicates([1,2,3,6,4,2]));
console.log(findDuplicates([1,2,100,500,1000,3,4]));


// Extra Credit

// Anagram An anagram is a word, phrase, or name formed by rearranging the letters of another word. For example, spar can be formed from rasp. Given two strings, stringOne and stringTwo, determine if stringOne is an anagram of stringTwo. Assume that the strings contain only lowercase letters and do not worry about case-sensitivity. Hint: Your first task will be to convert the strings to arrays.

function findAnagram(string1, string2) {
  let word1Array = [...string1]
  let word2Array = [...string2]
  let counter = 0
  word1Array.forEach(element => {
    if(word2Array.indexOf(element) !== -1) {
      counter ++
    } else {
      return `Not an anagram`, false;
    }
  });
  if (counter === word1Array.length && counter === word2Array.length) {
    return true;
  } else {
    return false;
  }
}

console.log(findAnagram("spar", "rasp"))

// Hash Functions

const hash = (string, max) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
}

const HashTable = function () {
  let storage = [];
  const storageLimit = 4;

  this.print = function() {
    console.log(storage);
  };

  this.add = function(key, value) {
    let index = hash(key, storageLimit)
    if (storage[index] === undefined) {
      storage[index] = [
        [key, value]
      ];
    } else {
      let inserted = false;
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] === value;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value])
      }
    }
  };

  this.remove = function(key) {
    let index = hash(key, storageLimit)
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (let i = 0; i < storage[index]; i++) {
        if(storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  this.lookup = function(key) {
  let index = hash(key, storageLimit)
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if(storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };
}

let ht = new HashTable();

ht.add('Theran', 9876543);
ht.add('Michael', 7654321);
ht.add('Ryan', 5643219);
ht.add('Paul', 8765432);
ht.add('Jeremy', 1234567)
ht.print();
console.log(ht.lookup('Jeremy'));
console.log(ht.lookup('Theran'));
console.log(ht.lookup('Paul'));