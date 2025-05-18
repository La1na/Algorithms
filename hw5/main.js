function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

function merge(leftArr, rightArr) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}


console.log(mergeSort([5, 2, 8, 1, 9, 4])); 
console.log(mergeSort([])); 
console.log(mergeSort([3, 3, 3, 3])); 
console.log(mergeSort([5, 4, 3, 2, 1])); 
console.log(mergeSort([1, 3, 2, 4, 5])); 
console.log(mergeSort([10, -5, 0, 5, -10])); 
console.log(mergeSort([7])); 