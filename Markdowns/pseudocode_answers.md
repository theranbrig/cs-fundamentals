# Exercises

Create a file named pseudocode_answers.txt and answer these questions in it:

## Short Answer

> Why do programmers use pseudocode?

Pseudocode is a way for programmers to think of complex problems and the solutions in plain English (or native tongue) without having to program out the full logic and syntax.  It allows one to work out the structure of the program and plan solutions before actually diving into the code itself.  It is essentially brainstorming for algorithms and other complex problem solving.

> If you run pseudocode on your computer what would happen?

It will not run since it is written in plain English.  It should be used to plan and then it can be written out in any other programming language.

## Programming Assignment

> Write the following algorithms in pseudocode:

Create a function that takes two numbers and prints out the greater number.

```js
FUNCTION findGreaterNumber()
  INPUT first number
  INPUT second number
  IF first number is greater than second number
    PRINT first number
  ELSE
    PRINT second number
END FUNCTION
```

Create a function that prints out the numbers from 1 to 100.

```js
FUNCTION printNumbers()
  INPUT number as 0
  WHILE number is less that 100
    PRINT number
    INCREMENT number
END FUNCTION
```

Create a function that searches for a specific entry in a phonebook.

```js
FUNCTION findName()
  INPUT phonebook as array
  INPUT name
  FOR name in phonebook
    IF name is equal to name in phonebook
      PRINT index position of name
    ELSE
      PRINT name not found
END FUNCTION
```

Using the pseudocode you wrote for the previous question, implement it in any computer language of your choice.

```js
const phonebook = [
  'bill',
  'brad',
  'mike',
  'steve',
  'allen',
  'ellen',
  'susie',
  'mary',
  'betty',
  'jane'
]

const name = 'ellen'

function findName (array, name) {
  for (let i = 0; i < array.length; i++) {
    if (name === array[i]) {
      return `Name found at position ${array.indexOf(name)} in the array`
    }
  } return 'Name not found'
}

findName(phonebook, name)
```