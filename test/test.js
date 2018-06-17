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



const newInventory = function() {

  this.checkInventory = function(inventory) {
    inventory.forEach(product => {
      console.log(`${product.type}: ${product.quantity}`);
    });
  }

  this.customerOrder = function (inventory, productOrdered, numberOrdered) {
    for (let i = 0; i < inventory.length; i++) {
      if(productOrdered === inventory[i].type && numberOrdered <= inventory[i].quantity) {
        console.log(`Order = ${inventory[i].type}: ${numberOrdered}`)
        inventory[i].quantity -= numberOrdered
      } else if (productOrdered === inventory[i].type && numberOrdered > inventory[i].quantity) {
        console.log(`Invalid Order: Order = ${inventory[i].type}: ${numberOrdered}, Inventory: ${inventory[i].type}: ${inventory[i].quantity}`)
      } 
    } this.checkInventory(inventory)
  }

  this.checkProducts = function (inventory) {
    let productOrder = 5;
    let newTotal = 0
    inventory.forEach(product => {
      if (product.quantity <= 2) {
        newTotal = product.quantity + productOrder
        console.log(`Order for ${product.type}. Current Inventory: ${product.quantity}, Ordered: ${productOrder}, New Inventory: ${newTotal}`);
        product.quantity += productOrder
      } else {
        console.log(`No order for ${product.type}. Current Inventory: ${product.quantity}`)
      }
    }); this.checkInventory(inventory)
  } 
}

let storeInventory = [
  {
    type: 'cola',
    quantity: 5
  },
  {
    type: 'lemon lime',
    quantity: 5
  },
  {
    type: 'ginger ale',
    quantity: 5
  },
  {
    type: 'root beer',
    quantity: 5
  },
  {
    type: 'orange',
    quantity: 5
  }
]

let tradersInventory = new newInventory();

tradersInventory.checkInventory(storeInventory)
tradersInventory.customerOrder(storeInventory, 'cola', 4)
tradersInventory.customerOrder(storeInventory, 'orange', 2)
tradersInventory.customerOrder(storeInventory, 'root beer', 3)
tradersInventory.customerOrder(storeInventory, 'root beer', 3)
tradersInventory.checkProducts(storeInventory)
