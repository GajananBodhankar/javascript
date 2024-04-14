function checkPassword(success, failed, password) {
    password == "gajanan@14" ? success() : failed()
}

let user = {
    name: 'gajanan bodhankar',
    loginSuccessful() {
        console.log(`${this.name} logged in`)
    },
    loginFailed() {
        console.log(`${this.name} failed to login`)
    }
}

checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user), '10');