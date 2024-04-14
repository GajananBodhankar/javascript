const age = 10;

var person1 = {
    name: "Gajanan",
    age: 21,
    getAge: function () {
        return this.age
    }
}

var person2 = {
    age: 23
}

console.log(person1.getAge.call(person2))