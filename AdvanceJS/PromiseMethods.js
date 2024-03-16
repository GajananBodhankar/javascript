function PromThree(val) {
  return new Promise(function (res, rej) {
    if (val % 2) {
      rej("Promise Three rejected");
    } else {
      res("Promise Three resolved");
    }
  });
}
function PromOne(val) {
  return new Promise(function (res, rej) {
    if (val % 2) {
      rej("Promise One rejected");
    } else {
      res("Promise One resolved");
    }
  });
}

function PromTwo(val) {
  return new Promise(function (res, rej) {
    if (val % 2) {
      rej("Promise Two rejected");
    } else {
      res("Promise Two resolved");
    }
  });
}

Promise.race([PromOne(11), PromThree(10), PromTwo(10)]).then((e) =>
  console.log(e)
);
