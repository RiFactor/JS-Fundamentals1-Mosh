const GettersSetters = () => {
  const person = {
    firstName: "Trevor",
    lastName: "Noah",
    // fullName: function () {}, // old way of logging a function
    get fullName() {
      // get & set is optional, can use neither or just one
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(names) {
      const splitNames = names.split(" "); // '=' not ':'
      this.firstName = splitNames[0]; // current usecase for 'this'
      this.lastName = splitNames[1];
    }
  };

  console.log(person.fullName);
  person.fullName = "Jon Snow";

  console.log(person.fullName);
};

export default GettersSetters;
