/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  // Complete the function
  const intArray = [...new Set(nums)];
  const second = intArray.sort((a, b) => {
    return b - a;
  })[1];
  return second;
}
