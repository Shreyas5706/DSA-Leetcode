class Solution(object):
    def findMaxConsecutiveOnes(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        crr=0
        maxcount=0
        for num in nums:
            if num == 0 :
                crr=0
            else:
                crr+=1
                if crr>maxcount:
                    maxcount =crr
        return maxcount