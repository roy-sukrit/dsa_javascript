
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
        this.tail = this.head;
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
        if (this.head === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    //My SOl
    push(el) {

        const newNode = new Node(el);
        //No Element
        if (this.head == null) {

            this.head = newNode;
            this.tail = this.head;
            console.log("No Element", this)

        }

        else {

            let lastElement = this.tail;
            lastElement.next = newNode;
            // newNode.next = null;
            this.tail = newNode


        }

        this.length++;

        return this;


    }

    pop(){
	    
	    //Empty 
	    if(this.length ==0){
	
	        return undefined;
	       
	    }
	    let temp = this.head;
	    let pre = this.head;
	    while(temp.next){
	         pre = temp;
	        temp = pre.next;	        
	    }
        this.tail = pre;
        this.tail.next = null;
        this.length --;
        if(this.length == 0){
            this.head = null;
            this.tail = null;
        }
        return temp;
	}


    unshift(val){
	    
	    let newNode = new Node(val);
	    
	    //null
	    if(this.head == null){
	        this.head = newNode;
	        this.tail=newNode;
	    }
	    
	    //Not null
	    newNode.next = this.head;
	    this.head = newNode;
	    
	    
	    
	   this.length ++;
	    return this;

	    
	} 

    	
	shift(){
	    
	    //Null
	    if(this.head == null){
	        return null;
	    }
	    
	    let temp = this.head;
	    
	    this.head = this.head.next;
	    
	    this.length --;
	    
	    if(this.length == 0){
	        this.tail = null;
	    }
	    
	    temp.next = null;
	    
	    return temp;
	    
	    
	    
	}


    get(index){
	    
	    if(index <0 || index >=this.length){return undefined;}
	    
	    temp = this.head;
	    
	    let start =0;
	    
	    while(start<index){
	        
	        temp = temp.next;
	        
	        
	        
	        start++;
	    }
	    
	    return temp;
	    
	}



    set(index,value){
	    
	    const node = this.get(index);
	    if(node == null){return false;}
	    
	    let newNode = new Node(value);
	    
	    node.value = newNode.value;
	    return true;
	    
	}


    insert(index,value){
        
        const newNode = new Node(value);
        //Range of index
        if(index <0 || index > this.length){return false;}
        
        //Last
        if(index == this.length){this.push(value)}
        
        //First
        if(index == 0){this.unshift(value)}
        else{
        
        let prev = this.get(index-1);
        
        let target = prev.next;
        
        prev.next = newNode;
        newNode.next = target;
        
        }
        this.length++
        return true;
    }
    remove(index){
        if(index<0 || index >this.length) return undefined;
        if(index === 0){return this.shift()}
        if(index === this.length-1){return this.pop()}
        
        
        let prev = this.get(index-1);
        let target = prev.next;
        prev.next = target.next;
        target.next =null;
        
        this.length --;
 
        return target;
        
        
    }


    reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next
        let prev = null;
        
        while(temp){
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        
        
    }

}



let myLinkedList = new LinkedList(1);

myLinkedList.push(2)

myLinkedList.push(3)


myLinkedList.pop();

// myLinkedList.getHead();
// myLinkedList.getTail();
// myLinkedList.getLength();
// console.log("\nLinked List:");
// myLinkedList.printList();
console.log("myLinkedList", myLinkedList);


/*
    EXPECTED OUTPUT:
    ----------------
    Head: 4
    Tail: 4
    Length: 1
    
    Linked List:
    4

*/