const Objects = () => {
  const name = "Charli";
  const age = 30;

  const person = {
    name: "Jon",
    age: 30
  };

  console.log(person);

  // dot notation
  console.log(person.name);

  // bracket notation to access property when not known
  const property = "name";
  person[property] = "Julia";
  console.log(person.name);

  // // Weather app use here
  //   const onInputChange = (value, key) => {
  //     setUserProfileInformation(originalValue => {
  //       const newValue = { ...originalValue };
  //       newValue[key] = value;
  //       return newValue;
  //     });
  //   };
};

export default Objects;
