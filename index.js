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
    const currentNum = nums[i];
    const complement = target - nums[i];

    if (myMap.hasOwnProperty(complement)) {
      return [complement, currentNum];
    } else {
      myMap[currentNum] = i;
    }
  }
  return [];
}

//Question 2
// Word Frequency Counter:
// Given a list of words, count the frequency of each word in the list and return the results as a dictionary.

// Example:
// Input: ["apple", "banana", "apple", "cherry", "banana"]
// Output: {"apple": 2, "banana": 2, "cherry": 1}

//Plan:
//create map
//for loop to go through input
//if its in the input, then myMap(string) = myMap(string) + 1

function getCount(input) {
  const myMap = {};

  for (let i = 0; i < input.length; i++) {
    const current = input[i];

    if (myMap.hasOwnProperty(current)) {
      myMap[current] = myMap[current] + 1;
    } else {
      myMap[current] = 1;
    }
  }
  return myMap;
}

//Longest Substring Without Repeating Characters:
// Given a string, find the length of the longest substring without repeating characters.

// Example:

// Input: "abcabcbb"
// Output: 3 (The longest substring without repeating characters is "abc").

//create answer string
//iterate over input, if not in string, add it to string
//once in string, break
//return string

// function longestString(input) {
//   let answer = "";
//   let currentSubstring = "";

//   for (let i = 0; i < input.length; i++) {
//     if (!currentSubstring.includes(input[i])) {
//       currentSubstring += input[i];
//       if (currentSubstring.length > answer.length) {
//         answer = currentInput;
//       }
//     } else {
//       currentSubstring = input[i];
//     }
//   }
//   return `The longest substring without repeating characters is ${answer}`;
// }

function longestString(input) {
    let longestSubstring = "";
    let charMap= {}
    let start = 0
    let maxLength = 0

    for (let end = 0; end < input.length; end++) {

        const currentChar = input[end]
        if (charMap[end] !== undefined && charMap[currentChar] >= start) {
            start = charMap[currentChar] + 1
        }
        //add unseen letter to the map with its index
        charMap[currentChar] = end

        if (end-start + 1 > maxLength) {
            maxLength = end - start + 1
            longestString = input.slice(start, end + 1)
        }

    }
    return longestSubstring
}

module.exports = { findComplement, getCount, longestString };
