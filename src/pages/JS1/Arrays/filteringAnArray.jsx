const FilteringAnArray = () => {
  const numbers = [1, 2, -5];
  // const value = 2;

  const filteredNumbers = numbers.filter(number => {
    return number >= 0;
  });

  //shorthand, don't need return keyword for one line of code?
  const filteredNumbers2 = numbers.filter(n => n >= 0);

  console.log(filteredNumbers);
  console.log(filteredNumbers2);
};

export default FilteringAnArray;
