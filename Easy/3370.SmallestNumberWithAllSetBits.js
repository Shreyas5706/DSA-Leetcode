/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    let i = n;
    while (true) {
        if ((i & (i + 1)) === 0) return i;
        i++;
    }
};