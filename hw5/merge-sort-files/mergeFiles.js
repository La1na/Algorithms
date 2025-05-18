const fs = require('fs');
const path = require('path');


function readNumbersFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  return content
    .split('\n')
    .map(line => line.trim())
    .filter(line => line !== '')
    .map(Number);
}

function mergeTwoSortedArrays(a, b) {
  const result = [];
  let i = 0, j = 0;
  
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      result.push(a[i++]);
    } else {
      result.push(b[j++]);
    }
  }


  return result.concat(a.slice(i)).concat(b.slice(j));
}

function mergeSortedArrays(arrays) {
  return arrays.reduce((merged, current) => mergeTwoSortedArrays(merged, current), []);
}

function mergeFiles(inputFiles, outputFile) {
  const arrays = inputFiles.map(file => readNumbersFromFile(file));
  const merged = mergeSortedArrays(arrays);
  fs.writeFileSync(outputFile, merged.join('\n'), 'utf-8');
  console.log(`File successfully created: ${outputFile}`);
}

const inputFiles = ['input1.txt', 'input2.txt', 'input3.txt'];
const outputFile = 'output.txt';

mergeFiles(inputFiles, outputFile);
