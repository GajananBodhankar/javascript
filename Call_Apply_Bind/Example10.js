function check() {
    this.name = 'gajanan';
    this.show = function () {
        this.age = 22;
        console.log(this.name);

        function one() {
            console.log(this.name, this.age);
        }
        // one.call(this)
        // var one = () => {
        //     console.log(this.name, this.age);
        // }
        one();
    };
}
let i = new check();
i.show();