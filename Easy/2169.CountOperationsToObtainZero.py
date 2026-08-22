class Solution(object):
    def countOperations(self, num1, num2):
        """
        :type num1: int
        :type num2: int
        :rtype: int
        """
        operations = 0 
        while num1 != 0 and num2 != 0:
            if num1>=num2:
                operations += num1 // num2
                num1 %= num2
            else:
                operations += num2 // num1
                num2 %= num1
        return operations 