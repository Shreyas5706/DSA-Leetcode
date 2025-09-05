/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 class List{
    constructor(val){
        this.val=val;
        this.next=null;
    }
 }
var reverseList = function(head) {
    if(!head) return null;
    let values=[];
    let crr=head;
    while(crr){
        values.push(crr.val);
        crr=crr.next;
    }
    ;
    let newHead=new List(values.pop());
    let newcrr=newHead;
        while(values.length>0){
            newcrr.next=new List(values.pop());
            newcrr=newcrr.next;
        }
    return newHead;
};