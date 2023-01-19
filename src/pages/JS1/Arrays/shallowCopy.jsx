const ShallowCopy = () => {
  console.clear();
  let list = ["noodles", { list: ["eggs", "flour", "water"] }];

  // Shallow copy Object
  let newList = Object.assign({}, list);
  console.log(newList);

  //Shallow copy Array
  let list_copy = Array.from(list);
  console.log(JSON.stringify(list_copy));

  list_copy[1].list = ["rice flour", "water"];
  console.log(list[1].list);
  console.log(JSON.stringify(list));
  console.log(JSON.stringify(list_copy));

  list_copy[0] = "rice noodles";
  console.log(list[0]);
  console.log(JSON.stringify(list_copy));
  console.log(JSON.stringify(list));

  list_copy[1] = "potato";
  console.log(JSON.stringify(list_copy));
  console.log(JSON.stringify(list));

  return <h2>Shallow Copy</h2>;
};

export default ShallowCopy;
