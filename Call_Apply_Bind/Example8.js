function checkPassword(ok, fail, password) {
    password == 'gajanan@14' ? ok() : fail()
}

let User = {
    name: 'Gajanan Bodhankar',
    login(result) {
        console.log(this.name, (result ? " Logged in " : " failed to login"))
    }
}

checkPassword(User.login.bind(User, true), User.login.bind(User, false), 'gajanan@14')