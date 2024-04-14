var status = "😎";

setTimeout(() => {
    const status = "😊"
    var Obj = {
        status: "😂",
        getStatus:  ()=> {
            console.log(this.status)
        }
    }
    Obj.getStatus()
    Obj.getStatus.call(this)
}, 0)