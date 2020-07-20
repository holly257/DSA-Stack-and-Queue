
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

    pop(){
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

function peek(stack){
    return stack.top;
}

function isEmpty(stack){
    if(stack.top === null){
        return 'empty'
    }
    else return 'not empty'
}

function display(stack){

    let stackArr = [];
    let node = stack.top

    while(node !== null){
        if(node !== null){
            stackArr.push(node.data)
        }
        node = node.next
    }
    return stackArr;
}

function is_palindrome(s) {
    let word = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    
    let reversedStr = ''
    for(i=word.length-1; i>=0; i--){
        let eachChar = word.charAt(i)
        reversedStr = ''.concat(reversedStr, eachChar)
    }

    if(word == reversedStr){
        return true
    } else return false
}
//this logic might help re-write ^ using stacks
// for(i=0; i<string.length; i++){
//     let letter = newStack.pop()
//     if(letter == ')' && string.charAt(i) == '('){
//         continue;
//     }
//     if(letter === string.charAt(i)){
//         return false;
//     }
// }


// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

//4. Matching parentheses
function findParenMatch(string){
    let havePair = true;
    const newStack = new Stack();
    for(i=0; i<string.length; i++){
        newStack.push(string.charAt(i))
    }

    for(i=0; i<string.length; i++){
        let letter = newStack.pop()
        if(letter === ')' || letter === '('){
            havePair = !havePair;
            continue;
        } 
    }

    if(havePair === false){
        return 'You are missing a parentheses';
    } else return havePair;
}

console.log(findParenMatch('()()'))

function newStack(){
    const starTrek = new Stack();

    starTrek.push('Kirk')
    starTrek.push('Spock')
    starTrek.push('McCoy')
    starTrek.push('Scotty')

    let peekTop = peek(starTrek);
    let checkEmpty = isEmpty(starTrek);

    starTrek.pop();
    starTrek.pop();
    let displayStack = display(starTrek);
    //let palindrome = is_palindrome(starTrek);

    return displayStack;
}


//console.log(newStack())

