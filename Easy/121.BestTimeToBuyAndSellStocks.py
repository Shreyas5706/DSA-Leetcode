class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        minpr=float('inf')
        profit=0
        for price in prices:
            minpr = min(minpr, price)
            
            profit = max(profit, price - minpr)
        return profit 
