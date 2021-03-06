# Exercises

> Write pseudocode for bubble sort.

```js
// Swap helper function for sorting algorithms to swap to items in array.

FUNCTION swap (array, i, j)
  SET temp to array at index i
  SET array at index i to array at index j
  SET array at index j to temp

FUNCTION bubbleSort (array)
  DECLARE swapped
  DO
    SET swapped to false
    FOR items in array
      IF the item is greater than item at next index
        swap(array, item, item at next index)
        SET swapped to true;
      END IF
    END FOR
  UNTIL swapped is false
  RETURN array
END FUNCTION
```

> Write pseudocode for quicksort.

```js
FUNCTION quicksortSort (array)
  IF only one item in array
    RETURN array

  SET pivot to first index in array
  SET lesserArray to empty array
  SET greaterArray to empty array

  FOR item in array
    IF item is less than pivot
      PUSH item to lesser array
    ELSE
      PUSH item to greater array
    END IF
  END FOR

  RETURN quicksort(lesser) and CONCAT with the pivot and quicksort(greater)
```

> We talked about time complexity in a previous checkpoint, and how to get an idea of the efficiency of an algorithm. After looking at the pseudocode for the above sorting methods, identify why merge sort and quick sort are much more efficient than the others. Walking through each algorithm with a few sample collections may help.

When looking at time we can see how the merge and quick sort methods are more efficient based upon their structure. If we look at merge and quick sort, we can see that both work by breaking the data into smaller sub sections of data. By doing this we can more efficiently compare the data points to each other and then sort.

However with the other three sorting algorithms they are comparing items individually. This means that they loop through the data more often in order to make their full comparisons of the data set. This makes them less efficient overall.

This is why both merge and quick sort have time complexities of (n log n) while the others have a time complexity of (n^2) for their sorting capabilities.

> All of the sorts addressed in this checkpoint are known as comparison sorts. Research bucket sort and explain how it works. What is the ideal input for bucket sort?

Bucket sort acts by placing elements of an array into buckets. Then those items are sorted within the bucket that they were placed into. Bucket sort best works when the items are evenly distributed across the number of buckets.

For example, bucket sort can be used for a data set like a hash table. The items use the hash to put items into the buckets in the hash table. Then in cases of collision those items are sorted out within that index, or the buckets. So the fewer collisions that you have, the more efficient the sorting and search process will be. Spreading the items out across the table would be ideal for this type of algorithm and make it more efficient.
