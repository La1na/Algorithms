class Stack {
  constructor() {
    this.items = [];
  }

  empty() {
    return this.items.length === 0;
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (!this.empty()) {
      return this.items.pop();
    } else {
      return undefined; 
    }
  }

  peek() {
    if (!this.empty()) {
      return this.items[this.items.length - 1];
    } else {
      return undefined;
    }
  }

  search(element) {
    const index = this.items.indexOf(element);
    if (index !== -1) {
      return this.items.length - 1 - index;
    } else {
      return -1;
    }
  }
}

const stack = new Stack();
console.log(`Стек пуст: ${stack.empty()}`);

stack.push(10);
stack.push(20);
stack.push(30);

console.log(`Вершина стека: ${stack.peek()}`); 
console.log(`Стек пуст: ${stack.empty()}`); 

console.log(`Поиск элемента 20: Позиция с вершины - ${stack.search(20)}`); 
console.log(`Поиск элемента 40: Позиция с вершины - ${stack.search(40)}`); 

console.log(`Удаляем верхний элемент: ${stack.pop()}`); 
console.log(`Вершина стека после удаления: ${stack.peek()}`); 