const ErrorHandling = () => {
  console.clear();
  console.log("Error Handling");

  function countOccurences(array, checker) {
    // console.log(array);
    // console.log(checker);
    if (!Array.isArray(array)) {
      throw new Error("Supply an array");
    }

    return array.reduce((accumulator, current) => {
      const occurence = current === checker ? 1 : 0;
      return accumulator + occurence;
    }, 0); // initialise to 0 o/w will take value of first item in array!
  }

  try {
    const numbers = [1, 2, 3, 5, 4, 5, 1, 5];
    const countTimes = countOccurences(true, 5); // null, undefined, boolean etc
    console.log(countTimes);
  } catch (exception) {
    console.log(exception.message);
  }
};

export default ErrorHandling;
