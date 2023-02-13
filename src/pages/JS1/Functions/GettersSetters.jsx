const GettersSetters = () => {
  console.log("Getters Setters");
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

  // JS 2
  console.clear();
  console.log("Cleared JS1");

  function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 1, y: 2 };

    // this.getDefaultLocation = function () {
    //   return defaultLocation;
    // };

    this.draw = function () {
      console.log("draw");
    };

    // or .defineProperties
    Object.defineProperty(this, "defaultLocation", {
      get: function () {
        return defaultLocation;
      },

      // can optionally define a setter
      set: function (value) {
        // can add validation
        console.log(typeof value);
        if (typeof value !== "object") {
          throw new Error("use an array");
        }
        defaultLocation.x = value[0];
        defaultLocation.y = value[1];
      }
    });
  }

  const newCircle = new Circle(10); // don't console log the actual Circle fucntion if you want to see details
  console.log(newCircle);
  console.log(newCircle.defaultLocation);
  newCircle.defaultLocation = [2, 3];
  console.log(newCircle.defaultLocation);
};

export default GettersSetters;
