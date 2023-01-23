const CountOccurences = () => {
  const arrayOfNumbers = [1, 2, 2, 1, 3, 5, 6, 8, 9, 8, 8];

  const countOccurences = (array, searcElement) => {
    let count = 0;
    for (const number of array) {
      // of not in
      if (searcElement === number) {
        count += 1;
        console.log(count);
      }
    }
    return count;
  };

  //   const newSum = numbers.reduce((accumulator, currentValue) => {
  //     return accumulator + currentValue;
  //   }, 0);

  const countOccurences2 = (array, searchElement) => {
    // save reduce in a var
    const count = array.reduce((accumulator, currentValue) => {
      return searchElement === currentValue ? accumulator + 1 : accumulator;
    }, 0);
    return count; // return var
  };

  // MOSH SOLUTION rewritten
  const countOccurences3 = (array, searchElement) => {
    // return directly rather than saving to a variable and returning
    return array.reduce((accumulator, currentValue) => {
      console.table(
        `table, accumulator: ${accumulator}, currentValue: ${currentValue}, searchElement: ${searchElement}`
      );
      return searchElement === currentValue ? accumulator + 1 : accumulator;
    }, 0);
  };

  // console.table("table", arrayOfNumbers);
  console.log(countOccurences(arrayOfNumbers, 8));
  console.log(countOccurences2(arrayOfNumbers, 8));
  console.log(countOccurences3(arrayOfNumbers, 2));
};

export default CountOccurences;
