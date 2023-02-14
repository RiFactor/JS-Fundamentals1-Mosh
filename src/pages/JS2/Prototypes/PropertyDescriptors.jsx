const PropertyDescriptors = () => {
  let person = { name: "me" };
  console.log(person);

  let rootObject = Object.getPrototypeOf(person);
  let descriptor = Object.getOwnPropertyDescriptor(rootObject, "toString");
  console.log(descriptor); // writable (modify), enumerable (iterate), configurable (delete)

  Object.defineProperty(person, "name", {
    writable: false,
    enumerable: true,
    configurable: false // stop deletion
  });

  console.log(Object.keys(person));

  //   delete person.name; // cannot delete -- will get console error

  console.log(Object.keys(person));
  for (let key in person) {
    console.log(key);
  }

  console.log(person);
};

export default PropertyDescriptors;
