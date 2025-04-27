// Рекурсия
function fibonacciRecursive(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
}

const nRecursive = 10;
const resultRecursive = fibonacciRecursive(nRecursive);
console.log(
  `Рекурсивное вычисление ${nRecursive}-го числа Фибоначчи: ${resultRecursive}`
);

// Итерация
function fibonacciIterative(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
      const c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
}

const nIterative = 10;
const resultIterative = fibonacciIterative(nIterative);
console.log(
  `Итеративное вычисление ${nIterative}-го числа Фибоначчи: ${resultIterative}`
);
