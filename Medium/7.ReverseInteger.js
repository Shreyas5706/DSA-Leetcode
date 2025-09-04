/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let rev=0,rem=0;
    let sign= Math.sign(x);
    x=Math.abs(x);
    while(x>0){
        rem=x%10;
        rev=rev*10+rem;
        x=Math.floor(x/10);
    }
    rev=rev*sign;
    const INT_MIN = -Math.pow(2, 31);       // -2147483648
    const INT_MAX = Math.pow(2, 31) - 1;    // 2147483647
    
    if (rev < INT_MIN || rev > INT_MAX) {
        return 0;
    }
    return rev;
};