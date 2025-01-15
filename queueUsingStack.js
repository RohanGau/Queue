// Javascript program to implement Queue using  
// two stacks with costly enQueue()  

class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    
    enqueue(data) {
        // move all the element from s1 to s2
        while(this.stack1.length!==0) {
            this.stack2.push(this.stack1.pop());
        }
        // push item into stack1
        this.stack1.push(data);
        
        // push everything back to stack 1
        while(this.stack2.length !== 0) {
            this.stack1.push(this.stack2.pop());
        }
    }
    
    dequeue() {
        if(this.stack1.length === 0) {
            console.log("stack is underflow ");
            return;
        }
        return this.stack1.pop();
    }
    
    print() {
        for(let i = this.stack1.length - 1; i >= 0; i--) {
            console.log("element :", this.stack1[i]);
        }
    }
}


// Javascript program to implement Queue using  
// two stacks with costly deQueue()  

class Queue1 {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    
    enqueue(data) {
        // push everything on stack 1
        this.stack1.push(data);
    }
    
    dequeue() {
        if(this.stack1.length === 0) {
            console.log("stack is underflow")
            return;
        }
        // move all the element from stack1 to stack2 except index 1
        while(this.stack1.length !== 1) {
            this.stack2.push(this.stack1.pop());
        }
        // pop out the last value
        const element = this.stack1.pop();
        // move element from stack 2 to stack1
        
        while(this.stack2.length !== 0) {
            this.stack1.push(this.stack2.pop());
        }
        
        return element;
    }
    
    print() {
        for(let i = 0; i < this.stack1.length; i++) {
            console.log("element :", this.stack1[i]);
        }
    }
}

// Javascript program to implement Queue using  
// single stacks 

class Queue2 {
    constructor() {
        this.stack = [];
    }
    
    enqueue(data) {
        const length = this.stack.length;
        this.stack.push(data);
        
        for(let i = 0; i < length; i++) {
            this.stack.push(this.stack[0]);
            this.stack.shift();
        } 
    }
    
    dequeue() {
       if(this.stack.length === 0) {
           console.log("stack underflow");
           return;
       } 
       return this.stack.pop();
    }
    
    print() {
        for(let i = 0; i < this.stack.length; i++) {
            console.log("element :", this.stack[i]);
        }
    }
}


const queue = new Queue2();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.print();
console.log("dequeue :", queue.dequeue());
queue.print();




