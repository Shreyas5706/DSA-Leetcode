/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
        let maxLength = 0;
    let left = 0;
    const visited = new Set();

    for (let right = 0; right < s.length; right++) {
        while (visited.has(s[right])) {
            visited.delete(s[left]);
            left++;
        }
        visited.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;

};