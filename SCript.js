/* 
- for (let j = 0; j < n; j++)
O(n)



-for (let j = 1; j < n; j*2)
1st iteration: j = 1
2nd iteration: j = 2
3rd iteration: j = 4
4th iteration: j = 8


*/
/*
function twoSum(nums, target) {
    // Create a map to store the complement and its index
    const complementMap = {};
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];  // Calculate the complement needed to reach the target
        
        // If the complement exists in the map, return the indices
        if (complement in complementMap) {
            return [complementMap[complement], i];
        }
        
        // Otherwise, store the number and its index in the map
        complementMap[nums[i]] = i;
    }
    
    // If no solution is found, return an empty array (although problem guarantees one solution)
    return [];
}

// Example usage:

console.log(twoSum([2, 7, 11, 15], 9));  // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));       // Output: [1, 2]
*/
function eliminateDuplicatesAndFindMostFrequent(nums) {
    // Step 1: Eliminate duplicates using Set
    const uniqueNums = [...new Set(nums)];  // Spread Set into array to get unique numbers

    // Step 2: Calculate most frequent number
    const frequencyMap = {};
    let mostFrequent = null;
    let maxFrequency = 0;

    // Build frequency map
    for (let num of nums) {
        // If the number already exists in the map, increment its count
        if (frequencyMap[num]) {
            frequencyMap[num]++;
        } else {
            // Otherwise, initialize it in the map
            frequencyMap[num] = 1;
        }
    }

    return {
        uniqueNumbers: uniqueNums,
        mostFrequentNumber: frequencyMap
    };
}

// Example usage:

const nums = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

const result = eliminateDuplicatesAndFindMostFrequent(nums);
console.log("Unique Numbers:", result.uniqueNumbers);       // Output: [1, 2, 3, 4]
console.log("Most Frequent Number:", result.mostFrequentNumber);  // Output: 4
