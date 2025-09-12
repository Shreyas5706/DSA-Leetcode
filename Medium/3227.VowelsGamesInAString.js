/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
    const vowels ='aeiou';
    for(let i=0;i<s.length ;i++){
        if(vowels.includes(s[i])){
            return true
        }
    }
    return false
};