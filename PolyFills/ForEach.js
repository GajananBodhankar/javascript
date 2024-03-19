let arr = [10, 20, 30, 40, 50];

// arr.forEach((i) => console.log(i));

Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

arr.myForEach((i) => console.log(i));
