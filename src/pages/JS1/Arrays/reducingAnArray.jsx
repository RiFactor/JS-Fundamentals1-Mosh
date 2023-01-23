const ReducingAnArray = () => {
  const numbers = [5, 15, 23, -5];

  let sum = 0;
  for (let n of numbers) {
    sum += n;
  }
  console.log(sum);

  const newSum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0); //initialises value of accumulator to '0', loops through each item in the array starting from index 0
  console.log(newSum);

  // shorthand
  // accumulator is not initialised to a value so will take the value of the first item in the array
  // will loop through items starting from index 1 (not 0)
  const newSum2 = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
  console.log(newSum2);
};

export default ReducingAnArray;
