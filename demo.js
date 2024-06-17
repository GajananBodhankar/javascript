function One() {
    this.name = 'gajanan';
    this.age = 22
}

function Two() {
    console.log(this.name, this.age)
}

let i = new Two();
i.prototype = new One();