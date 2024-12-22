class Queue {
    constructor(size) {
        this.queue = new Array(size);
        this.front = 0;
        this.size = 0;
        this.capacity = size;
    }
    
    enqueue(data) {
        if(this.size === this.capacity) {
            console.log("Queue is overflow");
            return;
        }
        // Add the element to the rear
        this.queue[this.front + this.size] = data;
        this.size++;
    }
    
    dequeue() {
        if(this.size === 0) {
            console.log("Queue is underflow");
            return;
        }
        const element = this.queue[this.front];
        // shift all the element to the left side
        for(let i = 1; i < this.size; i++) {
            this.queue[i-1] = this.queue[i];
        }
        this.size--;
        return element;
    }
    
    print() {
        for(let i = 0; i < this.queue.length; i++) {
            console.log("element -> ", this.queue[i]);
        }
    }
}

const queue = new Queue(10);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("dequeue element :", queue.dequeue());
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
queue.enqueue(70);
queue.print();

