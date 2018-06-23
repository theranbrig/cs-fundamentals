# Exercises

## Short Answer

-   What is the main difference between a stack and a queue?

A stack is a last one in first one out data structure, while a queue is a first one in first one out. The stack arranges item in order as a sort of history where the most recent is first. A queue is a waiting list of items arranged by the order in which they came first.

-   What are the similarities between stacks and queues?

Stacks and queues both order items sequentially, meaning that they keep track of the order of items. They are based upon when they are inputted into the data structure. These types are good for keeping track of the ordered data that needs to be sequentially arranged.

-   Imagine you are an engineer tasked with implementing the UNDO and REDO options in a word processor such as Microsoft Word. Which data structure would you use for each option and why?

The undo and redo items would best be served by a stack data structure. This is because they need access to the most recent operations. The item would be retrieved from the first position within the data structure. The push and pop function would be used to order the items within the data structure.

## Programming Questions

You may program the following question in any language of your choice. Before you begin coding, write out a plan as to how you will solve the question.

1.  Given a string, reverse it using a stack. For example, the string "Bloc!" should be converted to "!colB".

```js
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
```

2.  Implement the delete functionality of a stack using one queue. Make a FIFO data structure mirror the functionality of a LIFO data structure.

> To delete an item, take all of the elements in the queue one at a time and put them at the end of the queue, except for the last one which should be deleted and returned.

```js
CLASS Stack
  FUNCTION pop(queue)
    CREATE newArray
    FOR each item from queue
      APPEND item to newArray using push method
    REMOVE last item from newArray using pop method
    RETURN last item
  END FUNCTION
END CLASS
```

3.  Fill in the methods for the following Queue class so that it will work as expected (FIFO).

```js
CLASS QUEUE
  CREATE array for queue

  FUNCTION enqueue(element)
    ADD each element to the end of the array using push method
  END FUNCTION

  FUNCTION dequeue
    REMOVE element from beginning of the array using unshift method
  END FUNCTION
END CLASS
```
