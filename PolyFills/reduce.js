let arr = [10, 20, 30, 40, 50];

let result = arr.reduce((acc, i) => (acc += i), 0);

Array.prototype.myReduce = function (callback, initialValue) {
  let res = 0;
  for (let i = 0; i < this.length; i++) {
    let acc = Number(initialValue)
      ? callback(initialValue, this[i], i, this)
      : this[i];
    res += acc;
  }
  return res;
};

console.log(arr.myReduce((acc, i) => (acc += i), 0));
