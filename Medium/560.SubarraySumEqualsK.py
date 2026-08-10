# 1. Brute force approach , works but time limit exceeded for higher number of inputs.
class Solution(object):
    def subarraySum(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        #Brute force approach 
        count=0 
        for i in range(0, len(nums)) :
            crrsum=0
            for j in range(i,len(nums)):
                crrsum+= nums[j]
                if crrsum == k:
                    count+=1 
                
                
        return count 
    
# 2. Using Hashmap to store the prefix sum and its frequency.
class Solution(object):
    def subarraySum(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        count = 0
        prefix_sum = 0
        prefix_sum_count = {0: 1}  
        for num in nums:
            prefix_sum += num  
            if (prefix_sum - k) in prefix_sum_count:
                count += prefix_sum_count[prefix_sum - k]  
            if prefix_sum in prefix_sum_count:
                prefix_sum_count[prefix_sum] += 1  
            else:
                prefix_sum_count[prefix_sum] = 1  
        
        return count 