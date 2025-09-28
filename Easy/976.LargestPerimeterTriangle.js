/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
        const freq = {};
    for (let num of nums)
        freq[num] = (freq[num] ?? 0) + 1;

    const sorted = [];
    for (let v in freq) {
        for (let i = 0; i < freq[v]; i++)
            sorted.push(+v);
    }

    for (let i = sorted.length - 1; i >= 2; i--)
        if (sorted[i - 1] + sorted[i - 2] > sorted[i])
            return sorted[i] + sorted[i - 1] + sorted[i - 2];

    return 0;

};