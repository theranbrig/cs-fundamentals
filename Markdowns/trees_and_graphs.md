# Exercises

## Short Answer

* What is a binary tree and what makes it unique to other trees?

A binary tree is one that only has two nodes branching from the node above it.  One is on the right and one is on the left.  This can be useful when you want to search since you can create criteria for the search.  In a binary search tree the left will follow a certain condition compared to right.  You could set it so that the left is always a larger or smaller data value than the right, thus giving it more structure.  This is the use of a binary search tree.

* What is a heuristic?

A heuristic acts a as logical guess within an algorithm.  Often times data sets can approach very large numbers to infinity when using large data sets.  However, in order to mitigate these effects the algorithm will use heuristics that act as assumptions or rules within the data set.  Although they make the algorithm less accurate, they do tend to increase efficiency.

* What is another problem besides the shortest-path problem that requires the use of heuristics?

Heuristics are often used in search algorithms.  Especially for sites like Google or Yahoo.  It would be impossible to search over every single web page on the internet.  The search algorithms make assumptions and look for patterns in order to be more efficient.

* What is the difference between a depth-first search and a breadth-first search?

Depth-first will go down the tree looking for the data.  It will then move back up and down through the nodes until it finds the data.  A breadth-first will look at each level down tree and scan that level from side-to-side.  Once it has searched through that it will then search the next level down from side-to-side until it has found the data it is looking for.

* Explain in your own words what an undirected, a-cyclic, unweighted graph is.

* What kind of graph is a binary search tree?

## Programming Questions

For the following questions, describe in words how you could solve the problem and then do so. Use the depiction of the Binary Search Tree to refer to the examples.



Given a Binary Search Tree and a value, write a function that checks to see whether the value exists within the tree.

Example: The value 10 exists in the tree. The value 23 does not exist in the tree.

Given a Binary Search Tree and two nodes, n1 and n2, write a function that finds the distance between the two nodes.

Example: The distance between the nodes 4 and 10 is 4. The distance between the nodes 8 and 10 is 1. The distance between the nodes 1 and 14 is 4.