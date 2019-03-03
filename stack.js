var top = -1;

function push(stack, x, n) {
    if (top == n-1) {
        console.log("Stack is full. Stack Overflow");
    } else {
        top = top + 1;
        stack[top] = x;
    }
    return stack;
}

function boolIsEmpty() {
    if (top == -1) {
        return true;
    } else {
        return false;
    }
}

function pop() {
    if (boolIsEmpty()) {
        console.log("Stack is empty");
    } else {
        top = top - 1;
    }
}

function size() {
    return top + 1;
}

var stackResult = push([,2,3,4], 8, 4);
console.log(stackResult);