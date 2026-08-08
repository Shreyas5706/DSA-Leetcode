#1. Sorting + Middle element approach
class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        nums.sort()
        return nums[len(nums) // 2]

#2. Boyer-Moore Voting Algorithm
class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        candidate = nums[0]
        count = 0

        for num in nums:

            if count == 0:
                candidate=num
                count = 1

            elif num == candidate:
                count+=1
            else:
                count-=1

        return candidate