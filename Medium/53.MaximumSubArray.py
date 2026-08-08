class Solution(object):
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        best_sum = 0 
        crr_sum = 0
        for i in nums:
            crr_sum+=i
            if crr_sum < 0:
                crr_sum=0
            best_sum = max(best_sum, crr_sum)
        if best_sum==0: 
            return max(nums)
        return best_sum