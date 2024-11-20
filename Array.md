# JavaScript Array Methods

### 1. `push()`
   - **Description**: Adds one or more elements to the end of an array and returns the new array length.
   - **Example**:
     ```javascript
     let arr = [1, 2, 3];
     arr.push(4);  // arr becomes [1, 2, 3, 4]
     console.log(arr);  // Outputs: [1, 2, 3, 4]
     ```

### 2. `pop()`
   - **Description**: Removes the last element from an array and returns that element.
   - **Example**:
     ```javascript
     let arr = [1, 2, 3];
     let lastElement = arr.pop();  // Removes 3
     console.log(arr);  // Outputs: [1, 2]
     console.log(lastElement);  // Outputs: 3
     ```

### 3. `shift()`
   - **Description**: Removes the first element from an array and returns that element.
   - **Example**:
     ```javascript
     let arr = [1, 2, 3];
     let firstElement = arr.shift();  // Removes 1
     console.log(arr);  // Outputs: [2, 3]
     console.log(firstElement);  // Outputs: 1
     ```

### 4. `unshift()`
   - **Description**: Adds one or more elements to the beginning of an array and returns the new array length.
   - **Example**:
     ```javascript
     let arr = [2, 3];
     arr.unshift(1);  // arr becomes [1, 2, 3]
     console.log(arr);  // Outputs: [1, 2, 3]
     ```

### 5. `concat()`
   - **Description**: Merges two or more arrays into a new array.
   - **Example**:
     ```javascript
     let arr1 = [1, 2];
     let arr2 = [3, 4];
     let combined = arr1.concat(arr2);  // arr1 + arr2
     console.log(combined);  // Outputs: [1, 2, 3, 4]
     ```

### 6. `join()`
   - **Description**: Joins all elements of an array into a string, separated by a specified separator (default is comma).
   - **Example**:
     ```javascript
     let arr = ['apple', 'banana', 'cherry'];
     let result = arr.join(', ');  // Joins the elements with comma
     console.log(result);  // Outputs: "apple, banana, cherry"
     ```

### 7. `slice()`
   - **Description**: Returns a shallow copy of a portion of an array into a new array object without modifying the original array.
   - **Example**:
     ```javascript
     let arr = [1, 2, 3, 4, 5];
     let sliced = arr.slice(1, 4);  // Extracts elements from index 1 to 3
     console.log(sliced);  // Outputs: [2, 3, 4]
     ```

### 8. `splice()`
   - **Description**: Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
   - **Example**:
     ```javascript
     let arr = [1, 2, 3, 4, 5];
     arr.splice(2, 2, 'a', 'b');  // Removes 2 elements at index 2, adds 'a' and 'b'
     console.log(arr);  // Outputs: [1, 2, 'a', 'b', 5]
     ```

### 9. `map()`
   - **Description**: Creates a new array with the results of calling a provided function on every element in the array.
   - **Example**:
     ```javascript
     let arr = [1, 2, 3];
     let squared = arr.map(x => x * x);  // Squaring each element
     console.log(squared);  // Outputs: [1, 4, 9]
     ```

### 10. `filter()`
   - **Description**: Creates a new array with all elements that pass the test implemented by the provided function.
   - **Example**:
     ```javascript
     let arr = [1, 2, 3, 4, 5];
     let evenNumbers = arr.filter(x => x % 2 === 0);  // Filters even numbers
     console.log(evenNumbers);  // Outputs: [2, 4]
     ```

### 11. `reduce()`
   - **Description**: Applies a function to an accumulator and each element in the array (from left to right) to reduce it to a single value.
   - **Example**:
     ```javascript
     let arr = [1, 2, 3, 4];
     let sum = arr.reduce((acc, current) => acc + current, 0);  // Summing all elements
     console.log(sum);  // Outputs: 10
     ```

### 12. `forEach()`
   - **Description**: Executes a provided function once for each array element.
   - **Example**:
     ```javascript
     let arr = [1, 2, 3];
     arr.forEach(x => console.log(x));  // Logs each element
     // Outputs:
     // 1
     // 2
     // 3
     ```

### 13. `some()`
   - **Description**: Tests whether at least one element in the array passes the test implemented by the provided function.
   - **Example**:
     ```javascript
     let arr = [1, 2, 3, 4];
     let hasEven = arr.some(x => x % 2 === 0);  // Checks if there's any even number
     console.log(hasEven);  // Outputs: true
     ```

### 14. `every()`
   - **Description**: Tests whether all elements in the array pass the test implemented by the provided function.
   - **Example**:
     ```javascript
     let arr = [2, 4, 6, 8];
     let allEven = arr.every(x => x % 2 === 0);  // Checks if all elements are even
     console.log(allEven);  // Outputs: true
     ```

### 15. `find()`
   - **Description**: Returns the first element in the array that satisfies the provided testing function.
   - **Example**:
     ```javascript
     let arr = [1, 2, 3, 4];
     let firstEven = arr.find(x => x % 2 === 0);  // Finds the first even number
     console.log(firstEven);  // Outputs: 2
     ```

### 16. `findIndex()`
   - **Description**: Returns the index of the first element in the array that satisfies the provided testing function.
   - **Example**:
     ```javascript
     let arr = [1, 2, 3, 4];
     let index = arr.findIndex(x => x === 3);  // Finds the index of 3
     console.log(index);  // Outputs: 2
     ```

### 17. `includes()`
   - **Description**: Checks if the array contains a certain element, returning `true` if found, `false` otherwise.
   - **Example**:
     ```javascript
     let arr = [1, 2, 3, 4];
     let hasThree = arr.includes(3);  // Checks if 3 is in the array
     console.log(hasThree);  // Outputs: true
     ```

### 18. `sort()`
   - **Description**: Sorts the elements of an array in place and returns the sorted array.
   - **Example**:
     ```javascript
     let arr = [4, 2, 3, 1];
     arr.sort();  // Sorts the array in ascending order
     console.log(arr);  // Outputs: [1, 2, 3, 4]
     ```

### 19. `reverse()`
   - **Description**: Reverses the order of elements in an array in place.
   - **Example**:
     ```javascript
     let arr = [1, 2, 3];
     arr.reverse();  // Reverses the order of elements
     console.log(arr);  // Outputs: [3, 2, 1]
     ```

### 20. `indexOf()`
   - **Description**: Returns the first index at which a given element can be found in the array, or `-1` if it is not present.
   - **Example**:
     ```javascript
     let arr = [1, 2, 3, 4];
     let index = arr.indexOf(3);  // Finds the index of 3
     console.log(index);  // Outputs: 2
     ```

In short:

- map() is used to transform an array.
- reduce() is used to aggregate an array into a single value.
- filter() is used to select elements from an array that meet a certain condition.