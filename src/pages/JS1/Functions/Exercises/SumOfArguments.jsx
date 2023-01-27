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
    // MOSH, unclear why checking for length === 1: in case of passing multiple arrays (but need another check to stop passing more than one arg)
    // if (args.length === 1 && Array.isArray(args[0])) args = [...args[0]];
    if (Array.isArray(args[0])) args = [...args[0]]; // shallow copy rather than 'args = args[0];', safer! although reduce will make a shallow copy anyway, but will reduce risk of modification here

    return args.reduce((a, b) => a + b);
  };

  const numbers = [1, 2, 3];
  console.log(sumArray(1, 2, 3));

  // if a constant is passed here and the const is modified,
  // it may modify sumArray3 unintentionally if not shallow copied, that's why it is safer
  console.log(sumArray(numbers));
  console.log(sumArray2(1, 2, 3));
  console.log(sumArray2([1, 2, 3]));
  console.log(sumArray3(1, 2, 3));
  console.log(sumArray3([1, 2, 3]));
};

export default SumOfArguments;
