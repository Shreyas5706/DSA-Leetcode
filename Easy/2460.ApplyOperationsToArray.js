/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {

    for(i=0;i<nums.length;i++){
        if(nums[i]==nums[i+1]){
            nums[i]*=2;
            nums[i+1]=0;
        }
    }
    let nZI = 0;
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nZI] = nums[i];
            nZI++;
        }
    }
    for(let i = nZI; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};