// ────────────────────────────────────────────────────────────────────────────────
// INTRO DATA STRUCTURES PRACTICE
// ────────────────────────────────────────────────────────────────────────────────

// Square Given an array of integers, find out whether the sum of the integers is a perfect square. If it is a perfect square, return the square root, otherwise return the sum.

// Example:
// [10,1,4,6,1,1,2] returns 5 because the square root of 25 is 5.
// [1,1] returns 2 because 2 is not a perfect square.
// The square root of 2 is approximately 1.414213562373095.

function checkSquare(arr) {
	let arrayTotal = arr.reduce((a, b) => a + b);
	let squareRoot = Math.sqrt(arrayTotal);
	if (squareRoot % 1 === 0) {
		return squareRoot;
	} else {
		return arrayTotal;
	}
}

squareArray1 = [10, 1, 4, 6, 1, 1, 2];
squareArray2 = [1, 1];
squareArray3 = [1, 2, 3, 4, 5];

console.log(checkSquare(squareArray1)); // returns 5
console.log(checkSquare(squareArray2)); // returns 2
console.log(checkSquare(squareArray3)); // returns 15

// Duplicate Given an array of integers, find out whether the array contains any duplicate elements. The function should return true if any value appears at least twice in the array, and false if every element is distinct.

function findDuplicates(array) {
	const sortedArray = array.sort((a, b) => a - b);
	console.log(sortedArray);
	let results = [];
	for (let i = 0; i < sortedArray.length; i++) {
		if (sortedArray[i] === sortedArray[i + 1]) {
			results.push(sortedArray[i]);
		}
	}
	if (results.length > 0) {
		return true;
	} else {
		return false;
	}
}

console.log(findDuplicates([1, 1, 1]));
console.log(findDuplicates([1, 1, 2]));
console.log(findDuplicates([1, 2, 3, 6, 4, 2]));
console.log(findDuplicates([1, 2, 100, 500, 1000, 3, 4]));

// Extra Credit

// Anagram An anagram is a word, phrase, or name formed by rearranging the letters of another word. For example, spar can be formed from rasp. Given two strings, stringOne and stringTwo, determine if stringOne is an anagram of stringTwo. Assume that the strings contain only lowercase letters and do not worry about case-sensitivity. Hint: Your first task will be to convert the strings to arrays.

