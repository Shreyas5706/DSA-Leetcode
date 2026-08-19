# Floyd's cycle detection algorithm is used to detect a cycle in a linked list. The idea is to use two pointers, one moving at a slow pace (one step at a time) and the other moving at a fast pace (two steps at a time). If there is a cycle in the linked list, the fast pointer will eventually meet the slow pointer. If there is no cycle, the fast pointer will reach the end of the list.


# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def hasCycle(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        slow =head 
        fast = head 
        while fast and fast.next :
            slow = slow.next 
            fast = fast.next.next 
            if slow == fast : 
                return True 
        return False 