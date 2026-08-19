# Hashing Approach 
class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        groups = {}
        for i in strs:
            key = ''.join(sorted(i))
            if key in groups:
                groups[key].append(i)
            else:
                groups[key]=[i]
        return list(groups.values())