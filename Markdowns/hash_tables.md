# Exercises

## Short Answer

-   What is a hash table?

	A hash table is an organized set of data that uses a hash that stores values using a key.  That key is then giving an index within an array and be accessed from within that array.  Keys are unique so that each item can be accessed easily.

-   What is hashing?

	Hashing is taking a string and turning it into a numerical instance.  You may enter a name using a string and it given a unique key through the hashing function.  This is known as the hash code.

-   How does a hash table store data?

	Hash tables store data in arrays.  They use the indexes in order to access information.  The hash code will lead to the index within the array.

-   How are hash tables and objects different?

	An object holds data for one item.  A hash table can hold multiple objects.  For example, you might have one student and their information assigned to an object.  However, a whole school consists of many students.  So all of those student objects would be stored within a hash table.

-   Determine whether you would use a hash table or an object to store each of the following pieces of data:

*   A list of pets and their unique names.
    Hash Table - Since it is a list of data it would be best to store these pets in a hash table.

*   The name, age, and the birthday of your best friend.
    Object - As a single item it only necessary to have a single object for this item.

*   The name and location of every company in a given city.
    Hash Table - This complex data would require a hash table since it is always growing and changing.

*   All of the books checked out from a library by a particular individual.
    Hash Table - This would best be served by a hash table as it is a complex and changing list of data.

*   The primary and secondary phone numbers for a contact.
    Object - Since it is only for one contact it is only necessary to have a single object.

## Coding Exercises

<Build a system that allows a sales associate to enter a customer's name, address, and phone number into the system and look up customers using their phone numbers. Store this information in a hash table.

```js
//Simple hash function
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
	// Log whole database
	this.printNames = function() {
		console.log(database);
	};
	// Add new person to database
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
	// Search for person by phone number
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

//Test Cases

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
```

<Build a system that allows a store owner to track their store's inventory using a hash table for storage.

```js
// Simple hash function
const hash = (string, max) => {
	let hash = 0;
	for (let i = 0; i < string.length; i++) {
		hash += string.charCodeAt(i);
	}
	return hash % max;
};

const InventoryData = function() {
	let inventory = [];
	const inventoryMax = 10;
	// Prints whole inventory array
	this.checkInventory = function() {
		console.log(inventory);
	};
	// Add new product to inventory
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
	// Customer purchase of one item
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
	// Make order to a supplier if the inventory is low
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

//Test Cases

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
```

< Build a system that allows digital copies of newspapers to be entered and searched by publisher and publication date. Use hash tables to store the necessary data.

In the below function I found the directions unclear.  I built is as a system that adds items to the database based upon title.  It is then searchable by either the publisher or via the publisher date.  The search function is not optimized for large data sets as it uses nested for loops.  I know that this function should be refactored if it were to be used with a larger data set.

```js
// Simple hash function
const hash = (string, max) => {
	let hash = 0;
	for (let i = 0; i < string.length; i++) {
		hash += string.charCodeAt(i);
	}
	return hash % max;
};

const newsHash = function() {
	let newsData = [];
	let databaseMax = 10;
	// Print all article database
	this.printDatabase = function(database) {
		console.log(newsData);
	};
	// Add article to database via article title
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
	// Search by either publication date or by publisher
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

// Test Cases

newsSearch = new newsHash();

newsSearch.addArticle('Stranger News', 'New York Times', '01-09-18');
newsSearch.addArticle('Strangest article ever', 'New York Times', '01-03-18');
newsSearch.addArticle('Bad News', 'Washington Post', '01-04-18');
newsSearch.addArticle('Strange news', 'Washington Post', '01-05-18');
newsSearch.addArticle('More weird news', 'Chicago Tribune', '01-05-18');
newsSearch.articleSearch('01-05-18', 'date');
newsSearch.articleSearch('New York Times', 'publisher');

newsSearch.printDatabase();
```
