class Solution(object):
    def countAsterisks(self, s):
        """
        :type s: str
        :rtype: int
        """
        count =0 
        flag=True 
        for i in s:
            if i =='|' :
                flag = not flag
            elif i=="*" and flag :
                count+=1
        return count 
        