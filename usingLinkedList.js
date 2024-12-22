class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
    }
    
    enqueue(data) {
        const new_node = new Node(data);
        if(this.head === null) {
            this.head = new_node;
            return;
        }
        
        let curr = this.head;
        while(curr.next !== null) {
            curr = curr.next;
        }
        curr.next = new_node;
    }
    
    dequeue() {
        if(this.head === null) {
            console.log("queue is underflow");
            return;
        }
        const element = this.head.data;
        this.head = this.head.next;
        return element;
    }
    
    print() {
        let curr = this.head;
        while(curr !== null) {
            console.log("element -> :", curr.data);
            curr = curr.next;
        }
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("dequeue element :", queue.dequeue());
console.log("dequeue element :", queue.dequeue());
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
queue.enqueue(70);
queue.print();

