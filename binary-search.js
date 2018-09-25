function binary_search(array,value) {
  let length = array.length;
  let low = 0;
  let high = length - 1;

  while(low <= high) {
    mid = Math.floor( (low + high) / 2 );
    if (array[mid] == value) {
      return value + " found at position " + (mid+1);
    } else if (array[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

const items = [2,5,8,12,16,23,38,56,72,91];
console.log(binary_search(items,23));
console.log(binary_search(items,12));
