/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let s = [];
    let output = [];
    if (root) s.push(root);
    while (s.length) {
        let node = s.pop();
        output.push(node.val);        
        if (node.right) s.push(node.right);   
        if (node.left) s.push(node.left);
    }
    return output;
};