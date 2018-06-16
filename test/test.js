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

// a) Use an array input: ["Vivian", "Ava", "Josh", "Patrick", "Mike"]
// b) Insert a new person, "Mary" at the end of the line. In other words, you should insert Mary after Mike.
// c) Find a person in line named "Josh." This function should return the position of 2 in the array, (recall that arrays are 0-based).
// d) Find a person in line named "Emily." What should your function return if it does not find the item in the array?
// e) What if Ava wants to allow a friend, "Melissa", to cut in line in front of her? How would you code this so Melissa appears before Ava?
// f) If Patrick wants to leave the line, how would you delete him from the array?

let rideLine = ["Vivian", "Ava", "Josh", "Patrick", "Mike"];

const Line = function () {
  this.joinLine = function (line, name) {
    line.push(name)
    return `The new line order is ${line.join(', ')}`;
  }

  this.findPerson =function (line, name) {
    for (var i = 0; i < line.length; i++) {
      if(line[i] === name) {
        return `${name} is in position ${line.indexOf(name)} in the line.`
      } 
    } return `${name} is not in the line.`
  }

  this.cutLine = function (line, holder, cutter) {
    line.splice(line.indexOf(holder) + 1, 0, cutter);
    return `The new line order is ${line.join(', ')}`;
  }

  this.leave = function (line, name) {
    line.splice(line.indexOf(name), 1);
    return `The new line order is ${line.join(', ')}`
  }
}

let blackWidowLine = new Line()

console.log(blackWidowLine.joinLine(rideLine, 'Mary'));
console.log(blackWidowLine.findPerson(rideLine, 'Josh'));
console.log(blackWidowLine.cutLine(rideLine, 'Josh', 'Mike'));
console.log(blackWidowLine.leave(rideLine, 'Josh'));


let sprite = 1;


const Inventory = function(soda) {

  this.checkInventory = function(inventory) {
    return `There are ${inventory} cans of ${soda}`
  }

  this.customerOrder = function (inventory, orderNumber) {
    if (inventory >= orderNumber) {
      return `There are ${inventory -= orderNumber} cans of ${soda}`;
    } else {
      return `Sorry, we are do not have enough ${soda}`
    }
  }

  this.checkOrderProduct = function (inventory) {
    const reorderNumber = 8;
    if (inventory <= 3) {
      return `There are ${inventory += reorderNumber} cans of ${soda}`;
    } else {
      return checkInventory(inventory)
    }
  }
  
}

let spriteInventory = new Inventory('Sprite');

console.log(spriteInventory.checkInventory(sprite));
console.log(spriteInventory.customerOrder(sprite, 8));
console.log(spriteInventory.checkOrderProduct(sprite));
