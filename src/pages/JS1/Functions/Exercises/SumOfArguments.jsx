const SumOfArguments = () => {
  console.clear();

  const sumArray = (...args) => {
    // check if array and split
    console.log(Array.isArray(...args)); // args will become an array already --> converts anything into an array
    if (Array.isArray(...args)) {
      console.log(args); // array of an array
      const numbers = args;
      return numbers[0].reduce((a, b) => a + b); // RETURN
    } else {
      return args.reduce((a, b) => a + b); // RETURN
    }
  };

  // shortened for readability
  const sumArray2 = (...args) => {
    if (Array.isArray(...args)) {
      const numbers = args;
      return numbers[0].reduce((a, b) => a + b); // RETURN
    }
    return args.reduce((a, b) => a + b); // RETURN
  };

  const sumArray3 = (...args) => {
    // if (args.length === 1 && Array.isArray(args[0])) args = args[0]; // MOSH, unclear why checking for length === 1
    if (Array.isArray(args[0])) args = [...args[0]]; // why a shallow copy

    return args.reduce((a, b) => a + b);
  };

  console.log(sumArray(1, 2, 3));
  console.log(sumArray([1, 2, 3]));
  console.log(sumArray2(1, 2, 3));
  console.log(sumArray2([1, 2, 3]));
  console.log(sumArray3(1, 2, 3));
  console.log(sumArray3([1, 2, 3]));
};

export default SumOfArguments;
