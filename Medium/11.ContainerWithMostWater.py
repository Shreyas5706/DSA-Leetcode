# !. Greedy Approach ---> Check for each possible pair and then take the max area from that. Tc = n square 
# 2. Two pointer approach ---> Start with left and right pointer and then check for the area and then move the pointer which has the smaller height. Tc = n
class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        left = 0 
        right = len(height)-1
        max_area = 0 
        while left<right:
            area = (min(height[left],height[right]) )* (right-left)
            max_area = max(max_area,area)
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
        return max_area 