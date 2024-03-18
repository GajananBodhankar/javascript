function Prom1(params) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (params % 2 == 0) {
        res("Resolved");
      } else {
        rej("rejected");
      }
    }, 5000);
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
          console.log(total);
        })
        .catch((e) => {
          rej(e);
        });
    });
  });
}

function race(promises) {
  return new Promise(function (res, rej) {
    promises.forEach(async (i) => {
      try {
        let x = await i;
        res(x);
      } catch (e) {
        rej(e);
      }
    });
  });
}
race([Prom1(10), Prom2(21)])
  .then((e) => console.log(e))
  .catch((e) => console.log(e));
