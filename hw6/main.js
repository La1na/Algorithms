function quickSort(arr) {
  if (arr.length < 2) {
    return arr; 
  } else {
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];
    const less = [];
    const greater = [];

    for (let i = 0; i < arr.length; i++) {
      if (i === pivotIndex) {
        continue;
      }
      if (arr[i] <= pivot) {
        less.push(arr[i]);
      } else {
        greater.push(arr[i]);
      }
    }

    return [...quickSort(less), pivot, ...quickSort(greater)];
  }
}

const myArray = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quickSort(myArray);
console.log(`Исходный массив: ${myArray}`);
console.log(`Отсортированный массив: ${sortedArray}`);


function quickSortIterative(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const stack = [[0, arr.length - 1]]; 
  const result = [...arr]; 

  while (stack.length) {
    const [low, high] = stack.pop();

    if (low < high) {
      const pivot = result[high];
      let i = low - 1;

      for (let j = low; j < high; j++) {
        if (result[j] <= pivot) {
          i++;
          [result[i], result[j]] = [result[j], result[i]]; 
        }
      }


      [result[i + 1], result[high]] = [result[high], result[i + 1]];
      const partitionIndex = i + 1;

   
      stack.push([low, partitionIndex - 1]);
      stack.push([partitionIndex + 1, high]);
    }
  }

  return result;
}


const myArray2 = [3, 6, 8, 10, 1, 2, 1];
const sortedArray2 = quickSortIterative(myArray2);
console.log(`Исходный массив: ${myArray2}`);
console.log(`Отсортированный массив (итеративно): ${sortedArray2}`);