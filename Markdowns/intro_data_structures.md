# Exercises

For exercises requiring code, you are free to use the language of your choice.

Give all the code and written answers in a file named `intro-data-structures.txt`:

A line of people at an amusement park ride.

The line is composed of members, represented as strings.
There is a front to the line, as well as a back.
When someone enters the line, place them at the end.
People may leave the line whenever they see fit, and those behind them take their place.
Given the above real-world information, use an array data structure to code the following solution.

a) Use an array input: ["Vivian", "Ava", "Josh", "Patrick", "Mike"]
b) Insert a new person, "Mary" at the end of the line. In other words, you should insert Mary after Mike.
c) Find a person in line named "Josh." This function should return the position of 2 in the array, (recall that arrays are 0-based).
d) Find a person in line named "Emily." What should your function return if it does not find the item in the array?
e) What if Ava wants to allow a friend, "Melissa", to cut in line in front of her? How would you code this so Melissa appears before Ava?
f) If Patrick wants to leave the line, how would you delete him from the array?

Provide another real-world example that you can model using a data structure.

How would your data structure allow developers to access and manipulate the data?

ANSWERS:

The data structure below is meant model any line for any ride.  In this case the constructor that is built can be used to model all of the rides in the park by simple inserting a new array or new names into the functions below.  The first function will add a person to the end of the line.  The second function checks if a person is in the line and tells their zero-indexed position or states that they are not in the line if their name cannot be found.  The third function allows for someone to cut in line behind the person who is saving but this could easily be changed to allow them to cut in line ahead if needed by getting rid of the +1 in the splice method.  The final function removes a person when they leave the line by getting their index and removing them from the line.

CODE:

```js
const Line = function () {
  this.joinLine = function (line, name) {
    line.push(name)
    return `The new line order is: ${line.join(', ')}`;
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
    return `The new line order is: ${line.join(', ')}`;
  }

  this.leave = function (line, name) {
    line.splice(line.indexOf(name), 1);
    return `The new line order is: ${line.join(', ')}`
  }
}

let blackWidowLine = new Line()

console.log(blackWidowLine.joinLine(rideLine, 'Mary'));
console.log(blackWidowLine.findPerson(rideLine, 'Josh'));
console.log(blackWidowLine.cutLine(rideLine, 'Josh', 'Mike'));
console.log(blackWidowLine.leave(rideLine, 'Josh'));
```

This model for the data structure is for a store and it checks their inventory of a certain product.  It is reusable so that it could be used with any product.  The first function checks the inventory of the product.  It would alert the store owner to see how much of the product is in stock.  The second function subtracts items from the inventory when a customer makes an order.  It also first checks to make sure that there is enough of the product before allowing the customer to order.  The final function makes a reorder when there is not enough of a product.  It checks a threshold set by the store and then if the inventory goes below that threshold, it makes an order for more product.  This would help to streamline efficiency at the store.

CODE:

```js
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

let sprite = 1;

let spriteInventory = new Inventory('Sprite');

console.log(spriteInventory.checkInventory(sprite));
console.log(spriteInventory.customerOrder(sprite, 8));
console.log(spriteInventory.checkOrderProduct(sprite));
```