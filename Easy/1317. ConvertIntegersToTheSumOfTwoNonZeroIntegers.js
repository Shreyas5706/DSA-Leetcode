 /**
 * @param {number} n
 * @return {number[]}
 */
 let checkzero =(x)=>{
    return !x.toString().includes('0');
 }
var getNoZeroIntegers = function(n) {
    for(let a=1;a<n;a++){
        let b= n-a;
        if(checkzero(a) && checkzero(b))
        return [a,b];
    }
    return -1;
};