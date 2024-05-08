// -------------CASE 1---------------------
// function getData(name, age, address) {
//     return {
//         name,
//         age,
//         address
//     }
// }

// function universal() {
//     return {
//         doy: 2001
//     }
// }
// universal.prototype = getData('gajanan', 22, 'hyd');
// console.log({
//     ...universal(),
//     ...universal.prototype
// })

// ------------------CASE 2--------------------
// function getData(name, age) {
//     return {
//         name,
//         age,
//         getDoY: function () {
//             return new Date().getFullYear() - age
//         }
//     }
// }

// let i = getData('gajanan', 22)
// let j = getData('gargi', 18)

// Here, a new getDoY is created each time we call getData
// THIS IS A DRAWBACK AND HAS TO BE OVERCOMED BY CONSTRUCTOR FUNCTION
// console.log(i.getDoY == j.getDoY) ===> o/p - false

// -------------------CASE -3--------------------------
// SOlution

function getDoY() {
    return new Date().getFullYear() - this.age
}

function getData(name, age) {
    this.name = name;
    this.age = age;
    this.getDoY = getDoY
}

let i = new getData("gaj", 22)
let j = new getData("gaj", 22)

console.log(i.getDoY == j.getDoY) // o/p -> True