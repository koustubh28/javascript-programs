reverseArray = (arr) => {
    var length = arr.length - 1;
    for(var i=length; i>=0; i--) {
        var elements = arr[i];
        console.log(elements);
    }
}

reverseArray( [1,2,3,4,5] );