function findAnagram(string1, string2) {
	let word1Array = [...string1];
	let word2Array = [...string2];
	let counter = 0;
	word1Array.forEach(element => {
		if (word2Array.indexOf(element) !== -1) {
			counter++;
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

console.log(findAnagram('spar', 'rasp'));

// Hash Functions

// const hash = (string, max) => {
//   let hash = 0;
//   for (let i = 0; i < string.length; i++) {
//     hash += string.charCodeAt(i);
//   }
//   return hash % max;
// }

// const HashTable = function () {
//   let storage = [];
//   const storageLimit = 4;

//   this.print = function() {
//     console.log(storage);
//   };

//   this.add = function(key, value) {
//     let index = hash(key, storageLimit)
//     if (storage[index] === undefined) {
//       storage[index] = [
//         [key, value]
//       ];
//     } else {
//       let inserted = false;
//       for (let i = 0; i < storage[index].length; i++) {
//         if (storage[index][i][0] === key) {
//           storage[index][i][1] === value;
//           inserted = true;
//         }
//       }
//       if (inserted === false) {
//         storage[index].push([key, value])
//       }
//     }
//   };

//   this.remove = function(key) {
//     let index = hash(key, storageLimit)
//     if (storage[index].length === 1 && storage[index][0][0] === key) {
//       delete storage[index];
//     } else {
//       for (let i = 0; i < storage[index]; i++) {
//         if(storage[index][i][0] === key) {
//           delete storage[index][i];
//         }
//       }
//     }
//   };

//   this.lookup = function(key) {
//   let index = hash(key, storageLimit)
//     if (storage[index] === undefined) {
//       return undefined;
//     } else {
//       for (let i = 0; i < storage[index].length; i++) {
//         if(storage[index][i][0] === key) {
//           return storage[index][i][1];
//         }
//       }
//     }
//   };
// }

// let ht = new HashTable();

// ht.add('Theran', 9876543);
// ht.add('Michael', 7654321);
// ht.add('Ryan', 5643219);
// ht.add('Paul', 8765432);
// ht.add('Jeremy', 1234567)
// ht.print();
// console.log(ht.lookup('Jeremy'));
// console.log(ht.lookup('Theran'));
// console.log(ht.lookup('Paul'));

// a) Use an array input: ["Vivian", "Ava", "Josh", "Patrick", "Mike"]
// b) Insert a new person, "Mary" at the end of the line. In other words, you should insert Mary after Mike.
// c) Find a person in line named "Josh." This function should return the position of 2 in the array, (recall that arrays are 0-based).
// d) Find a person in line named "Emily." What should your function return if it does not find the item in the array?
// e) What if Ava wants to allow a friend, "Melissa", to cut in line in front of her? How would you code this so Melissa appears before Ava?
// f) If Patrick wants to leave the line, how would you delete him from the array?

// let rideLine = ['Vivian', 'Ava', 'Josh', 'Patrick', 'Mike'];

// const Line = function() {
// 	this.joinLine = function(line, name) {
// 		line.push(name);
// 		return `The new line order is ${line.join(', ')}`;
// 	};

// 	this.findPerson = function(line, name) {
// 		for (var i = 0; i < line.length; i++) {
// 			if (line[i] === name) {
// 				return `${name} is in position ${line.indexOf(name)} in the line.`;
// 			}
// 		}
// 		return `${name} is not in the line.`;
// 	};

// 	this.cutLine = function(line, holder, cutter) {
// 		line.splice(line.indexOf(holder) + 1, 0, cutter);
// 		return `The new line order is ${line.join(', ')}`;
// 	};

// 	this.leave = function(line, name) {
// 		line.splice(line.indexOf(name), 1);
// 		return `The new line order is ${line.join(', ')}`;
// 	};
// };

// let blackWidowLine = new Line();

// console.log(blackWidowLine.joinLine(rideLine, 'Mary'));
// console.log(blackWidowLine.findPerson(rideLine, 'Josh'));
// console.log(blackWidowLine.cutLine(rideLine, 'Josh', 'Mike'));
// console.log(blackWidowLine.leave(rideLine, 'Josh'));

// const newInventory = function() {
// 	this.checkInventory = function(inventory) {
// 		inventory.forEach(product => {
// 			console.log(`${product.type}: ${product.quantity}`);
// 		});
// 	};

// 	this.customerOrder = function(inventory, productOrdered, numberOrdered) {
// 		for (let i = 0; i < inventory.length; i++) {
// 			if (productOrdered === inventory[i].type && numberOrdered <= inventory[i].quantity) {
// 				console.log(`Order = ${inventory[i].type}: ${numberOrdered}`);
// 				inventory[i].quantity -= numberOrdered;
// 			} else if (productOrdered === inventory[i].type && numberOrdered > inventory[i].quantity) {
// 				console.log(
// 					`Invalid Order: Order = ${inventory[i].type}: ${numberOrdered}, Inventory: ${inventory[i].type}: ${
// 						inventory[i].quantity
// 					}`
// 				);
// 			}
// 		}
// 		this.checkInventory(inventory);
// 	};

// 	this.checkProducts = function(inventory) {
// 		let productOrder = 5;
// 		let newTotal = 0;
// 		inventory.forEach(product => {
// 			if (product.quantity <= 2) {
// 				newTotal = product.quantity + productOrder;
// 				console.log(
// 					`Order for ${product.type}. Current Inventory: ${
// 						product.quantity
// 					}, Ordered: ${productOrder}, New Inventory: ${newTotal}`
// 				);
// 				product.quantity += productOrder;
// 			} else {
// 				console.log(`No order for ${product.type}. Current Inventory: ${product.quantity}`);
// 			}
// 		});
// 		this.checkInventory(inventory);
// 	};
// };

// let storeInventory = [
// 	{
// 		type: 'cola',
// 		quantity: 5,
// 	},
// 	{
// 		type: 'lemon lime',
// 		quantity: 5,
// 	},
// 	{
// 		type: 'ginger ale',
// 		quantity: 5,
// 	},
// 	{
// 		type: 'root beer',
// 		quantity: 5,
// 	},
// 	{
// 		type: 'orange',
// 		quantity: 5,
// 	},
// ];

// let tradersInventory = new newInventory();

// tradersInventory.checkInventory(storeInventory);
// tradersInventory.customerOrder(storeInventory, 'cola', 4);
// tradersInventory.customerOrder(storeInventory, 'orange', 2);
// tradersInventory.customerOrder(storeInventory, 'root beer', 3);
// tradersInventory.customerOrder(storeInventory, 'root beer', 3);
// tradersInventory.checkProducts(storeInventory);

// ────────────────────────────────────────────────────────────────────────────────
// HASH TABLE PRACTICE
// ────────────────────────────────────────────────────────────────────────────────

// Build a system that allows a sales associate to enter a customer's name, address, and phone number into the system and look up customers using their phone numbers. Store this information in a hash table.

const hash = (string, max) => {
	let hash = 0;
	for (let i = 0; i < string.length; i++) {
		hash += string.charCodeAt(i);
	}
	return hash % max;
};

const CustomerData = function() {
	let database = [];
	const databaseLimit = 10;

	this.printNames = function() {
		console.log(database);
	};

	this.addPerson = function(name, address, phoneNumber) {
		let index = hash(phoneNumber, databaseLimit);
		if (database[index] === undefined) {
			database[index] = [
				{
					name,
					address,
					phoneNumber,
				},
			];
		} else {
			let inserted = false;
			for (let i = 0; i < database[index].length; i++) {
				if (database[index][i].phoneNumber === phoneNumber) {
					inserted = true;
				}
			}
			if (inserted === false) {
				database[index].push({
					name,
					address,
					phoneNumber,
				});
			}
		}
	};

	this.findPerson = function(phoneNumber) {
		let index = hash(phoneNumber, databaseLimit);
		if (database[index] === undefined) {
			console.log(`Number not found`);
		} else {
			for (let i = 0; i < database[index].length; i++) {
				if (database[index][i].phoneNumber === phoneNumber) {
					console.log(database[index][i]);
				}
			}
		}
	};
};

let customerHash = new CustomerData();

customerHash.addPerson('Bill', 'Main Street', '8675305');
customerHash.addPerson('Theran', '1st Street', '8675309');
customerHash.addPerson('James', '2nd Street', '7364825');
customerHash.addPerson('Steve', '3rd Street', '3892503');
customerHash.addPerson('Cooper', '4th Street', '2050329');
customerHash.addPerson('Dennis', '7th Street', '1039253');
customerHash.addPerson('Paul', '8th Street', '3049640');
customerHash.addPerson('Ryan', '9th Street', '0304920');
customerHash.addPerson('Jeremy', '10th Street', '0304922');
customerHash.addPerson('Michael', '11th Street', '0304921');
customerHash.addPerson('Brent', '12th Street', '3463640');
customerHash.printNames();
customerHash.findPerson('3463640');
customerHash.findPerson('0304922');

// Build a system that allows a store owner to track their store's inventory using a hash table for storage.

const InventoryData = function() {
	let inventory = [];
	const inventoryMax = 10;

	this.checkInventory = function() {
		console.log(inventory);
	};

	this.addItems = function(product, quantity) {
		const index = hash(product, inventoryMax);
		if (inventory[index] === undefined) {
			inventory[index] = [
				{
					product: product,
					quantity: quantity,
				},
			];
		} else {
			let inserted = false;
			for (let i = 0; i < inventory[index].length; i++) {
				if (inventory[index][i].product === product) {
					inserted = true;
				}
				if (inserted === false) {
					inventory[index].push({
						product: product,
						quantity: quantity,
					});
				}
			}
		}
		this.checkInventory(inventory);
	};

	this.customerPurchase = function(product) {
		const index = hash(product, inventoryMax);
		if (inventory[index] === undefined) {
			console.log(`Product not found`);
		} else {
			for (let i = 0; i < inventory[index].length; i++) {
				if (inventory[index][i].product === product) {
					if (inventory[index][i].quantity > 0) {
						inventory[index][i].quantity--;
						console.log(inventory[index][i]);
					} else {
						console.log(`${inventory[index][i].product} is sold out.`);
					}
				}
			}
		}
	};

	this.supplierOrder = function(product, orderQuantity) {
		let index = hash(product, inventoryMax);
		if (inventory[index] === undefined) {
			console.log(`Product not found`);
		} else {
			for (let i = 0; i < inventory[index].length; i++) {
				if (inventory[index][i].quantity <= 3) {
					inventory[index][i].quantity += orderQuantity;
					console.log(`Supplier order of ${inventory[index][i].product} made.`);
				} else {
					console.log(`You have enough ${inventory[index][i].product}.`);
				}
			}
		}
	};
};

let storeInventory = new InventoryData();

storeInventory.addItems('milk', 3);
storeInventory.addItems('eggs', 3);
storeInventory.addItems('carrots', 2);
storeInventory.addItems('chicken', 4);
storeInventory.addItems('peppers', 3);
storeInventory.addItems('onions', 6);
storeInventory.checkInventory();
storeInventory.customerPurchase('milk');
storeInventory.customerPurchase('milk');
storeInventory.customerPurchase('milk');
storeInventory.customerPurchase('milk');
storeInventory.customerPurchase('milk');
storeInventory.supplierOrder('onions', 5);
storeInventory.checkInventory();

// Build a system that allows digital copies of newspapers to be entered and searched by publisher and publication date. Use hash tables to store the necessary data.

const newsHash = function() {
	let newsData = [];
	let databaseMax = 10;

	this.printDatabase = function(database) {
		console.log(newsData);
	};

	this.addArticle = function(articleTitle, publisher, publicationDate) {
		let index = hash(articleTitle, databaseMax);

		if (newsData[index] === undefined) {
			newsData[index] = [
				{
					publisher: publisher,
					articleTitle: articleTitle,
					publicationDate: publicationDate,
				},
			];
		} else {
			let inserted = false;
			for (let i = 0; i < newsData[index].length; i++) {
				if (
					newsData[index][i].articleTitle === articleTitle &&
					newsData[index][i].publicationDate === publicationDate
				) {
					inserted = true;
				}
				if (inserted === false) {
					newsData[index].push({
						publisher: publisher,
						articleTitle: articleTitle,
						publicationDate: publicationDate,
					});
				}
			}
		}
	};

	this.articleSearch = function(search, type) {
		if (type === 'date') {
			newsData.forEach(index => {
				index.forEach(article => {
					if (article.publicationDate === search) {
						console.log(article);
					}
				});
			});
		}
		if (type === 'publisher') {
			newsData.forEach(index => {
				index.forEach(article => {
					if (article.publisher === search) {
						console.log(article);
					}
				});
			});
		}
	};
};

newsSearch = new newsHash();

newsSearch.addArticle('Stranger News', 'New York Times', '01-09-18');
newsSearch.addArticle('Strangest article ever', 'New York Times', '01-03-18');
newsSearch.addArticle('Bad News', 'Washington Post', '01-04-18');
newsSearch.addArticle('Strange news', 'Washington Post', '01-05-18');
newsSearch.addArticle('More weird news', 'Chicago Tribune', '01-05-18');
newsSearch.articleSearch('01-05-18', 'date');
newsSearch.articleSearch('New York Times', 'publisher');

newsSearch.printDatabase();

// Simple but unreliable function to create string hash by Sergey.Shuchkin [t] gmail.com
// alert( strhash('http://www.w3schools.com/js/default.asp') ); // 6mn6tf7st333r2q4o134o58888888888

// var hashNew = function(s) {
// 	/* Simple hash function. */
// 	var a = 1,
// 		c = 0,
// 		h,
// 		o;
// 	if (s) {
// 		a = 0;
// 		/*jshint plusplus:false bitwise:false*/
// 		for (h = s.length - 1; h >= 0; h--) {
// 			o = s.charCodeAt(h);
// 			a = ((a << 6) & 268435455) + o + (o << 14);
// 			c = a & 266338304;
// 			a = c !== 0 ? a ^ (c >> 21) : a;
// 		}
// 	}
// 	return String(a);
// };

// console.log(hashNew('Theran Daniel Brigowatz'));

// ────────────────────────────────────────────────────────────────────────────────
// STACKS AND QUEUES PRACTICE
// ────────────────────────────────────────────────────────────────────────────────

let word = 'racecar';
let word1 = 'bob';
let word2 = 'amanaplanacanalpanama';
let word3 = 'Theran';

const checkPalindrome = word => {
	let rWord = '';
	let wordArray = [...word];
	for (let i = 0; i < word.length; i++) {
		rWord += wordArray.pop();
	}
	if (rWord === word) {
		console.log(`${word} is a palindrome.`);
	} else {
		console.log(`${word} is not a palindrome`);
	}
};

checkPalindrome(word);
checkPalindrome(word1);
checkPalindrome(word2);
checkPalindrome(word3);

//Reverse a word function
function reverseWord(word) {
	let reversedWord = '';
	let wordArray = [];
	// For the purposes of this exercise I used the push method with a for loop to show the understanding of a stack.  However instead of the first for loop, the ES6 spread operator could be used like in the next line to put the string into the array.
	// let wordArray = [...word];
	for (let i = 0; i < word.length; i++) {
		wordArray.push(word[i]);
	}
	for (var i = 0; i < word.length; i++) {
		reversedWord += wordArray.pop();
	}
	console.log(reversedWord);
}

//Test Cases
reverseWord('word');
reverseWord('Bloc!');
reverseWord('pizza');

// ────────────────────────────────────────────────────────────────────────────────
// LINKED LIST PRACTICE
// ────────────────────────────────────────────────────────────────────────────────

// function LinkedList() {
// 	let length = 0;
// 	let head = null;

// 	let Node = function(data) {
// 		this.data = data;
// 		this.next = null;
// 	};

// 	this.size = function() {
// 		return length;
// 	};

// 	this.head = function() {
// 		return head;
// 	};

// 	this.add = function(data) {
// 		let newNode = new Node(data);
// 		if (head === null) {
// 			head = newNode;
// 		} else {
// 			let currentNode = head;
// 			while (currentNode.next) {
// 				currentNode = currentNode.next;
// 			}
// 			currentNode.next = newNode;
// 		}
// 		length++;
// 	};

// 	this.remove = function(data) {
// 		let currentNode = head;
// 		let previousNode;
// 		if (currentNode.data === data) {
// 			head = currentNode.next;
// 		} else {
// 			while (currentNode.data !== data) {
// 				previousNode = currentNode;
// 				currentNode = currentNode.next;
// 			}
// 			previousNode.next = currentNode.next;
// 		}
// 		length--;
// 	};

// 	this.isEmpty = function() {
// 		return length === 0;
// 	};

// 	this.indexOf = function(data) {
// 		let currentNode = head;
// 		let index = -1;
// 		while (currentNode) {
// 			index++;
// 			if (currentNode.data === data) {
// 				return index;
// 			}
// 			return -1;
// 		}
// 	};

// 	this.elementAt = function(index) {
// 		let currentNode = head;
// 		let count = 0;
// 		while (count < index) {
// 			count++;
// 			currentNode = currentNode.next;
// 		}
// 		return currentNode.element;
// 	};

// 	this.addAt = function(index, element) {
// 		let node = new Node(element);

// 		let currentNode = head;
// 		let previousNode;
// 		let currentIndex = 0;

// 		if (index > length) {
// 			return false;
// 		}

// 		if (index === 0) {
// 			node.next = currentNode;
// 			head = node;
// 		} else {
// 			while (currentIndex < index) {
// 				currentIndex++;
// 				previousNode = currentNode;
// 				currentNode = currentNode.next;
// 			}
// 			node.next = currentNode;
// 			previousNode.next = node;
// 		}
// 		length++;
// 	};

// 	this.removeAt = function(index) {
// 		let currentNode = head;
// 		let previousNode;
// 		let currentIndex = 0;

// 		if (index < 0 || index >= length) {
// 			return null;
// 		}

// 		if (index === 0) {
// 			head = currentNode.next;
// 		} else {
// 			while (currentIndex < index) {
// 				currentIndex++;
// 				previousNode = currentNode;
// 				currentNode = currentNode.next;
// 			}
// 			previousNode.next = currentNode.next;
// 		}
// 		length--;
// 		return currentNode.element;
// 	};

// 	this.removeDuplicates = function() {
// 		// Empty or a single element Linked List
// 		if (!this.head || !this.head.next) {
// 			console.log('No duplicates were found. Empty or a single element Linked List.');
// 			return;
// 		}

// 		var current;
// 		var next;
// 		var nodes = {};

// 		current = this.head;
// 		next = current.next;
// 		nodes[current.data] = true;

// 		while (next) {
// 			var data = next.data;
// 			if (nodes[data]) {
// 				current.next = next.next;
// 			} else {
// 				nodes[data] = true;
// 				current = next;
// 			}
// 			next = next.next;
// 		}
// 	};
// }

// var list = new LinkedList();
// list.add(5);
// console.log(list);
// console.log(list.size());

function LinkedList() {
	this.insertNode = function(value) {
		let node = {
			data: value,
			next: null,
		};

		if (!this.head) {
			this.head = node;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
	};

	this.removeDuplicates = function() {
		// Empty or a single element Linked List
		if (!this.head || !this.head.next) {
			console.log('No duplicates were found. Empty or a single element Linked List.');
			return;
		}

		let currentNode;
		let next;
		let nodes = {};

		currentNode = this.head;
		next = currentNode.next;
		nodes[currentNode.data] = true;

		while (next) {
			var data = next.data;
			if (nodes[data]) {
				currentNode.next = next.next;
			} else {
				nodes[data] = true;
				currentNode = next;
			}
			next = next.next;
		}
	};

	this.reverse = function(head) {
		new_head = head;
		old_head = head.next;
		new_head.next = null; // Terminate cycle.
		while (old_head) {
			current = old_head;
			old_head = old_head.next;
			current.next = new_head;
			new_head = current;
		}
		return new_head;
	};
}

// Base case : No duplicates
var L1 = new LinkedList();
L1.insertNode(5);

L1.removeDuplicates();
console.log(L1);

// Two nodes with duplicates
var L2 = new LinkedList();
L2.insertNode('kitten');
L2.insertNode('kitten');

L2.removeDuplicates();
console.log(L2);

// Two nodes without duplicates
var L3 = new LinkedList();
L3.insertNode(5);
L3.insertNode(6);

L3.removeDuplicates();
console.log(L3);

function reverseList(list) {
	if (!list.head || !list.head.next) return list;

	let nodes = [];
	let current = list.head;
	while (current) {
		nodes.push(current);
		current = current.next;
	}

	let reversedList = new LinkedList();
	reversedList.head = nodes.pop();
	current = reversedList.head;

	let node = nodes.pop();
	while (node) {
		node.next = null;
		current.next = node;
		current = current.next;
		node = nodes.pop();
	}
	return reversedList;
}

// Remove duplicates in List
const animalList = new LinkedList();
animalList.insertNode('kitten');
animalList.insertNode('duck');
animalList.insertNode('puppy');
animalList.insertNode('hamster');
animalList.insertNode('puppy');
animalList.insertNode('hamster');
animalList.insertNode('hamster');
animalList.insertNode('duck');
animalList.removeDuplicates();
console.log(animalList); // Output is kitten, duck, puppy, hamster
// console.log(reverseList(animalList));

// Remove multiple duplicates from middle
var L5 = new LinkedList();
var testData = [5, 6, 7, 5, 5, 8];
testData.forEach(el => L5.insertNode(el));

L5.removeDuplicates();
console.log(L5);

// ────────────────────────────────────────────────────────────────────────────────
// TREES AND GRAPH PRACTICE
// ────────────────────────────────────────────────────────────────────────────────

function Node(data) {
	this.data = data;
	this.left = null;
	this.right = null;
}

function BinarySearchTree() {
	this.root = null;

	this.addNode = function(data) {
		let root = this.root;
		if (!root) {
			this.root = new Node(data);
		}

		let currentNode = root;
		let newNode = new Node(data);

		while (currentNode) {
			if (data < currentNode.data) {
				if (!currentNode.left) {
					currentNode.left = newNode;
					break;
				} else {
					currentNode = currentNode.left;
				}
			} else {
				if (!currentNode.right) {
					currentNode.right = newNode;
					break;
				} else {
					currentNode = currentNode.right;
				}
			}
		}
	};

	this.contains = function(data) {
		let current = this.root;
		while (current) {
			if (data === current.data) {
				return true;
			}
			current = data < current.data ? current.left : current.right;
		}
		return false;
	};
}

function commonAncestor(root, n1, n2) {
	if (!root) return;
	let val = root.data;
	if (n1 < val && n2 < val) {
		return commonAncestor(root.left, n1, n2);
	}
	if (n1 > val && n2 > val) {
		return commonAncestor(root.right, n1, n2);
	}
	console.log('lowest common ancestor value: ', val);
	return root;
}

function countDistance(root, data) {
	let count = 0;
	while (root) {
		if (data === root.data) {
			return count;
		}
		root = data < root.data ? root.left : root.right;
		count++;
	}
	return false;
}

function findTotalDistance(mainNode, num1, num2) {
	const rootNode = commonAncestor(mainNode, num1, num2);
	const node1Distance = countDistance(rootNode, num1);
	const node2Distance = countDistance(rootNode, num2);
	return node1Distance + node2Distance;
}

let bst = new BinarySearchTree();

bst.addNode(8);
bst.addNode(3);
bst.addNode(1);
bst.addNode(6);
bst.addNode(4);
bst.addNode(7);
bst.addNode(10);
bst.addNode(14);
bst.addNode(13);

console.log(bst);
console.log(bst.contains(6));
console.log(findTotalDistance(bst.root, 4, 10));
console.log(findTotalDistance(bst.root, 10, 8));

// ────────────────────────────────────────────────────────────────────────────────
// Recursion Practice
// ────────────────────────────────────────────────────────────────────────────────

// Factorial

function factorial(num) {
	if (num === 1) {
		return 1;
	}
	return num * factorial(num - 1);
}

console.log(factorial(3));

function reverseString(string) {
	if (string.length <= 1) {
		return string;
	}
	return reverseString(string.substr(1)) + string[0];
}

console.log(reverseString('Hello'));

var fibonacci = function(n) {
	if (n === 0) return 0;
	if (n === 1) return 1;
	return fibonacci(n - 1) + fibonacci(n - 2);
};

function maximum(array) {
	nums = [...array];
	if (nums.length == 1) {
		return nums[0];
	}
	if (nums[0] < nums[1]) {
		nums.splice(0, 1);
	} else {
		nums.splice(1, 1);
	}
	return maximum(nums);
}

console.log(maximum([0, 3, 4, 5, 2, 18, -1, 100, 99, 101, 1000, 4, 3]));

function countItems(array) {
	if (array.length === 0) {
		return 0;
	}
	return countItems(array.slice(0, -1)) + 1;
}

console.log(countItems([0, 1, 2, 3, 4]));

function checkHouses(array) {
	let newArray = [...array];
	if (array.length === 0) {
		return 0;
	}
	console.log(`${array[0]} house visited.`);
	newArray.shift();
	console.log(`${newArray.length} houses left to visit.`);
	return checkHouses(newArray);
}

checkHouses(['Jones', 'Farmer', 'Billings', 'Smith']);

function reverseString(string) {
	if (string.length <= 1) {
		return string;
	}
	return reverseString(string.substr(1)) + string[0];
}

function isPalindrome(string) {
	let reverse = reverseString(string);
	if (reverse.toLowerCase() === string.toLowerCase()) {
		return true;
	} else {
		return false;
	}
}

console.log(isPalindrome('Bob'));

// ────────────────────────────────────────────────────────────────────────────────
// Search Algorithms Basics
// ────────────────────────────────────────────────────────────────────────────────

// Basic Binary Search

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function binarySearch(collection, value) {
	let index = null;
	let low = 0;
	let high = collection.length - 1;
	let mid = Math.floor((low + high) / 2);
	while (collection[mid] !== value && low <= high) {
		if (collection[mid] > value) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
		mid = Math.floor((low + high) / 2);
	}
	index = collection[mid] !== value ? -1 : mid;
	return index !== -1 ? `${value} is found at ${mid} index of the array` : `${value} not found`;
}

console.log(binarySearch(primes, 31));

const animalDictionary = [
	'albatross',
	'alligator',
	'bear',
	'cat',
	'chinchilla',
	'dog',
	'elephant',
	'fox',
	'goose',
	'lion',
	'moose',
	'snake',
	'tiger',
	'unicorn',
	'zebra',
];

function linearDictionarySearch(dictionary, word) {
	for (var i = 0; i < dictionary.length; i++) {
		if (dictionary[i] === word) {
			return `${word} found at index ${[i]} of the dictionary`;
			break;
		}
	}
	return `${word} not found`;
}

console.log(linearDictionarySearch(animalDictionary, 'albatross'));

function binaryDictionarySearch(dictionary, word) {
	let index = null;
	let low = 0;
	let high = dictionary.length - 1;
	let mid = Math.floor((low + high) / 2);
	while (dictionary[mid] !== word && low <= high) {
		if (dictionary[mid] > word) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
		mid = Math.floor((low + high) / 2);
	}
	index = dictionary[mid] !== word ? -1 : mid;
	return index !== -1 ? `${word} is found at index ${mid} of the dictionary` : `${word} not found`;
}

console.log(binaryDictionarySearch(animalDictionary, 'lion'));

const bigTank = [
	'guppy1',
	'shark',
	'blue whale',
	'orca',
	'lion fish',
	'neon',
	'clown fish',
	'guppy2',
	'white-spotted goldfish',
	'dory',
	'nemo',
	'puffer fish',
];

function fishFinder(tank, name) {
	for (var i = 0; i < tank.length; i++) {
		if (tank[i] === name) {
			return `${name} is found at index ${[i]} of the fish tank.`;
		}
	}
	`${name} not found.`;
}

console.log(fishFinder(bigTank, 'white-spotted goldfish'));
