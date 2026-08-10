class Solution(object):
    def threeSum(self, num):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        result=[]
        num.sort()
        for i in range(len(num)):
            if i > 0 and num[i] == num[i-1]:
                continue
            left = i+1
            right = len(num)-1
            while right>left:
                total = num[i] + num[left] + num[right]
                if total == 0:
                    result.append([num[i],num[left],num[right]])
                    left+=1
                    right-=1
                    while left < right and num[left] == num[left - 1]:
                        left += 1

                    while left < right and num[right] == num[right + 1]:
                        right -= 1
                elif total > 0: 
                    right-=1
                else:
                    left+=1
        return result