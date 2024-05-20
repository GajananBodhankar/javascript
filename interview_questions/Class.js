class User {
    name = "gajanan"
}
class Employee {
    constructor() {
        console.log(this.name)
    }
    lname = "Max"
}

// Prototypal inheritance using class
// let e = new Employee();
// e.prototype = new User();
// console.log(e.prototype.name)

function One() {
    this.name = 'max';
    this.age = 22
}

function Two() {
    console.log(this.age, this.name)
}

// Two.prototype = new One();
// let j = new Two();
// console.log(j.name)

let t = new Two();
t.prototype = new One();
console.log(t.prototype.name, t.prototype.age)