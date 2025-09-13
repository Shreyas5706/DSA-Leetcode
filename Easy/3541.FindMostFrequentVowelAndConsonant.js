/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let frequency = {};
    let consonant = 0, vowel = 0, VOWEL = "aeiou";
    for (let c of s) {
        frequency[c] = (frequency[c] || 0) + 1;
    }
    for (let char in frequency) {
        if (VOWEL.includes(char)) {
            vowel = Math.max(vowel, frequency[char]);
        }
        else {
            consonant = Math.max(consonant, frequency[char]);
        }
    }
    return (consonant + vowel);
};