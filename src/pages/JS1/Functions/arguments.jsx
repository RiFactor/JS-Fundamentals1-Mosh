const Arguments = () => {
  console.clear();
  console.log("arguments");
  function sum(a, b) {
    console.log(arguments);
    return a + b;
  }

  sum(1, 4);

  // console.log(sum(1, 2));

  // function sum2(a, b) {
  //   let total = 0;
  //   console.log("arg", arguments);
  //   for (const arg of arguments) {
  //     total += arg;
  //   }
  //   return total;
  // }

  // function sum3(a, b) {
  //   console.log(arguments);
  //   return a + b;
  // }

  // console.log(sum3(1, 2, 3, 4, 5));

  // console.log(sum2(1, 5, 7, 8, 11));
};

export default Arguments;
