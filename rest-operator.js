const toArray = (...args) => {
    return args.length;
}

console.log(toArray(1,6,8,3,4));

// Actually Rest operator does is that it takes number of parameters as an array.
// We can say that it is a technique of handling multiple parameters or arguments