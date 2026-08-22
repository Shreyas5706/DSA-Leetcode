from collections import Counter 
class Solution(object):
    def rearrangeCharacters(self, s, target):
        """
        :type s: str
        :type target: str
        :rtype: int
        """
        s_count = Counter(s)
        target_count = Counter(target)
        
        max_copies = float('inf')

        for key in target_count:
            copies = s_count.get(key, 0) // target_count[key]
            max_copies = min(max_copies, copies)
        
        return max_copies
        