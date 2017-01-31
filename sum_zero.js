// given an array find sets of three that sum to zero

function sumZero(array) {
  var resultArray = [];
  array.sort();
  for (var i = 0; i < array.length - 2; i++) {
    var left = i+1;
    var right = array.length-1;
    while (right > left) {
      if (array[i] + array[right] + array[left] === 0) {
        //push this result onto the array
        resultArray.push(`(${i},${left},${right})`);
      } else if ((array[i] + array[left] + array[right]) > 0) {
        right--;
      } else if ((array[i] + array[left] + array[right]) < 0) {
        left++;
      }
    }
  }
  return resultArray;
}

//tests!!!
