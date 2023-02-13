const Abstraction = () => {
  console.clear();
  console.log("Abstraction, Private Properties & Methods");
  // hide detail, show what's necessary

  // scope - var dies
  // closure - var persists

  function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 }; // make this a private property; local variable - dies outside fn
    // this.defaultLocation = { x: 0, y: 0 }; // public property

    // converted to a private property -- CLOSURE when used in this.draw fn, will stay in MEMORY, preserve state
    let computeOptimalLocation = function (factor, anotherParam) {
      console.log("compute");
    };
    // this.computeOptimalLocation = function (factor, anotherParam) {
    //     console.log("compute");
    // }

    this.draw = function () {
      let x = 3; // SCOPE of function - TEMPORARY , will die after fn - recreated & reinitialised
      const location = defaultLocation; //access private members
      computeOptimalLocation(0.1); // only need to update number of params in one place when only used inside main Circle function
      const diameter = this.radius * 2; // access members 'this.'
      return console.log("diameter: ", diameter);
    };
  }

  // can no longer access private properties (safer)
  const circle = new Circle(5);
  // //   console.log(circle.computeOptimalLocation);

  // simpler public interface
  console.log(circle.draw());
  console.log(circle.radius);
};

export default Abstraction;
