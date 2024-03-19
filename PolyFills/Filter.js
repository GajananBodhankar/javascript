let arr = [10, 20, 30, 40, 50];

Array.prototype.myFilter = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

console.log(arr.myFilter((i) => i > 30));
