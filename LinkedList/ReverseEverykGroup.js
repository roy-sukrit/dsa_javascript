//INcomplete

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



    reverseKgroup(k) {
        if ( k<=1|| this.head == null) {
            console.error("Invalid indices or empty list.");
            return this;
        }

        let prev = null;
        let curr = this.head;
        let next = curr.next;

        let last,newEnd;
        let i = 0;

        while(true){
        for(i =0;curr!== null && i<k;i++){


            last = prev;
            newEnd = curr;


            curr.next = prev;
            prev = curr;
            curr= next;

            if(next !== null){
                next = next.next;
            }

            

        }

        if(last!==null){

            last.next=prev;

        }
        else{
            this.head = prev;
        }

        newEnd.next = curr;
        return 

    }


    }


    reOrderList() {

        //Finding Middle Node
        let slow = this.head;
        let fast = this.head;
        let firstHead = this.head;
        let temp;


        let length = 0;
        while (fast && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
            length++;
        }

        let secondHead = this.reverse(slow);
        // let rereversHead = secondHead;
        //This will give another list 

        while (firstHead !== null && secondHead !== null) {

            console.log("firstHead",firstHead);
            console.log("secondHead",secondHead);

            //For 1st Head
            temp = firstHead.next;
            firstHead.next= secondHead;
            firstHead = temp;

            //For 2nd Head
            temp = secondHead.next;
            secondHead.next = firstHead;
            secondHead = temp


            }

       
        return this;





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
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

console.log(myLinkedList.reverseKgroup(2));
console.log(`\nList after reverseKgroup==>`);

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
