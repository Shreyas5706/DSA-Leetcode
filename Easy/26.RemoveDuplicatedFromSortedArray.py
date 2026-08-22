class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        left = 1

        for i in range(1, len(nums)):
            if nums[i] != nums[left - 1]:
                nums[left] = nums[i]
                left += 1

        return left