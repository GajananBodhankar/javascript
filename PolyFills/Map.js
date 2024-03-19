let arr = [10, 20, 30, 40, 50];

let result = arr.map((i) => i);

Array.prototype.myMap = function (callback) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};

console.log(arr.myMap((i) => i));
