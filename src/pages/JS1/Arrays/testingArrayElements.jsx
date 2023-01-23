const TestingArrayElements = () => {
  const numbers = [1, -2, 3];

  // .every: returns a boolean, stops looping once first false is found, returns true if all are true
  const checkAllPositive = numbers.every(function (value) {
    return value >= 0;
  });
  console.log(checkAllPositive);

  // .some: returns a boolean, stops looping once first true is found, returns true if at least one is true
  const checkSomePositive = numbers.some(number => {
    return number >= 0;
  });
  console.log(checkSomePositive);
};

export default TestingArrayElements;
