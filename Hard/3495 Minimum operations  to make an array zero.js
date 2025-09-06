/**
 * @param {number[][]} queries
 * @return {number}
 */
var minOperations = function (queries) {
    let ans = 0;
    for (const [l, r] of queries) {
        ans += Math.floor((getOperations(r) - getOperations(l - 1) + 1) / 2);
    }
    return ans;
};

function getOperations(n) {
    let rsum = 0;
    let op = 0;
    let powerOfFour = 1;
    while (powerOfFour <= n) {
        const left = powerOfFour;
        const right = Math.min(n, powerOfFour * 4 - 1);
        op += 1;
        rsum += (right - left + 1) * op;
        powerOfFour *= 4;
    }
    return rsum;
}
