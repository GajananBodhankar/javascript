function a() {
  console.log("a");
}

setTimeout(() => console.log("B"), 0);
a();

console.log("C");

Promise.resolve().then(() => console.log("D"));

console.log("hello");

// output => a C D B
// reason => js has micro task queue and callback queue
// where, promises are attached to micro task queue and timeouts are
// attached to callback queue.
// execution order is micro task >>>>>> callback queue
