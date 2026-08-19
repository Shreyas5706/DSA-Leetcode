# Advancement of binary search to find the first and last position of an element in a sorted array.
class Solution(object):
    def searchRange(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        if len(nums) == 0 :
            return [-1,-1]
        first = self.find_first(0,len(nums)-1,nums,target)   
        last = self.find_last (0, len(nums)-1,nums,target)  
        return [first , last ]         
           
    def find_first(self,l,r,nums,target):
        answer = -1
        while l <= r:
            mid = (l + r) // 2

            if nums[mid] == target:
                answer = mid
                r = mid - 1       # 🔥 keep searching LEFT

            elif nums[mid] < target:
                l = mid + 1

            else:
                r = mid - 1
        return answer 
    def find_last(self,l,r,nums,target):
        answer = -1 
        while l <= r:
            mid = (l + r) // 2

            if nums[mid] == target:
                answer = mid
                l = mid +  1       # 🔥 keep searching right

            elif nums[mid] < target:
                l = mid + 1

            else:
                r = mid - 1
        return answer 