let Obj = {
    name: 'gajanan',
    age: 22
}

function getData(address, state) {
    console.log(this.name, this.age, address, state)
}


Function.prototype.myBind = function (context, ...args) {
    if (typeof this != "function") {
        throw new Error("Not callable")
    }
    context.fn = this;
    return function (...arg2) {
        context.fn(...args, ...arg2)
    }
}

let x = getData.myBind(Obj)

x()