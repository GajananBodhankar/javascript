let Obj = {
    'a': [10, 20, 30],
    'b': [4, 5, 6],
    'c': [2]
}

function changeObj(Obj, key, value) {
    let resul = [...Obj[key], value]
    resul.reverse()
    delete Obj[key]
    Obj = {
        [key]: resul,
        ...Obj,
    }
    console.log(Obj)
}

changeObj(Obj, 'c', 4)