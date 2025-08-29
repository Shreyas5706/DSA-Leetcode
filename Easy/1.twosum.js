/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map =new Map();
    for(i=0;i<nums.length;i++){
        let cmpl = target-nums[i];
        if(map.has(cmpl))
            return[map.get(cmpl),i];
        map.set(nums[i],i)
    }
    return[]
};