/*
2. Add Two Numbers
Medium

8139

2070

Add to List

Share
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function addTwoNumbers(l1, l2) {
    const head = new ListNode(0, null);
    let first = true;
    let carry = 0;
    let node;

    while (l1 || l2 || carry) {
        let add = 0;

        if (first) {
            node = head;
            first = false;
        } else {
            node.next = new ListNode(0, null);
            node = node.next;
        }

        if (l1) {
            add += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            add += l2.val;
            l2 = l2.next;
        }

        add += carry;
        carry = 0;

        if (add > 9) {
            carry += 1;
            add -= 10;
        }

        node.val = add;
    }
    return head;
}
