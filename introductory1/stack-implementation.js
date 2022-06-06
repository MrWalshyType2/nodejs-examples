// Stack
// - LIFO (Last In - First out)
// 
// Three main operations
// - push(): add item to top of the stack
// - pop(): remove item from top of the stack
// - peek(): return the item on top of the stack but don't remove it from the stack

class Stack {

    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }
}

myStack = new Stack();
myStack.push(5);
myStack.push(10);
myStack.push(3);

console.log(myStack.items);

myStack.pop();
console.log(myStack.items);

let item = myStack.peek();
console.log(item);
console.log(myStack.items);
