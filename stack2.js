var Stack = function() {
    this.count = 0;
    this.storage = {};

    //Adds value at the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    //Removes and returns the value at the end of the stack
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete result;
        return result;
    }

    this.size = function() {
        return this.count;
    }

    this.peek = function(value) {
        return this.storage[this.count-1];
    }

}

var myStack = new Stack();
myStack.push("FreeCodeCamp");
myStack.push("Study Smart");
myStack.push("Western Academy");

console.log(myStack.size());
