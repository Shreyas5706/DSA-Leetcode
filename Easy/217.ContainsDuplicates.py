# 1. Brute force approach
class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i]==nums[j]:
                    return True 
        return False 
    
# 2. Hashmap approach using set 
class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        seen=set()
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False 

# 3. Converting into set and comparing length ---> Best approach 
class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        nums_set=set(nums)
        if len(nums) == len(nums_set):
                return False
        return True