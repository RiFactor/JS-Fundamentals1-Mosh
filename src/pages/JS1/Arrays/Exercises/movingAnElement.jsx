const MovingAnElement = () => {
  const fruits = ["apples", "strawberries", "coconuts", "peaches"];
  console.log(fruits);

  // ~extricated logic outside function to understand
  // const removedFruit = fruits.splice(1, 1);
  // console.log(fruits);
  // fruits.splice(1 + 1, 0, removedFruit[0]);
  // console.log(fruits);

  const offsetArray = (array, indexofItemToMove, numberOfPlacesToMove) => {
    if (indexofItemToMove > array.length - 1 || indexofItemToMove < 0) {
      console.error("Item out of bounds of array");
    } else if (
      indexofItemToMove + numberOfPlacesToMove < 0 ||
      indexofItemToMove + numberOfPlacesToMove > array.length - 1
    ) {
      console.error("Ivalid Offset");
    } else if (numberOfPlacesToMove === 0) {
      return array;
    }

    const newArray = [...array]; // spread operator is shorthand for 'Array.from'
    // const newArray2 = array; // '= array' is wrong b/c not a copy, just assign same memory reference
    // remove from OG position
    // const removedItem = newArray.splice(indexofItemToMove, 1);
    const removedItem = newArray.splice(indexofItemToMove, 1)[0]; // store array item 0 directly

    // put it in the new position & check that is is a valid position

    // newArray.splice(indexofItemToMove + numberOfPlacesToMove, 0, removedItem[0]);
    newArray.splice(indexofItemToMove + numberOfPlacesToMove, 0, removedItem);
    return newArray;
  };

  // MOSH SOLUTION Revised

  const offsetArray2 = (array, index, offset) => {
    const position = index + offset;
    if (index > array.length - 1 || index < 0) {
      console.error("Item out of bounds of array");
      return;
    } else if (position < 0 || position >= array.length) {
      // >=
      console.error("Ivalid Offset");
      return;
    } else if (offset === 0) {
      return array;
    }
    const newArray = [...array]; // spread operator is shorthand for 'Array.from'
    const removedItem = newArray.splice(index, 1)[0]; // store array item 0 directly
    newArray.splice(position, 0, removedItem);
    return newArray;
  };

  console.log(fruits);
  console.log(offsetArray(fruits, 2, 1));
  console.log(offsetArray2(fruits, 2, 1));
};

export default MovingAnElement;
