/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    const total = nums.reduce((a, b) => a + b, 0);
  const target = total - x;
  if (target < 0) return -1;  // can't reduce x if total < x
  
  let left = 0, currentSum = 0, maxLength = -1;
  
  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];
    
    // Shrink window until sum <= target
    while (currentSum > target && left <= right) {
      currentSum -= nums[left];
      left++;
    }
    
    // If current sum equals target, update max length
    if (currentSum === target) {
      maxLength = Math.max(maxLength, right - left + 1);
    }
  }
  return maxLength === -1 ? -1 : nums.length - maxLength
};