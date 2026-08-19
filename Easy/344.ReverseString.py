#1. using two pointer approach
class Solution(object):
    def reverseString(self, s):
        """
        :type s: List[str]
        :rtype: None Do not return anything, modify s in-place instead.
        """
        l=0
        r=len(s)-1
        while l<r:
            s[r],s[l]= s[l],s[r]
            l+=1
            r-=1
#2. using python built-in function
class Solution(object):
    def reverseString(self, s):
        s[:] = s[::-1]

