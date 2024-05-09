function getUser(name, age) {
    return {
        name,
        age,
        getDoY: getUser.prototype.getDoY
    }
}


getUser.prototype.getDoY = function () {
    return new Date().getFullYear() - this.age
}
let one = getUser('g', 22)
let two = getUser('a', 23)