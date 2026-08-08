1. # 1. Brute force approach 
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i]+nums[j]==target :
                    return [i,j]
                
                
#2. Hashmap approach
class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        seen = {}
        for i in range(len(nums)):
           find = target-nums[i]
           if find in seen:

            return [seen[find], i]

           seen[nums[i]] = i
