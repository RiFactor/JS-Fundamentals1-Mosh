const GetMax = () => {
  const numbers = [1, 2, 8, 5, 9, 3, 4, 6];

  const getMax = array => {
    console.log(typeof array);
    if (!(typeof array === "object")) {
      console.error("Enter an array");
      return;
    }
    if (array.length <= 0) {
      return [];
    }
    let max = "";
    for (const number of array) {
      if (number > max) {
        max = number;
      }
    }
    return max;
  };

  // MOSH SOLUTION rewritten
  const getMax2 = array => {
    console.log(typeof array);
    if (array.length === 0) {
      return undefined;
    }
    // let max = "";
    // for (const number of array) {
    //   if (number > max) {
    //     max = number;
    //   }
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (max < array[i]) {
        max = array[i];
      }
    }
    return max;
  };

  const getMax3 = array => {
    if (array.length === 0) {
      return undefined;
    }
    return array.reduce((accumulator, currentValue) => {
      // console.log(currentValue, accumulator);
      return currentValue > accumulator ? currentValue : accumulator;
    }, []);
  };

  // MOSH EXAMPLE rewritten
  const getMax4 = array => {
    if (array.length === 0) return undefined;
    return array.reduce((a, b) => (a > b ? a : b));
  };

  console.log(getMax([6, 1, 5, 9, 3]));
  console.log(getMax2([6, 1, 5, 9, 3]));

  console.log(getMax3([6, 1, 5, 9, 3]));
  console.log(getMax4([6, 1, 5, 9, 3]));
};

export default GetMax;
