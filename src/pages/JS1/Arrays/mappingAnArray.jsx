const MappingAnArray = () => {
  const fruits = ["apples", "strawberries", "mangoes", "avocado", "melon"];

  const filteredFruits = fruits.filter(fruit => {
    return fruit.startsWith("a");
  });

  const mappedFilteredFruits = filteredFruits.map(fruit => {
    return "<li>" + fruit + "</li>";
  });
  console.log(mappedFilteredFruits);

  // chaining
  const mappedFilteredFruits2 = fruits
    .filter(fruit => fruit.startsWith("m"))
    .map(fruit => "<p>" + fruit + "<p>")
    .map(fruit => ({
      // wrapped in parentheses so that JS knows {} is for an object, not a code block
      name: fruit
    }));

  console.log(mappedFilteredFruits2);

  return (
    <div>
      {fruits.map(fruit => {
        return <li key={fruit}>{fruit}</li>;
      })}
    </div>
  );
};

export default MappingAnArray;
