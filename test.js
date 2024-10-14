const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  // Parsing the input
  const n = parseInt(userInput[0]);               // Number of elements in the array
  const nums = userInput[1].split(" ").map(Number); // Array of numbers
  const target = parseInt(userInput[2]);           // Target value

  // Function to perform binary search and count iterations
  function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let iterations = 0;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      
      if (nums[mid] === target) {
        // If target is found, return the index and current iteration count
        return [mid, iterations + 1];
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }

      // Increment iterations after comparison, when we decide to change the search space
      iterations++;
    }

    // If target not found, return [-1, iterations]
    return [-1, iterations];
  }

  // Call the binarySearch function and print the result
  const [index, iterations] = binarySearch(nums, target);

  console.log(`${index} ${iterations}`);
});
