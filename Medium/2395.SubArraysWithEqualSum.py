# Using Hashing 
class Solution(object):
    def findSubarrays(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        seen=set()
        for i in range(len(nums)-1):
            current_sum = nums[i]+nums[i+1]
            if current_sum in seen:
                return True
            seen.add(current_sum)
        return False
