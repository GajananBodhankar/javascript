function a() {
  console.log("a");
}

setTimeout(() => console.log("B"), 0);
a();

console.log("C");

Promise.resolve().then(() => console.log("D"));

console.log("hello");
