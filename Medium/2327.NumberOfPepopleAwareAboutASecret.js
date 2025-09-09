/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function (n, delay, forget) {
    const mod = 1e9 + 7;

    if (n === 1) return 1;a
    let dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    let share = 0;

    for (let day = 2; day <= n; day++) {
        const enter = day - delay;
        const exit = day - forget;


        if (enter >= 1) share = (share + dp[enter]) % mod;
        if (exit >= 1) share = (share - dp[exit] + mod) % mod;
        dp[day] = share;
    }
    let result = 0;
    for (let day = Math.max(1, n - forget + 1); day <= n; day++) {
        result = (result + dp[day]) % mod;
    }
    return result;
};