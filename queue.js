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
            this.prev = null;
        }

        if (this.last) {
            this.last.next = node;
        }

        let oldLastNode = this.last;
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

function _peek(stack) {
    return stack.first;
}

function _isEmpty(stack) {
    if (stack.first === null) {
        return 'empty';
    } else return 'not empty';
}

function _display(stack) {
    let stackArr = [];
    let node = stack.first;

    while (node !== null) {
        if (node !== null) {
            stackArr.push(node.value);
        }
        node = node.next;
    }
    return stackArr;
}

function newQueue() {
    const starTrekQ = new Queue();

    starTrekQ.enqueue('Kirk');
    starTrekQ.enqueue('Spock');
    starTrekQ.enqueue('Uhura');
    starTrekQ.enqueue('Sulu');
    starTrekQ.enqueue('Checkov');

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

    starTrekDoublyQ._enqueue('Kirk');
    starTrekDoublyQ._enqueue('Spock');
    starTrekDoublyQ._enqueue('Uhura');
    starTrekDoublyQ._enqueue('Sulu');
    starTrekDoublyQ._enqueue('Checkov');

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

function returnItemLikeQueue(stack) {
    const helperStack = new _Stack();

    //until we get to first item in, move everything to a different stack
    while (stack.top.next !== null) {
        let eachItem = stack.pop();
        helperStack.push(eachItem);
    }

    //then take the first item off, and return
    let firstIn = stack.pop();

    //then put everything back in original order, so when more items are added the order stays FIFO
    while (helperStack.top !== null) {
        let eachReturningItem = helperStack.pop();
        stack.push(eachReturningItem);
    }

    //return FIFO
    return firstIn;
}

function queueUsingStacks() {
    const myStack1 = new _Stack();

    myStack1.push('1 Kirk');
    myStack1.push('2 Spock');
    myStack1.push('3 McCoy');
    myStack1.push('4 Scotty');

    let firstItem = returnItemLikeQueue(myStack1);
    return firstItem;
}
//console.log(queueUsingStacks())

//9. Square dance pairing
function pairOff(females, males) {
    if (females.first !== null && males.first !== null) {
        let f_pair = females.dequeue();
        let m_pair = males.dequeue();
        let pair = [f_pair, m_pair];
        return pair;
    } else return 'waiting on another to pair with';
}

function squareDancingPairs() {
    const m_queue = new Queue();
    const f_queue = new Queue();

    f_queue.enqueue('Jane');
    m_queue.enqueue('Frank');
    m_queue.enqueue('John');
    m_queue.enqueue('Sherlock');
    f_queue.enqueue('Madonna');
    m_queue.enqueue('David');
    m_queue.enqueue('Christopher');
    f_queue.enqueue('Beyonce');

    let pairs = pairOff(f_queue, m_queue);
    let otherPair = pairOff(f_queue, m_queue);
    return pairs;
}
//console.log(squareDancingPairs());

// 10. The Ophidian Bank
function getRandomArbitrary(min, max) {
    let chance = Math.floor(Math.random() * (max - min) + min);

    if (chance === 4) {
        return false;
    } else return true;
}

function seeTeller(bQueue) {
    if (bQueue.first !== null) {
        let nextCust = bQueue.dequeue();
        let goodPapers = getRandomArbitrary(1, 5);
        if (goodPapers === true) {
            return nextCust;
        } else bQueue.enqueue(nextCust);
    }
    return bQueue;
}

function ophidianBank() {
    const bankQueue = new Queue();

    bankQueue.enqueue('cust 1');
    bankQueue.enqueue('cust 2');
    bankQueue.enqueue('cust 3');
    bankQueue.enqueue('cust 4');
    bankQueue.enqueue('cust 5');
    bankQueue.enqueue('cust 6');
    bankQueue.enqueue('cust 7');
    bankQueue.enqueue('cust 8');
    bankQueue.enqueue('cust 9');

    let cust = seeTeller(bankQueue);
    let cust1 = seeTeller(bankQueue);
    let cust2 = seeTeller(bankQueue);
    let cust3 = seeTeller(bankQueue);
    let cust4 = seeTeller(bankQueue);

    return bankQueue;
}

//console.log(ophidianBank());
