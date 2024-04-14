function f() {
    console.log(this)
}

// let Obj = {
//     getF: f.bind(null)
// }

// Obj.getF()

f.call(null)