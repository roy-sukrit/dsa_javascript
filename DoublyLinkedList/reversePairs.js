class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
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
        if (this.length === 0) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
            newNode.prev = currentNode;
        }
        this.length++;
    }

    // WRITE THE SWAPPAIRS METHOD HERE //
    //                                 //
    //                                 //
    //                                 //
    //                                 //
    /////////////////////////////////////

    swapPairs() {

        let curr = this.head;
        let next = curr.next;

        // Edge case: If the list is empty or has only one node, no need to swap
        if (!curr || !curr.next || !this.length) return;


        while (curr && curr.next) {


            console.log("Curr", curr);
            next = curr.next;

            console.log("next", next);
            let secondHead = next.next;
            console.log("secondHead", secondHead);
            

            next.prev = curr.prev;
            next.next = curr;
            curr.prev = next;

            curr.next = secondHead;

            // If there's a secondHead, fix its prev pointer
            if (secondHead) {
                secondHead.prev = curr;
            } else {
                // If there is no secondHead, we are at the end, update the tail
                this.tail = curr;
            }


            // If curr was the head, update the head
            if (curr === this.head) {
                this.head = next; // The new head is now 'next'
            }


            // Step 4: Move to the next pair
            curr = secondHead; // Move to the next pair (third node onwards)




        }




    }


}



let myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(4);
myDoublyLinkedList.push(5);

console.log("Original List 1:");
myDoublyLinkedList.printList();

myDoublyLinkedList.swapPairs();
console.log("\nList 1 after swapping pairs:");
myDoublyLinkedList.printList();

let myDoublyLinkedList2 = new DoublyLinkedList(1);
myDoublyLinkedList2.push(2);
myDoublyLinkedList2.push(3);
myDoublyLinkedList2.push(4);
myDoublyLinkedList2.push(5);
myDoublyLinkedList2.push(6);

console.log("\nOriginal List 2:");
myDoublyLinkedList2.printList();

myDoublyLinkedList2.swapPairs();
console.log("\nList 2 after swapping pairs:");
myDoublyLinkedList2.printList();

/*
    EXPECTED OUTPUT:
    ----------------
    Original List 1:
    1
    2
    3
    4
    5

    List 1 after swapping pairs:
    2
    1
    4
    3
    5

    Original List 2:
    1
    2
    3
    4
    5
    6

    List 2 after swapping pairs:
    2
    1
    4
    3
    6
    5
*/
