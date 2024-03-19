function Prom1(params) {
  return new Promise((res, rej) => {
    if (params % 2 == 0) {
      res("Resolved");
    } else {
      rej("rejected");
    }
  });
}

function Prom2(params) {
  return new Promise((res, rej) => {
    if (params % 2 == 0) {
      res("Resolved");
    } else {
      rej("rejected");
    }
  });
}

function all(promises) {
  let arr = [],
    total = 0;
  return new Promise(function (res, rej) {
    promises.forEach((i) => {
      Promise.resolve(i)
        .then((result) => {
          arr.push(result);
          total++;
          if (total == promises.length) {
            res(arr);
          }
        })
        .catch((e) => {
          rej(e);
        });
    });
  });
}

all([Prom1(10), Prom2(20)])
  .then((e) => console.log(e))
  .catch((e) => console.log(e));

all([Prom1(13), Prom2(20)])
  .then((e) => console.log(e))
  .catch((e) => console.log(e));
