const Arrays = () => {
  // data structure used to represent list of items

  console.clear();

  // const can change, array can be modified, same memory reference
  const flavours = ["pistachio", "chocolate", "salted caramel"];

  console.log(flavours);

  // a single array can store various types inc objects or arrays (nested arrays)
  flavours[3] = true; // access items in array, assign and extend (change length) of array
  console.log(flavours);

  // arrays are objects - access inherited properties using dot notation
  console.log(flavours.length);

  let flavours2 = ["pistachio", "chocolate", "salted caramel"];
  flavours2 = []; // cannot do this to const
  console.log(flavours2);
};

export default Arrays;
