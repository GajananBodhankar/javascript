class Stack {
  constructor() {
    this.stack = [];
    this.top = -1;
  }
  push(value) {
    this.stack.push(value);
    this.top++;
  }
  pop() {
    this.top--;
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.top];
  }
  isEmpty() {
    return this.top == -1 ? true : false;
  }
  size() {
    return this.top + 1;
  }
  print() {
    return this.stack;
  }
}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
console.log(s.pop());
console.log(s.size());
console.log(s.print());
