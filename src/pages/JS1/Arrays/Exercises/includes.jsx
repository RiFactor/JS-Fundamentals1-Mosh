const Includes = () => {
  const numbers = [1, 2, 3, 4];
  console.log("🚀 ~ file: includes.jsx:4 ~ Includes ~ numbers", numbers);

  const homeMadeIncludes = (array, searchElement) => {
    for (const number of array) {
      if (number === searchElement) return true;

      console.log(number, number === searchElement);
    }
    return false;
  };

  console.log(homeMadeIncludes(numbers, 6));
};

export default Includes;
