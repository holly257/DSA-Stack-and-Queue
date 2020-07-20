

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
    //change
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

console.log(newDoublyQueue());
