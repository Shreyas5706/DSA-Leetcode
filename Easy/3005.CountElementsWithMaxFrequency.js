/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const freq = {};
    let frequency = 0, count = 0;

    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    for (let key in freq) {
        if (freq[key] === frequency) {
            count++;
        } else if (freq[key] > frequency) {
            frequency = freq[key];
            count = 1;
        }
    }

    return frequency * count;
};