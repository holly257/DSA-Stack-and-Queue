

class _Node_ {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node_(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }

        this.last = node;
    }

    dequeue() {
        if (this.first === null) {
            return;
        }
        let node = this.first;
        this.first = this.first.next;

        if (node === this.last) {
            this.last = null;
        }
        return node.value;
    }
}

class DoublyLinkedQueue {
    constructor() {
        this.first = null;
        this.last = null;
        this.prev = null;
    }

    _enqueue(data) {
        const node = new _Node_(data);

        if (this.first === null) {
            this.first = node;
            this.prev = null
        }

        if (this.last) {
            this.last.next = node;
        }

        let oldLastNode = this.last
        this.last = node;
        this.last.prev = oldLastNode;
    }
    
    _dequeue() {
        if (this.first === null) {
            return;
        }
        let node = this.first;
        this.first = this.first.next;
        this.first.prev = null;

        if (node === this.last) {
            this.last = null;
        }
        return node.value;
    }
}


function _peek(stack){
    return stack.first;
}

function _isEmpty(stack){
    if(stack.first === null){
        return 'empty'
    }
    else return 'not empty'
}

function _display(stack){

    let stackArr = [];
    let node = stack.first

    while(node !== null){
        if(node !== null){
            stackArr.push(node.value)
        }
        node = node.next
    }
    return stackArr;
}

function newQueue() {
    const starTrekQ = new Queue();

    starTrekQ.enqueue('Kirk')
    starTrekQ.enqueue('Spock')
    starTrekQ.enqueue('Uhura')
    starTrekQ.enqueue('Sulu')
    starTrekQ.enqueue('Checkov')

    let _peekTop = _peek(starTrekQ);
    let _checkEmpty = _isEmpty(starTrekQ);

    starTrekQ.dequeue();
    starTrekQ.dequeue();
    let _displayStack = _display(starTrekQ);

    return starTrekQ;
}

//console.log(newQueue());


function newDoublyQueue() {
    const starTrekDoublyQ = new DoublyLinkedQueue();

    starTrekDoublyQ._enqueue('Kirk')
    starTrekDoublyQ._enqueue('Spock')
    starTrekDoublyQ._enqueue('Uhura')
    starTrekDoublyQ._enqueue('Sulu')
    starTrekDoublyQ._enqueue('Checkov')

    let _peek_Top = _peek(starTrekDoublyQ);
    let _checkEmpty = _isEmpty(starTrekDoublyQ);

    //starTrekDoublyQ._dequeue();
    //starTrekDoublyQ._dequeue();
    let _displayStack = _display(starTrekDoublyQ);
    //return _displayStack
    return starTrekDoublyQ;
}

//console.log(newDoublyQueue());


//8. Queue implementation using two stacks
class _Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

function returnItemLikeQueue(stack){
    const helperStack = new _Stack()

    //until we get to first item in, move everything to a different stack
    while(stack.top.next !== null){
        let eachItem = stack.pop()
        helperStack.push(eachItem)
    }

    //then take the first item off, and return 
    let firstIn = stack.pop()

    //then put everything back in original order, so when more items are added the order stays FIFO
    while(helperStack.top !== null) {
        let eachReturningItem = helperStack.pop()
        stack.push(eachReturningItem)
    }

    //return FIFO
    return firstIn
}

function queueUsingStacks() {
    const myStack1 = new _Stack()

    myStack1.push('1 Kirk');
    myStack1.push('2 Spock');
    myStack1.push('3 McCoy');
    myStack1.push('4 Scotty');

    let firstItem = returnItemLikeQueue(myStack1)
    console.log(myStack1)
    return firstItem;
}

console.log(queueUsingStacks())
