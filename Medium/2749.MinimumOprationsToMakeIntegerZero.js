/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var makeTheIntegerZero = function(num1, num2) {
    for (let k = 1; ; k++) {            // Step 1: Check k=1,2,3,... (number of operations)
    const x = num1 - k * num2;        // Step 2: Calculate remainder after subtracting k*num2 from num1
    
    if (x < 0) break;                 // Step 3: If remainder is negative, stop checking further
    
    // Step 4: Count how many 1s are in binary representation of x
    const minPowersOfTwo = x.toString(2).replace(/0/g, '').length;
    
    // Step 5: If number of 1s <= k and k <= x, return k
    if (minPowersOfTwo <= k && k <= x) {
      return k;
    }
  }
  return -1;                         
};