/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxDistinctElements = function(nums, k) {
    nums.sort((a, b) => a - b);  // Sort the array
    let count = 0;
    let prev = -Infinity;
    
    for (let num of nums) {
        // Determine the smallest valid selectable value for this element
        let low = Math.max(num - k, prev + 1);
        let chosen = Math.min(low, num + k);

        if (chosen > prev) {
            count++;
            prev = chosen;
        }
    }
    return count;
};
    