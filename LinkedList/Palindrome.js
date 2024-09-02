class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }

    // WRITE THE REVERSEBETWEEN METHOD HERE // 
    //                                      //
    //                                      //
    //                                      //
    //                                      //
    //////////////////////////////////////////



    reverseBetween(m, n) {
        if (m >= n || this.head == null) {
            console.error("Invalid indices or empty list.");
            return;
        }

        let prev = null;
        let curr = this.head;

        let i = 0;

        // Move `curr` to the m-th node
        while (i < m) {
            prev = curr;
            curr = curr.next;
            i++;

            if (curr == null) { // Check if `curr` became null while moving to m-th node
                console.error("Index out of bounds.");
                return;
            }
        }

        console.log("Starting Element of rev list is ==>", curr.value);

        let connection = prev; // Save the node before m-th
        let tail = curr; // Save the m-th node (will become the tail after reverse)

        let j = 0;
        let next = null;
        while (j < n - m + 1) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            j++;

            if (curr == null && j < n - m + 1) { // Check if `curr` becomes null before reaching the n-th node
                console.error("Index out of bounds.");
                return;
            }
        }

        console.log("End Element of rev list is ==>", prev.value);

        // Reconnect the reversed part with the rest of the list
        if (connection !== null) {
            connection.next = prev; // `prev` is now the first node of the reversed sublist
        } else {
            this.head = prev; // If `m` was 0, `prev` is the new head
        }

        tail.next = curr; // `curr` is now the node after the reversed sublist
    }


    checkPalindrome() {

        //Finding Middle Node
        let slow = this.head;
        let fast = this.head;
        let firstHead = this.head;


        let length = 0;
        while (fast && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
            length++;
        }

        let secondHead = this.reverse(slow);
        let rereversHead = secondHead;
        //This will give another list 

        while (length) {

            if (firstHead.value !== secondHead.value) {        this.reverse(rereversHead);
                return false }

            firstHead = firstHead.next;
            secondHead = secondHead.next;

            length--;
        }

        this.reverse(rereversHead);
        return true;





    }

    reverse(head) {
        let previous = null, curr = head, next;
        while (curr) {
            next = curr.next;
            curr.next = previous;
            previous = curr;
            curr = next;
        }
        return previous;
    }

}



let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(2);
myLinkedList.push(2);
myLinkedList.push(1);

console.log("Original list:");
myLinkedList.printList();

console.log(myLinkedList.checkPalindrome());
console.log(`\nList after checking Palindrome`);

myLinkedList.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Original list:
    1
    2
    3
    4
    5
    List after reversing between indexes of 2 and 4:
    1
    2
    5
    4
    3
*/
