function check() {
    this.name = 'gajanan';
    this.show = function () {
        this.age = 22;
        console.log(this.name);
        this.name = "john"

        function one() {
            console.log(this.name, this.age);
        }
        // one.call(this)
        // var one = () => {
        //     console.log(this.name, this.age);
        // }
        one.call(this);
    };
}
let i = new check();
i.show();



let Obj = {
    name: 'gajanan',
    show: function () {
        this.name = 'max';
        console.log(this.name);
    },
};

Obj.show();