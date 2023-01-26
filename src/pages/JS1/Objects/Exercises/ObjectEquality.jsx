const ExerciseObjectEquality = () => {
  class Address {
    constructor(street, city, zipCode) {
      this.street = street;
      this.city = city;
      this.zipCode = zipCode;
    }
  }

  let address1 = new Address("Sesame Street", "New York", "12212");
  let address3 = address1;
  let address2 = new Address("Sesame Street", "New York", "12212");

  console.log(address1, address2);

  // checking the values are equivalent
  function areEqual(address1, address2) {
    for (let key in address1) {
      // console.log("check", address1[key] === address2[key]);
    }
  }

  function areSame(address1, address2) {
    // pointing to the exact same object
    return address1 === address2;
  }

  // console.log(areEqual(address1, address2));
  console.log(areSame(address1, address2));
  console.log(areSame(address1, address3));

  return (
    <main>
      <h2>Exercise Object Equality</h2>
    </main>
  );
};

export default ExerciseObjectEquality;
