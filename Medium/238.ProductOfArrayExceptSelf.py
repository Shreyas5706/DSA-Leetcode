# DOing the right and left sum one by one to reduce the tiem complexity and dont use extra space 


class Solution(object):
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        answer = [1]*len(nums)
        left = 1
        for i in range (len(nums)):
            answer[i]=left 
            left*=nums[i]
        right = 1
        for i in range (len(nums)-1,-1,-1):
            answer[i]*= right 
            right*=nums[i]
        return answer