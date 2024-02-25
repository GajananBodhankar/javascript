// check();
var check = function () {
  console.log("hi");
};

// Output => check is not a function
//  Reason is=> hoisting works partially/does not work with function expression
//  It works with primitive function declarations only

myFun();
var myFun = () => {
  console.log("var function expression");
};

myFun();

function myFun() {
  console.log("function definition");
}

myFun();
