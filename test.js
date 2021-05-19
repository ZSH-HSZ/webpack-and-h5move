const test = () =>
  new Promise((resolve) => {
    console.log(11);
    resolve();
  });
test().then((res) => console.log(22));
console.log(33);
