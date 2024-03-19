function Prom1(arg) {
  return new Promise(function (res, rej) {
    if (arg % 2 == 0) {
      res("resolved");
    } else {
      rej("rejected");
    }
  });
}
function Prom2(arg) {
  return new Promise(function (res, rej) {
    if (arg % 2 == 0) {
      res("resolved");
    } else {
      rej("rejected");
    }
  });
}

function any(promises) {
  let count = 0;
  return new Promise((res, rej) => {
    promises.forEach((element) => {
      Promise.resolve(element)
        .then((e) => {
          count++;
          if (count == 1) {
            res(e);
          }
        })
        .catch((e) => rej(e));
    });
  });
}

any([Prom1(10), Prom2(10)])
  .then((e) => console.log(e))
  .catch((e) => console.log(e));
