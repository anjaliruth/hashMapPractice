// Quesiton 1:
// Two Sum:
// Given an array of integers and a target sum, find two numbers in the array that add up to the target sum.

// Example:

// Input: [2, 7, 11, 15], target = 9
// Output: [2, 7]

function findComplement(nums, target) {
  //create a map to store number and indices
  const myMap = {};
  
  for (let i = 0; i < nums.length; i++) {

    const currentNum = nums[i]
    const complement = target - nums[i]

    if (myMap.hasOwnProperty(complement)) {
        return [complement, currentNum]
    }

    else{
        myMap[currentNum] = i
    }

  }
  return []
}

module.exports = findComplement