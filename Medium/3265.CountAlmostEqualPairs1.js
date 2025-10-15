/**
 * @param {number[]} nums
 * @return {number}
 */

var countPairs = function (nums) {
    let pairs = 0;
    for (let j = 0; j < nums.length; j++) {
        let currInt = nums[j];
        for (let i = j + 1; i < nums.length; i++) { 
            let int = nums[i];
            if (canBePair(currInt, int) || canBePair(int, currInt)) {
                pairs++;
            }
        }
    }
    return pairs;
};

function canBePair(num1, num2) {
    num1 = num1.toString();
    num2 = num2.toString();

    if (num1 === num2) return true;

    for (let i = 0; i < num1.length; i++) {
        for (let j = i + 1; j < num1.length; j++) {
            let numArr = num1.split('');
            [numArr[i], numArr[j]] = [numArr[j], numArr[i]];
            let swappedStr = numArr.join(''); 
            swappedStr = swappedStr.replace(/^0+/, ''); 

            if (swappedStr === num2) {
                return true;
            }
        }
    }
    return false;
}