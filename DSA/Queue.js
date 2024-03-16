class Queue {
  constructor() {
    this.items = [];
    this.front = -1;
    this.rear = -1;
  }
  isEmpty() {
    return this.rear < 0 ? true : false;
  }
  size() {
    return this.items.length;
  }
  print() {
    return this.items;
  }
  enqueue(value) {
    this.items.push(value);
    this.front = 0;
    this.rear++;
  }
  dequeue() {
    this.rear--;
    return this.items.shift();
  }
}

let q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log(q.print());
console.log(q.size());

