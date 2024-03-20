function Prom1(arg) {
  return new Promise(function (res, rej) {
    if (arg % 2 == 0) {
      res("resolved prom 1");
    } else {
      rej("rejected 1");
    }
  });
}
function Prom2(arg) {
  return new Promise(function (res, rej) {
    if (arg % 2 == 0) {
      res("resolved prom 2");
    } else {
      rej("rejected 2");
    }
  });
}

function allSettled(promises) {
  let result = promises.map((i) =>
    Promise.resolve(i).then(
      (val) => ({ status: "fulfilled", value: val }),
      (e) => ({ status: "rejected", reason: e })
    )
  );
  return all(result);
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

allSettled([Prom1(10), Prom2(21)])
  .then((e) => console.log(e))
  .catch((e) => console.log(e));
