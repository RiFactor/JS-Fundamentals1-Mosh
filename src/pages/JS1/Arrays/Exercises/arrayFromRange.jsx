const ArrayFromRange = () => {
  console.clear();
  const arrayFromRange = (a, b) => {
    const numbers = [];
    for (let i = a; i <= b; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  const newRange = arrayFromRange(-10, -5);
  console.log(newRange);
};

export default ArrayFromRange;
