class Solution(object):
    def rearrangeArray(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        pos=[]
        neg=[]
        j=0
        for num in nums: 
            if num>0:
                pos.append(num)
            else:
                neg.append(num)
        for i in range(0,len(nums),2):
            nums[i]=pos[j]
            nums[i+1]=neg[j]
            j+=1
        return nums
        