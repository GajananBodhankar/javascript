class User {
    name = "gajanan"
}
class Employee {
    lname = "Max"
}

// Prototypal inheritance using class

let i = new Employee();
i.prototype = new User();
console.log(i.prototype)
console.log(i.prototype.name)

function One() {
    this.name = 'max';
    this.age = 22
}

function Two() {
    console.log(this.age, this.name)
}

Two.prototype = new One();
let j = new Two();
console.log(j.name)