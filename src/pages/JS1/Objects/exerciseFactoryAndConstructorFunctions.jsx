const ExerciseFactoryAndConstructorFunctions = () => {
  // factoryFunction
  const createFactoryAddress = (street, city, zipCode) => {
    return {
      street, // street: street
      city,
      zipCode
    };
  };

  //   console.log(createFactoryAddress("Sesame Street", "Manhattan", 10223));

  //   ConstructorFunction;
  function CreateConstructorAddress(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
  }

  // converted to a class declaration
  class CreateConstructorAddress2 {
    constructor(street, city, zipCode) {
      this.street = street;
      this.city = city;
      this.zipCode = zipCode;
    }
  }

  //   console.log(
  //     new CreateConstructorAddress("Sesame Streets", "Manhattan", 10223), // need the 'new' keyword
  //     new CreateConstructorAddress2("Sesame Streets", "Manhattan", 10223) // need the 'new' keyword
  //   );

  return (
    <main>
      <h2>Exercise Factory And Constructor Functions</h2>
      {/* <p>{createFactoryAddress("Sesame Street", "Manhattan", 10223)}</p> */}
    </main>
  );
};

export default ExerciseFactoryAndConstructorFunctions;
