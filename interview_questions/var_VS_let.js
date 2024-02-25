var num = 10;
(function () {
  console.log(num);
  var num = 20;
  console.log(num);
})();

console.log(num);
num = 30;

// output => undefined 20 10
// because in the IIFE "var" is not updated, it is re-initialized and
// hence hoisting takes place and replaces the "num" with "undefined"
// before execution
