const TryCatch = () => {
  // defensive programming
  const person = {
    firstName: "Trevor",
    lastName: "Noah",
    // fullName: function () {}, // old way of logging a function
    get fullName() {
      // get & set is optional, can use neither or just one
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(names) {
      if (typeof names !== "string") {
        throw new Error("Enter names"); // an exception is when you throw an error
      }
      const splitNames = names.split(" "); // '=' not ':'
      if (splitNames.length !== 2) {
        throw new Error("Enter first and last names."); // error object thrown
      }
      this.firstName = splitNames[0]; // probably only current usecase for 'this'
      this.lastName = splitNames[1];
    }
  };

  try {
    console.log(person.fullName);
    person.fullName = "Jon Snow";
    // person.fullName = true; // uncomment to see alert error
    // person.fullName = "adf asdf asdf asd"; // uncomment to see alert error
    console.log(person.fullName);
  } catch (error) {
    alert(error); // better to display as in-line UI to user, console.log for devs
  }
};

export default TryCatch;
