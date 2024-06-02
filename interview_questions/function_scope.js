var a = 10;

function check() {
    console.log(a)
}
check();
a = 20;
check();

// output- 10 20
// Once a gets reassigned, wherever it is used gets
// updated. 