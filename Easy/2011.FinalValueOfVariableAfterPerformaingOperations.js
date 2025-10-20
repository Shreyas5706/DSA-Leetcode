/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let res = 0;
    if(operations.length == 0) return res;
    else{
        for(let i = 0 ; i < operations.length ; i++){
            if(operations[i] == "X++" ||operations[i] == "++X" ){
                res++;
            }else{
                res--;
            }
        }
    }
    return res;
};