# Exercises

Please submit your answers to the following questions in a file called intro_to_clean_coding_answers.txt.

> In your own words, explain what clean code is and why it is important.

Clean code is that which maintains readability and maintainability.  Clean code should be made in order to be understood by other programmers who may read your code.  It is DRY and easily readable with few comments needed since it should be self explanatory.  Variables and functions should be named explicitly and it should be clear what those functions do via the name.  Clean code allows a team to work together and share code in much easier manner.

> Read this article about Toyota and their use of bad code. Although you may not yet understand all of the topics discussed, think about another commonly used object that relies on computers and explain what would happen if the code was not created to an acceptable standard.

The world banking system is completely reliant on computers and code.  If there are problems with this code that could have catastrophic effects across the economy of the world.  It is essential that code is written out and tested properly.

> Would you consider the following to be clean code? Explain why or why not. If not, refactor the code.

No.  It is not direct enough with the variable names or naming of functions.  The function does not describe the purpose and the variables are simple letters, rather than describing the information that they contain.  Additionally it is overly commented.  It does not need to be commented on every line.

OLD CODE

```js
FUNCTION do(x, y)              // Creating a new function
  IF y = "F" THEN               // Check if y is equal "F"
  SET z to (x−32) * (5/9)       // Formula to convert degrees fahrenheit to celsius
  PRINT z                       // Print result
  ELSE IF y = "C" THEN          // If y not equal to "F", check if equal to "C"
  SET z to x * 1.8000 + 32.00   // Formula to convert degrees celsius to fahrenheit
  PRINT z                       // Print result
  END IF
END FUNCTION
```

NEW CODE

```js
FUNCTION convertTemperature(degrees, tempScale)
  IF tempScale = "F" THEN
  SET newTemp to (degrees−32) * (5/9)
  PRINT newTemp
  ELSE IF tempScale = "C" THEN
  SET newTemp to degrees * 1.8000 + 32.00
  PRINT newTemp
  END IF
END FUNCTION
```

>Would you consider the following to be clean code? Explain why or why not. If not, refactor the code.

This code is clean.  It defines the function, variables, and steps clearly.  It also does not repeat itself.  It does not need commenting since it clearly states shows the purpose of the function in the code itself.

```js
FUNCTION calcPercent(sum, total)
 IF NOT(total = 0) THEN
     SET percentage to sum / total * 100
 ELSE
   PRINT "Sorry, cannot divide by 0"
 END IF

 PRINT percentage
END FUNCTION
```

> Using pseudocode, refactor the code for the following examples using the principles you have learned in this checkpoint.

* a. The following function prints the subtotal of a customer's transaction and receives payment accordingly.

OLD CODE

``` js
FUNCTION checkOutCustomer(subTotal, discountRate, paymentType)
   PRINT "Your total due is: " + subTotal * discountRate + (subTotal * tax)

   IF paymentType = 'CASH' THEN
       CALL getPayment RETURNING amount
       PRINT "Change due: " + amount - subTotal * discountRate + (subTotal * tax)
   ELSE IF paymentType = 'CREDIT CARD' THEN
       CALL getPayment RETURNING amount
       PRINT "Your credit card has been charged: " + subTotal * discountRate + (subTotal * tax)
   END IF
END FUNCTION
```

NEW CODE

``` js
FUNCTION calculateTotal(subTotal, discountRate, tax)
  PRINT subTotal * discountRate + (subTotal * tax)
END FUNCTION

FUNCTION checkOutCustomer(subTotal, discountRate, paymentType)
  SET totalOwed to calculateTotal(subTotal, discountRate, tax)
  PRINT "Your total due is: " + totalOwed
  IF paymentType = 'CASH' THEN
    CALL getPayment RETURNING amount
    PRINT "Change due: " + amount - totalOwed
  ELSE IF paymentType = 'CREDIT CARD' THEN
    CALL getPayment RETURNING amount
    PRINT "Your credit card has been charged: " + totalOwed
  END IF
END FUNCTION
```

* b. The following function checks out a book if there are no issues with the guest's account.

OLD CODE

```js
FUNCTION checkoutBook(book, guest)
  IF guest.accountActive THEN
    IF NOT(guest.hasOverdueBooks) THEN
      IF guest.outstandingFees = 0 THEN
        APPEND book to guest.books
        SET book.status to "Checked Out"
        PRINT "Your books have been issued."
        END IF
    END IF
  ELSE
    PRINT "Unable to check out book."
  END IF
END FUNCTION
```

