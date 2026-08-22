class Solution(object):
    def strongPasswordCheckerII(self, password):
        """
        :type password: str
        :rtype: bool
        """
        if len(password)<8:
            return False 
        has_upper=False 
        has_lower=False
        has_number=False
        has_special=False
        special="!@#$%^&*()-+"
        for i in range(len(password)):
            ch=password[i]
            if ch.isupper():
                has_upper=True
            elif ch.islower():
                has_lower=True
            elif ch.isdigit():
                has_number=True
            elif ch in special :
                has_special=True
            
            if i>0 and password[i]==password[i-1]:
                return False
        return has_upper and has_lower and has_number and has_special 