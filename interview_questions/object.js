var name = "gajanan";
var obj = {
  name: "inside obj",
  prop: {
    name: "inside prop",
    getName: function () {
      return this.name;
    },
  },
  getName: function () {
    return this.name;
  },
  getName2: () => this.name,
};


console.log(obj.prop.getName());
console.log(obj.getName());
console.log(obj.getName2());

// output => inside prop ,inside obj ,undefined
// because "this" keyword refers to "undefined" in an arrow function
