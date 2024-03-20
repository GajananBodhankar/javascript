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
  let count = 0,
    errorArr = [],
    errorCount = 0;
  return new Promise(function (res, rej) {
    promises.forEach((i) => {
      Promise.resolve(i)
        .then((e) => {
          count++;
          if (count == 1) {
            res(e);
          }
        })
        .catch((e) => {
          errorArr.push(e);
          errorCount++;
          if (errorCount == promises.length) {
            rej(errorArr);
          }
        });
    });
  });
}

any([Prom1(101), Prom2(101)])
  .then((e) => console.log(e))
  .catch((e) => console.log(e));
