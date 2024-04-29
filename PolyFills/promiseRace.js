function Prom1(params) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (params % 2 == 0) {
        res("Resolved");
      } else {
        rej("rejected 1");
      }
    }, 5000);
  });
}

function Prom2(params) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (params % 2 == 0) {
        res("Resolved 2");
      } else {
        rej("rejected 2");
      }
    }, 2000);
  });
}

function race(promises) {
  return new Promise(function (res, rej) {
    promises.forEach((i) => {
      Promise.resolve(i)
        .then((e) => res(e))
        .catch((e) => rej(e));
    });
  });
}
race([Prom1(11), Prom2(20)])
  .then((e) => console.log(e))
  .catch((e) => console.log(e));