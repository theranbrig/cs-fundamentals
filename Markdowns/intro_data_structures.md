# Exercises

For exercises requiring code, you are free to use the language of your choice.

Give all the code and written answers in a file named `intro-data-structures.txt`:

A line of people at an amusement park ride.
The line is composed of members, represented as strings.
There is a front to the line, as well as a back.
When someone enters the line, place them at the end.
People may leave the line whenever they see fit, and those behind them take their place.

> Given the above real-world information, use an array data structure to code the following solution.

* a) Use an array input: ["Vivian", "Ava", "Josh", "Patrick", "Mike"]
* b) Insert a new person, "Mary" at the end of the line. In other words, you should insert Mary after Mike.
* c) Find a person in line named "Josh." This function should return the position of 2 in the array, (recall that arrays are 0-based).
* d) Find a person in line named "Emily." What should your function return if it does not find the item in the array?
* e) What if Ava wants to allow a friend, "Melissa", to cut in line in front of her? How would you code this so Melissa appears before Ava?
* f) If Patrick wants to leave the line, how would you delete him from the array?

*Questions for each data model are answered along with the javascript code below.*

>Provide another real-world example that you can model using a data structure.
>How would your data structure allow developers to access and manipulate the data?

ANSWERS:

The data structure below is meant model any line for any ride.  In this case the constructor that is built can be used to model all of the rides in the park by simply inserting a new array or new names into the functions below.  The first function will add a person to the end of the line.  The second function checks if a person is in the line and tells their zero-indexed position or states that they are not in the line if their name cannot be found.  The third function allows for someone to cut in line behind the person who is saving but this could easily be changed to allow them to cut in line ahead if needed by getting rid of the +1 in the splice method.  The final function removes a person when they leave the line by getting their index and removing them from the line. A model example for a ride named The Black Widow is modeled below.

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

This data structure model is for a convenience store and it checks their inventory of a certain products that are stored in an array of objects.  It is reusable so that it could be used with any product and checks all of the sodas in their inventory.  The first function checks the inventory of the product.  It would alert the store owner to see how much of the product is in stock.  The second function subtracts items from the inventory when a customer makes an order.  It also first checks to make sure that there is enough of the product before allowing the customer to order and will show an alert if there is not enough of the product.  The final function makes a reorder when there is not enough of a product.  It checks a threshold set by the store and then if the inventory goes below that threshold, it makes an order for more product.  This would help to streamline efficiency at the store.  This is a super simple example to show the data structure for a store and the functions that are needed to track inventory. An example of a store's soda inventory is show below.

CODE:

```js
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
        console.log(`Invalid Order = Order: ${inventory[i].type}: ${numberOrdered}, Inventory: ${inventory[i].type}: ${inventory[i].quantity}`)
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
```