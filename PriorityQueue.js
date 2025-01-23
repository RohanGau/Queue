class Item {
    constructor() {
        this.value;
        this.priority;
    }
}

let queue = [];

for(let i = 0; i < 100; i++) {
    queue.push(new Item());
}

let size = -1;


function enqueue(value, priority) {
    size += 1;
    queue[size].value = value;
    queue[size].priority = priority;
}

function peek() {
    let highPriority = Number.MIN_SAFE_INTEGER;
    let index = -1;
    for(let i = 0; i <= size; i++) {
        if(highPriority === queue[i].priority && index > -1 && queue[index].value < queue[i].value) {
            
        } else if(highPriority < queue[i].priority) {
            highPriority = queue[i].priority;
            index = i;
        }
    }
    return index;
}

function dequeue() {
    if(size < 0) {
        return;
    }
    const index = peek();
    console.log("dequeue element :", queue[index]);
    
    for(let i = index; i < size; i++) {
        queue[i] = queue[i+1];
    }
    size -= 1;
    
}

function print() {
    for(let i = 0; i <= size; i++) {
        console.log("data -> ", queue[i]);
    }
}


enqueue(10, 1);
enqueue(20, 2);
enqueue(100, 10);
enqueue(30, 3);
enqueue(70, 7);
enqueue(40, 4);
enqueue(90, 9);
enqueue(50, 5);
enqueue(60, 6);
enqueue(80, 8);


// print();

dequeue();
dequeue();
dequeue();
dequeue();

print();


