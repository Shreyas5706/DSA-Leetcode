/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const vowelSet = new Set("AEIOUaeiou");
    const vowels=[];
    for(let char of s){
        if(vowelSet.has(char)){
            vowels.push(char);
        }
    }
    vowels.sort();
    let result=[];
    let index=0;
    for(let char of s){
      result.push(vowelSet.has(char)?vowels[index++]:char);
    }
    return result.join('');
    
};