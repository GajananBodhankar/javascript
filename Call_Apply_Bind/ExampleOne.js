const Person = {
    name: 'Gajanan'
}

function Greet() {
    console.log("Hello", this.name)
}

Greet.call(Person)