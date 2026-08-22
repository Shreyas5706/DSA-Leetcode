class Solution(object):
    def countElements(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        maxnum=max(nums)
        minnum=min(nums)
        count = 0
        for num in  nums:
            if minnum<num<maxnum:
                count+=1
        return count