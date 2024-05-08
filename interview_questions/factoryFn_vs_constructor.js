function getData(name, age, address) {
    return {
        name,
        age,
        address
    }
}

function universal() {
    return {
        doy: 2001
    }
}
universal.prototype = getData('gajanan', 22, 'hyd');
console.log({
    ...universal(),
    ...universal.prototype
})


function show(age) {
    return new Date().getFullYear() - age
}

function getData(name, age) {
    // this.name = name;
    // this.age = age;
    // this.show = show;
    return {
        name,
        age,
        show
    }
}
console.log(getData('gajanan', 21).show())
// let n = new getData('gajanan', 21)
// let i = new getData('max', 23)
// console.log(i.show(), n.show())
// console.log(i.show === n.show)