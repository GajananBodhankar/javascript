class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
    this.head.next = null;
    this.size = 0;
    if (this.head.value) {
      this.size++;
    }
  }
  getList() {
    let temp = this.head,
      arr = [];
    while (temp) {
      arr.push(temp.value);
      temp = temp.next;
    }
    return arr;
  }
  Append(value) {
    let node = new Node(value),
      temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    this.size++;
    temp.next = node;
  }
  Prepend(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }
  InsertIndex(value, index) {
    let temp = this.head,
      count = 0;
    while (count < index - 2) {
      temp = temp.next;
      count++;
    }
    let node = new Node(value),
      next = temp.next;
    temp.next = node;
    node.next = next;
    this.size++;
  }
  RemoveFirst() {
    this.head = this.head.next;
    this.size--;
  }
  RemoveLast() {
    let temp = this.head;
    while (temp.next.next) {
      temp = temp.next;
    }
    temp.next = null;
    this.size--;
  }
  RemoveIndex(index) {
    if (index == 0) {
      this.head = this.head.next;
      this.size--;
    } else if (index == this.size) {
      let temp = this.head;
      while (temp.next.next) {
        temp = temp.next;
      }
      temp.next = null;
      this.size--;
    } else {
      let count = 0,
        temp = this.head;
      while (count < index - 2) {
        temp = temp.next;
        count++;
      }
      temp.next = temp.next.next;
    }
  }
  RemoveValue(value) {
    let temp = this.head;
    if (this.getList().includes(value)) {
      if (temp.value == value) {
        this.head = this.head.next;
      }
      while (temp) {
        if (temp.next?.value == value) {
          temp.next = temp.next.next;
        }
        temp = temp.next;
      }
    }
  }
}

let node = new Node(10);
let list = new LinkedList(node);
list.Append(20);
list.Append(30);
list.Prepend(5);
list.Prepend(1);
list.InsertIndex(7, 3);
list.RemoveValue(10);
console.log(list.getList());
console.log(list.size);
