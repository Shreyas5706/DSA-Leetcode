class Solution(object):
    def thirdMax(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(set(nums))<3 :
            return max(nums)
        first = second = third = None 
        for num in nums :
            if num >first :
                third = second
                second = first 
                first = num 
            elif num<first and num >second :
                third = second 
                second = num 
            elif num<second and num>third :
                third = num 
        return first if third is None else third 
                