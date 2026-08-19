# Two pointer approach--> Start with left and right pointer and then check for the area and then move the pointer which has the smaller height. Tc = n
class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        left = 0 
        right = len(s)-1
        while left<right :
            while left<right and not s[left].isalnum():
                left+=1
            while left<right and not s[right].isalnum():
                right-=1
            if s[left].lower() != s[right].lower():
                return false 
        return true 