class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
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

function peek(stack) {
    return stack.top;
}

function isEmpty(stack) {
    if (stack.top === null) {
        return true;
    } else return false;
}

function display(stack) {
    let stackArr = [];
    let node = stack.top;

    while (node !== null) {
        if (node !== null) {
            stackArr.push(node.data);
        }
        node = node.next;
    }
    return stackArr;
}


//3. Check for palindromes using a stack
function is_palindrome(s) {
    const stack = new Stack();
    let word = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    if (word.length === 1) {
        return true;
    }
    let middle = Math.floor(word.length / 2);

    for (let i = 0; i < middle; i++) {
        stack.push(word.charAt(i));
    }

    if (word.length % 2 === 0) {
        for (let i = middle; i < word.length; i++) {
            let eachChar = stack.pop();
            if (eachChar === word.charAt(i)) {
                return true;
            } else return false;
        }
    } else {
        for (let i = middle + 1; i < word.length; i++) {
            let eachChar = stack.pop();
            if (eachChar === word.charAt(i)) {
                return true;
            } else return false;
        }
    }
}
// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));


//4. Matching parentheses
function findParenMatch(string) {
    const newStack = new Stack();
    let error = ''
    for (i = 0; i < string.length; i++) {
        if (string.charAt(i) === '(' || string.charAt(i) === '[' || string.charAt(i) === '{' || string.charAt(i) === '"' || string.charAt(i) === `'`) {
            newStack.push(i);
        } else {
        //     //console.log(newStack)
        //     if (isEmpty(newStack)) {
        //         error = 'You are missing ' + 'thing' + ' at ' + i;
        //         return error;
        //     }
        //     let required = [')', ']', '}']
        //     let newItem = string[newStack.pop()]
        //     console.log(string.charAt(i), newItem)
        //             if (!required.includes(string.charAt(i))) {               
        //                 error =  'You are missing ' + newItem + ' at ' + i;
        //                 return error;
        //             }
                
            
        // //return error
            if (string.charAt(i) === '"') {
                if (isEmpty(newStack)) {
                    error = 'You are missing " at ' + i;
                    return error;
                } else {
                    let item = string[newStack.pop()];
                    if (item !== '"') {
                        error = 'You are missing " at ' + i;
                        return error;
                    }
                }
            }
            if (string.charAt(i) === ')') {
                if (isEmpty(newStack)) {
                    error = 'You are missing ( at ' + i;
                    return error;
                } else {
                    let item = string[newStack.pop()];
                    if (item !== '(') {
                        error =  'You are missing ( at ' + i;
                        return error;
                    }
                }
            }
            if (string.charAt(i) === ']') {
                if (isEmpty(newStack)) {
                    error = 'You are missing [ at ' + i;
                    return error;
                } else {
                    let item = string[newStack.pop()];
                    if (item !== '[') {
                        error = 'You are missing [ at ' + i;
                        return error;
                    }
                }
            }
            if (string.charAt(i) === '}') {
                if (isEmpty(newStack)) {
                    error = 'You are missing { at ' + i;
                    return error;
                } else {
                    let item = string[newStack.pop()];
                    if (item !== '{') {
                        error =  'You are missing { at ' + i;
                        return error;
                    }
                }
            }
        }
    }

    if (isEmpty(newStack)) {
        return true;
    }  else if(!isEmpty(newStack)) {
        let index = newStack.pop()
        let char = string.charAt(index)

        if(char === '"' || char === `'`){
            countQuotes(char, newStack)
            // let countSingle = 0
            // let countDouble = 0

            // let eachQuote = newStack.pop()
            // if(eachQuote === '"') {
            //     countDouble = countDouble + 1
            // } else countSingle = countSingle + 1
            // console.log(countSingle, countDouble)
        } else {
        let required = ['(', '[', '{']
        required.forEach(item => {
            if(char === item) {                
                error =  'You are missing ' + item + ' at ' + (index+1);
                return error;
            }
        })
        return error}
    } 
    else {
        return error
    }
}

function countQuotes(char, newStack){
    let countSingle = 0
    let countDouble = 0

    let eachQuote = newStack.pop()
    if(eachQuote === '"') {
        countDouble = countDouble + 1
    } else if(eachQuote === `'`){
        countSingle = countSingle + 1
    } else return countSingle, countDouble, newStack
    console.log(countSingle, countDouble)
}

//counting quotes not working
//console.log(findParenMatch(`{}()""()(){}`))


//5. Sort stack
function smallestFirst(stack) {
    return stack;

    //use .pop to take off items
}
//console.log(smallestFirst(newStack()))


function newStack() {
    const starTrek = new Stack();

    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');

    let peekTop = peek(starTrek);
    let checkEmpty = isEmpty(starTrek);

    //starTrek.pop();
    //starTrek.pop();
    let displayStack = display(starTrek);
    //let palindrome = is_palindrome(starTrek);

    return starTrek;
}

//console.log(newStack())
