let Obj = {
    name: 'gajanan',
    age: 22
}

function getData(address, state) {
    console.log(this.name, this.age, address, state)
}


Function.prototype.myCall = function (context, ...args) {
    if (typeof this != "function") {
        throw new Error("Can not call", this)
    }
    context.fn = this;
    context.fn(...args)
}

getData.myCall(Obj)