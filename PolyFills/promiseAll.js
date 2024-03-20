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
  let result = [],
    total = 0;
  return new Promise(function (res, rej) {
    promises.forEach((i) => {
      Promise.resolve(i)
        .then((val) => {
          result.push(val);
          total++;
          if (total == promises.length) {
            res(result);
          }
        })
        .catch((e) => rej(e));
    });
  });
}

all([Prom1(2), Prom2(2)])
  .then((res) => console.log(res))
  .catch((e) => console.log(e));
