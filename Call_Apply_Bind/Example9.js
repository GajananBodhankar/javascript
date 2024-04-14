const age = 10;

var person = {
    age: 20,
    getArrow: () => console.log(this.age),
    getAge: function () {
        console.log(this.age)
    }
}

person.getArrow()