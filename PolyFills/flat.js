let arr = [10, 20, 30, [40, 50, [60, 70, [80, 90]]]];

Array.prototype.myFlat = function () {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      result = result.concat(this[i].myFlat());
    } else {
      result.push(this[i]);
    }
  }
  return result;
};

console.log(arr.myFlat());
