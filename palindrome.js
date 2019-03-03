// Array Initialized. This is our Stack
var letters = [];

var word = "koustubh";

var rword = "";

//put letters of word into stack(array)
for(var i=0; i < word.length; i++) {
    letters.push(word[i]);
}

//pop off the stack in reverse order
for(var i=0; i < word.length; i++) {
    rword = rword + letters.pop();
}

if (rword === word) {
    console.log(word + " is a palindrome string");
} else {
    console.log(word + " is not a palindrome string");
}