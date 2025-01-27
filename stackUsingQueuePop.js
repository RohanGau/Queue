/*Javascript Program to implement a stack using
two queue */

// Two inbuilt queues
class Stack {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    push(x) {
        this.q1.push(x);
    }

    pop() {
       if(this.q1.length === 0) {
           return;
       }
       // Leave one element in q1 and push other in q2
       while(this.q1.length !== 1) {
           this.q2.push(this.q1[0]);
           this.q1.shift();
       }
       const element = this.q1.shift();
       this.q = this.q1;
       this.q1 = this.q2;
       this.q2 = this.q;
       return element;
    }
    
    print() {
        for(let i = this.q1.length - 1; i >= 0; i--) {
            console.log("element --> ", this.q1[i]);
        }
    }

    top() {
        if(this.q1.length === 0) {
            return -1;
        }
        
        while(this.q1.length !== 1) {
            this.q2.push(this.q1[0]);
            this.q1.shift();
        }
        
        const element = this.q1.shift();
        this.q = this.q1;
        this.q1 = this.q2;
        this.q2 = this.q;
        return element;
    }

    size() {
        console.log(this.q1.length);
    }

    isEmpty() {
        // return true if the queue is empty.
        return this.q1.length == 0;
    }

    front() {
        return this.q1[0];
    }
}

// Driver code


let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(40);

console.log("current size: ");
s.size();
const element = s.pop();
console.log("pop element :", element);
s.print();
// s
// console.log(s.top());
// s.pop();
// console.log(s.top());
// s.pop();
// console.log(s.top());

// console.log("current size: ");


