# Exercises

-   Define and compare recursion and iteration.

Recursion is where a function calls itself until a set criteria, or base case becomes true. Iteration however uses loops to run a processes for certain conditions. Although recursive algorithms can often be slower and have limitations, they can be easier to implement than iterative functions in certain cases. This is mainly the case for problems that have patterns to be followed or when there are many sub problems.

-   Name five algorithms that are commonly implemented by recursion.

Factorial, Fibonacci, breadth first search, depth first search, binary searches

-   When should you use recursion, and when should you avoid recursion? Give examples for each.

Recursion is often used when there is an unknown number of steps in the algorithm. For example when searching through a binary tree. You may not know how many nodes, or the location of the nodes. Therefore a recursive function works well because it will search until the base case (in this case the node) is found. However in certain cases it may be better to simply loop through the data. This would call for an iterative function. When a simple array is used to find the largest number it is less consuming to simply compare the two numbers and see which is larger, returning the larger of the two. This means that the function is only called once.

-   Compare the recursive and iterative solutions to the three algorithms from the checkpoint (Factorial, Maximum, and Fibonacci). What is similar, and what is different?

The similarities in all of these is that they contain base cases that lead to their end. These stop the functions. In addition they all return the function within the function, making them recursive. There are slight differences within these though. They also work backwards through the data until they reach the base case. While the Fibonacci and Factorial are basically the same in their structure, the Maximum needs to compare data with an extra if statement. This checks which number is larger. It keeps the larger number until the end and then returns it.

## Coding Exercises

-   Given a multi-dimensional collection (such as an array) where the number of dimensions is unknown, write a recursive algorithm to count the number of items in the entire collection.

```js
function countItems(array) {
	if (array.length === 0) {
		return 0;
	}
	return countItems(array.slice(0, -1)) + 1;
}

console.log(countItems([0, 1, 2, 3, 4]));
```

-   A palindrome is a word or phrase whose spelling is the same either direction (e.g., racecar). Write a recursive algorithm to determine if a given word or phrase is a palindrome.

```js
function reverseString(string) {
	if (string.length <= 1) {
		return string;
	}
	return reverseString(string.substr(1)) + string[0];
}

function isPalindrome(string) {
	let reverse = reverseString(string);
	console.log(reverse);
	if (reverse.toLowerCase() === string.toLowerCase()) {
		return true;
	} else {
		return false;
	}
}

console.log(isPalindrome('Bob'));
```

-   Laura and Xander are going door-to-door around their block looking for their lost cat. Write a recursive algorithm showing one way they can visit every house on their block exactly once.

```js
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
```
