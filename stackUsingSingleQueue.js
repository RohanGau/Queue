/*Javascript Program to implement a stack using
only one queue */

// One inbuilt queue
class Stack {
    constructor() {
        this.q = [];
    }
    
    // Push operation
    push(data) {
        
        //  Get previous size of queue
        let s = this.q.length;
        
        // Push the current element
        this.q.push(data);
        
        // Pop all the previous elements and put them after
        // current element
        for (let i = 0; i < s; i++) {
            console.log("before :", this.q);
            // Add the front element again
            this.q.push(this.q[0]);
            
            // Delete front element
            this.q.shift();
            
            console.log("after :", this.q);
        }
    }
    
    // Removes the top element
    pop() {
        // if no elements are there in q1
        if (this.q.length == 0)
            console.log("No elements");
        else
            return this.q.shift();
    }

    top() {
        if (this.q.length == 0)
            return -1;
        return this.q[0];
    }

    size() {
        console.log(this.q.length);
    }

    isEmpty() {
        // return true if the queue is empty.
        return this.q.length == 0;
    }

    front() {
        return this.q[0];
    }
    
    print() {
        for(let i = 0; i < this.q.length; i++) {
            console.log("element --> ", this.q[i]);
        }
        
    }
}

// Driver code


const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
console.log("pop element --> ", stack.pop())
stack.print();
