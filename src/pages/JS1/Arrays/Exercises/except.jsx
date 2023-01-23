import { useReducer } from "react";

const Except = () => {
  const numbers = [1, 2, 3, 4, 5, 1];

  const arrayExceptSomeValues = (arrayOfNumbers, arraytoExclude) => {
    let array = []; // let not const
    for (const number of arrayOfNumbers) {
      // of not in
      if (!arraytoExclude.includes(number)) {
        array.push(number);
      }
    }
    return array; // outside for loop
  };

  console.log(arrayExceptSomeValues(numbers, [1, 2]));

  // REDUCE METHOD ?

  // function filter(array, test) {
  //   return reduce(array, function(arr, el) {
  //     // Only add to the array if the test function is true
  //     if (test(el)) {
  //       arr.push(el);
  //     }

  //     // Always return the same array so you can keep filling it
  //     return arr;
  //   }, []); // Give it an empty array to start with
  // }

  // MH suggestion
  const arrayExceptSomeValues3 = (arrayOfNumbers, arraytoExclude) => {
    const newArray = arrayOfNumbers.filter(value => !arraytoExclude.includes(value));
    return newArray;
  };

  const newArray = arrayExceptSomeValues(numbers, [2, 5]);
  console.log(newArray);
  const newArray2 = arrayExceptSomeValues3(numbers, [2, 5]);
  console.log(newArray2);
};
// }

export default Except;
