function transpose(a) {
    console.log(a);
    // Calculate the width and height of the Array
    var w = a.length || 0;
    
    //Width result
    console.log("Width: " + w);
    var h = a[0] instanceof Array ? a[0].length : 0;

    //array inside of array
    //console.log("First inside of Array: " + a[0]);

    //Height result
    //console.log("Height: " + h);

    // In case it is a zero matrix, no transpose routine needed.
    if(h === 0 || w === 0) { return []; }
  
    /**
     * @var {Number} i Counter
     * @var {Number} j Counter
     * @var {Array} t Transposed data is stored in this array.
     */
    var i, j, t = [];
  
    // Loop through every item in the outer array (height)
    for(i=0; i<h; i++) {
  
      // Insert a new row (array)
      t[i] = [];
      //console.log(t[i]);

      // Loop through every item per item in outer array (width)
      for(j=0; j<w; j++) {
  
        // Save transposed data.
        t[i][j] = a[j][i];
        //console.log(t[i][j]);
        console.log("a[j][i]: " , a[j][i]);
      }
    }
  
    return t;
  }
  
  console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]));