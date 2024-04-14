let Obj = {
    name: 'gajanan',
    age: 22
}

function Show(address) {
    console.log(this.name, this.age, address)
}



Show.call(Obj)