

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
    //let palindrome = is_palindrome(starTrekQ);

    return _displayStack;
}

console.log(newQueue());
