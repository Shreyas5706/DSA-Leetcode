class Solution(object):
    def largestInteger(self, num):
        """
        :type num: int
        :rtype: int
        """
        digits=list(str(num))
        even=[]
        odd=[]
        for digit in digits :
            if int(digit) %2 ==0:
                even.append(int(digit))
            else:
                odd.append(int(digit))
        even.sort(reverse=True)
        odd.sort(reverse=True)
        i=0
        j=0
        for k in range(len(digits)):
            if int(digits[k]) % 2 == 0:
                digits[k] = str(even[i])
                i += 1
            else:
                digits[k] = str(odd[j])
                j += 1
        return int(''.join(digits))


        