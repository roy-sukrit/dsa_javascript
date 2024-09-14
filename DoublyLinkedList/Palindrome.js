class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
 
class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
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

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
    push(value){
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // WRITE THE ISPALINDROME METHOD HERE //
    //                                    //
    //                                    //
    //                                    //
    //                                    //
    ////////////////////////////////////////


    // Work Needed 10:27 pm Sat
   isPalindrome() {

    if (this.length <= 1) return true; // An empty list or single element list is a palindrome

    //Finding Midpoint First
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next ) {
        slow = slow.next;
        fast = fast.next.next;
    }

    console.log("Middle Node is =>",slow);


    let firstHead = this.head;

    let secondHead = this.reverse(slow);
    let rereverseHead = secondHead;
    let i = 0;
    while( secondHead) {
        if(firstHead.value !== secondHead.value) {
            this.reverse(secondHead);
            return false;
        }

        firstHead = firstHead.next;
        secondHead = secondHead.next;

        i++;
    }

    this.reverse(rereverseHead);

    return true;
}


    reverse(head) {
        let curr = head;
        let before = null;
    
        while (curr && curr !== null) {
            before = curr.prev;
            curr.prev = curr.next;
            curr.next = before;
            curr = curr.prev;
        }
   
        return before;
    }
}



let myDoublyLinkedList = new DoublyLinkedList(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(1);

console.log("List 1:");
myDoublyLinkedList.printList();
console.log("Is List 1 a palindrome? " + myDoublyLinkedList.isPalindrome());

let myDoublyLinkedList2 = new DoublyLinkedList(1);
myDoublyLinkedList2.push(2);
myDoublyLinkedList2.push(3);
myDoublyLinkedList2.push(4);
myDoublyLinkedList2.push(5);

console.log("\nList 2:");
myDoublyLinkedList2.printList();
console.log("Is List 2 a palindrome? " + myDoublyLinkedList2.isPalindrome());

/*
    EXPECTED OUTPUT:
    ----------------
    List 1:
    1
    2
    3
    2
    1
    Is List 1 a palindrome? true

    List 2:
    1
    2
    3
    4
    5
    Is List 2 a palindrome? false
*/
