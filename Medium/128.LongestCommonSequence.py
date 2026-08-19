# 1. Brute Force Approach
class Solution(object):
    def longestConsecutive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums)==1:
            return 1 
        nums.sort()
        longest=0
        current = 1
        for i in range(len(nums)-1):
            if nums[i+1] == nums[i]+1 :
                current +=1 
                longest = max(longest , current)
            elif nums[i]== nums[i+1] :
                continue 
            else:
                current = 1
        
        return longest 
#2. Hashing Approach
class Solution(object):
    def longestConsecutive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        num_set = set(nums)
        longest = 0

        for x in num_set:
            if x - 1 not in num_set:
                current = x

                while current in num_set:
                    current += 1

                longest = max(longest, current - x)
        return longest 