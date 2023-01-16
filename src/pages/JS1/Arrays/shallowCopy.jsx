const ShallowCopy = () => {
  console.clear();
  let list = ["noodles", { list: ["eggs", "flour", "water"] }];

  let list_copy = Array.from(list);
  console.log(JSON.stringify(list_copy));
  // ["noodles",{"list":["eggs","flour","water"]}]

  list_copy[1].list = ["rice flour", "water"];
  console.log(list[1].list);
  // Array [ "rice flour", "water" ]
  console.log(JSON.stringify(list));
  // ["noodles",{"list":["rice flour","water"]}]
  console.log(JSON.stringify(list_copy));

  list_copy[0] = "rice noodles";
  console.log(list[0]);
  // noodles
  console.log(JSON.stringify(list_copy));
  // ["rice noodles",{"list":["rice flour","water"]}]
  console.log(JSON.stringify(list));
  // ["noodles",{"list":["rice flour","water"]}]

  list_copy[1] = "potato";
  console.log(JSON.stringify(list_copy));
  console.log(JSON.stringify(list));
};

export default ShallowCopy;
