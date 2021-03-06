# Exercises

## Short Answer

* What are some pros and cons of using linked lists instead of arrays?

Linked lists have the advantage that they are easy for dynamic data sets that change often.  They are easily adaptable for data that needs many insertions and deletions.  They are also good for ordered information that needs to follow a certain pattern like alphabetical.  However they do have the disadvantage in searching compared to arrays.  In order to search though a linked list you need to start at the beginning and go through each item.  If it is at the end of a long data set the search time is not efficient.


* Come up with a real world example of a linked list.

Linked lists would be useful in data like a phone's contact app.  It can grow and change easily and does not necessarily need a fast search function, but can be scrolled through relatively easily.


## Programming Questions

> You may program the following questions in any language of your choice (JavaScript, pseudocode, etc.).

Before beginning to code, write out a plan explaining how to solve the question.

> The Linked List push function should take a value, create a node, and add it to the end of a list. Below is a push function for a singly linked list. However, there is something wrong with it. Find the bug and fix the code.

```js
LinkedList.prototype.push = function(element) {
 SET node = {
   value: element,
   next: null
 }

 IF the head node does not exist
   THEN SET head to node
 * WHILE there is a next node keep moving to next node in list// There should be a while loop in here to go through each of the nodes.
   * THEN SET current node to current.next //Change made here since it needs to point to the next node
   SET current.next to node
 }
}
```

Given an unsorted singly linked list, remove all duplicates from the linked list.
Example
Input: a -> c -> d -> d -> a
Output: a -> c -> d

* For this problem each node in the linked list will be looped over starting at the head and comparing it to the other nodes that are in the list.  If it found to be a duplicate that item is removed from the linked list.

```js
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
			console.log('No duplicates.  Empty or single item list');
			return;
		}

		let currentNode;
		let next;
		let nodes = {};

		currentNode = this.head;
		next = currentNode.next;
		nodes[currentNode.data] = true;

		while (next) {
			let data = next.data;
			if (nodes[data]) {
				currentNode.next = next.next;
			} else {
				nodes[data] = true;
				currentNode = next;
			}
			next = next.next;
		}
	};
}

// Remove duplicates in list test case
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

```

Given an unsorted singly linked list, reverse it.
Example
Input: a -> b -> c -> d
Output: d -> c -> b -> a

* In order to solve this I want to create a temporary array that holds the nodes.  The nodes will be pushed to the array one by one.  Then in order to create a new list the items will be popped off from the temporary array and placed into the new reversed list.

This works with the above animalList when added as the parameter for the reverseList function below.

```js
function reverseList(list) {
  //Check for empty or single item list
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
```