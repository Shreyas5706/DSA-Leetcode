var maximumEnergy = function(energy, k) {
    let n = energy.length;
    let dp = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
        dp[i] = energy[i] + (i + k < n ? dp[i + k] : 0);
    }
    return Math.max(...dp);
};
