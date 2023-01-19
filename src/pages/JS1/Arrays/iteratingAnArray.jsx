const IteratingAnArray = () => {
  console.clear();
  const fruits = ["appples", "bananas", "oranges"];

  for (let fruit of fruits) {
    // won't work inline (need braces)
    console.log(fruit);
  }

  // to get index, can use for in loop
  for (let index in fruits) {
    console.log("index:", index);
  }

  fruits.forEach((fruit, index) => {
    console.log(`index: ${index}, value: ${fruit}`);
  });

  console.log(fruits);

  return (
    <section>
      <h2>Iterating An Array</h2>
    </section>
  );
};

export default IteratingAnArray;