NEW CODE

```js
FUNCTION canCheckOutBooks(guest)
  IF guest.accountActive AND NOT(guest.hasOverdueBooks) AND guest.outstandingFees = 0 THEN
    SET true
  END IF
END FUNCTION

FUNCTION checkoutBook(book, guest)
  IF canCheckOut(guest) = true
    APPEND book to guest.books
    SET book.status to "Checked Out"
    PRINT "Your books have been issued."
  END IF
  ELSE
    PRINT "Unable to check out book."
  END IF
END FUNCTION
```

* c. The following class is a code snippet that should support the transactions a customer can perform at an ATM.

OLD CODE

```js
CLASS BankAccount

  FUNCTION displayBalance
    PRINT balance
  END FUNCTION

  FUNCTION deposit(amount)
    SET balance to balance + amount
  END FUNCTION

  FUNCTION withdraw(amount)
    IF balance > amount THEN
      SET balance to balance - amount
    END
  END FUNCTION

  FUNCTION creditCardOffer
    IF NOT(customer.hasCreditCard) THEN
      CALL offerCreditCard
    END
  END FUNCTION

  FUNCTION checkStatus
    IF NOT(customer.hasCheckingAccount) THEN
      CALL offerCheckingAccount
    END
  END FUNCTION

 ....
 ....
 ....

END
```

NEW CODE

```js
FUNCTION displayBalance
  PRINT balance
END FUNCTION

FUNCTION deposit(amount)
  SET balance to balance + amount
END FUNCTION

FUNCTION withdraw(amount)
  IF balance > amount THEN
    SET balance to balance - amount
  END
END FUNCTION

FUNCTION creditCardOffer
  IF NOT(customer.hasCreditCard) THEN
    CALL offerCreditCard
  END
END FUNCTION

FUNCTION checkStatus
  IF NOT(customer.hasCheckingAccount) THEN
    CALL offerCheckingAccount
  END
END FUNCTION

CLASS BankAccount

  displayBalance()

  deposit(amount)

  withdraw(amount)

  creditCardOffer()

  checkStatus()

 ....
 ....
 ....

END
```

## Programming Questions

You may do the following problems in any language of your choice. Use the clean code principles taught in this section while writing the code.

Square - Given an array of integers, find out whether the sum of the integers is a perfect square. If it is a perfect square, return the square root, otherwise return the sum.

Example:
[10,1,4,6,1,1,2] returns 5 because the square root of 25 is 5.
[1,1] returns 2 because 2 is not a perfect square.
The square root of 2 is approximately 1.414213562373095.

```js
function checkSquare(arr) {
  const arrayTotal = arr.reduce((a, b) =>  a + b);
  const squareRoot = Math.sqrt(arrayTotal);
  if (squareRoot % 1 === 0) {
    return squareRoot;
  } else {
    return arrayTotal;
  }
}
```

Duplicate - Given an array of integers, find out whether the array contains any duplicate elements. The function should return true if any value appears at least twice in the array, and false if every element is distinct.

```js
function findDuplicates(array) {
  let duplicateArray = [];
  array.forEach((element, index) => {
    if (array.indexOf(element, index + 1) > -1) {
      if (duplicateArray.indexOf(element) === -1) {
        duplicateArray.push(element);
      }
    }
  });
  if(duplicateArray.length > 0) {
    return true;
  } else {
    return false;
  }
}
```

### Extra Credit

Anagram - An anagram is a word, phrase, or name formed by rearranging the letters of another word. For example, spar can be formed from rasp. Given two strings, stringOne and stringTwo, determine if stringOne is an anagram of stringTwo. Assume that the strings contain only lowercase letters and do not worry about case-sensitivity. Hint: Your first task will be to convert the strings to arrays.

```js
function findAnagram(string1, string2) {
  const word1Array = [...string1]
  const word2Array = [...string2]
  let counter = 0
  word1Array.forEach(element => {
    if(word2Array.indexOf(element) !== -1) {
      counter ++
    } else {
      return false;
    }
  });
  if (counter === word1Array.length && counter === word2Array.length) {
    return true;
  } else {
    return false;
  }
}
```