const RestOperator = () => {
  function sum(args) {
    // have declared first argument as 'args' which is '1'
    return console.log(args);
  }

  console.log(sum(1, 2, 3));

  function sum2(...args) {
    console.log(...args); // rest operator '...' is applied on parameter, takes all arguments and combines into an array
    return args.reduce((accumulator, currentValue) => {
      return (accumulator += currentValue);
    }, 0);
  }

  console.log(sum2(4, 6, 3));

  // Mosh simplified
  function sum3(...args) {
    return args.reduce((a, b) => a + b);
  }

  console.log(sum3(4, 6, 3));

  // Discount
  function discountPrice(discount, ...basketTotal) {
    // *** rest operator is for the rest of the arguments, so must be declared last
    let total = basketTotal.reduce((a, b) => a + b);
    return total * (1 - discount);
  }

  console.log(discountPrice(0.1, 20, 30));
};

export default RestOperator;
