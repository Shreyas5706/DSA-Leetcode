/**
 * @param {number[]} nums
 * @return {number[]}
 */
 
const gcd = (a, b)=> {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}
const lcm = (a, b)=> {
    return (a * b) / gcd(a, b);
}

var replaceNonCoprimes = function(nums) {
    const stk = [];
    for (const x of nums) {
        let y = x;
        while (stk.length && gcd(stk[stk.length - 1], y) > 1) {
            y = lcm(stk.pop(), y);
        }
        stk.push(y);
    }
    return stk;
};