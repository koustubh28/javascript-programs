function isThisString(input) {
  if (input == "" || input == null) {
    console.log("You must enter some valid input!");
  } else if (input instanceof Array) {
    console.log("This input is of type Array");
  } else if (typeof(input) === 'string') {
    console.log("Input is of String type");
  } else {
    console.log("Invalid Input");
  }
}

isThisString();
isThisString( [1,2,3,4] );
isThisString('Koustubh');
