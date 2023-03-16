function summary() {
  let count = 0;

  function inner(num) {
    count += num;
    console.log(count);
  }

  return inner;
}

const sum = summary();

sum(3);
sum(5);
sum(20);