var status = "😎";

setTimeout(() => {
    const status = "😊"
    var Obj = {
        status: "😂",
        getStatus: function () {
            console.log(this.status)
        }
    }
    Obj.getStatus()
    // Here, we are passing global this to getStatus function
    // this never points to a function for eg:setTimeOut
    // this either points to global window object or to the Object it belongs

    Obj.getStatus.call(this)
}, 0)
// Run in browser, in VS code output might defer