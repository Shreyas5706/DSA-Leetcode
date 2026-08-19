class Solution(object):
    def isAnagram(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        if not (len(s)== len(t)):
            return False 
        dict = {}
        for i in range(len(s)):
            if s[i] in  dict :
                dict[s[i]]+=1
            else:
                dict[s[i]]=1
            if t[i] in dict :
                dict[t[i]]-=1
            else :
                dict[t[i]]=-1
        return all(value == 0 for value in dict.values())               