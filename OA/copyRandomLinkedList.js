/*
  linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

The Linked List is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) where random pointer points to, or null if it does not point to any node.
*/

//Node definition:
class Node {
    constructor(val, next, random) {
        this.val = val;
        this.next = next; 
        this.random = random;
    }
}

function copyRandomLinkedList(head) {
    if (!head) return head;

    const clonedHead = new Node(head.val, null, null);

    let newHead = clonedHead;
    let oldHead = head;

    const justBelow = new Map();
    justBelow.set(oldHead, newHead);

    while (oldHead.next) {
        newHead.next = new Node(oldHead.next.val, null, null);
        newHead = newHead.next;
        oldHead = oldHead.next;

        justBelow.set(oldHead, newHead);
    }

    oldHead = head;
    newHead = clonedHead;

    while(oldHead && newHead) {
        newHead.random = oldHead.random ? justBelow.get(oldHead.random) : null;
        newHead = newHead.next;
        oldHead = oldHead.next;
    }
    return clonedHead;
}
