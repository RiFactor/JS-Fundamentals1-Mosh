const PrototypeInstance = () => {
  // ** DO NOT MODIFY BUILT-IN OBJECTS e.g.
  //   // Array.prototype.draw = function () {}
  //   // const array = [];
  //   // array.shuffle();
  //   // this will lead to bugs w/ built-in libraries and future JS updates

  console.clear();
  console.log("Prototype vs Instance");
  // all have root object as prototype

  function Circle(radius) {
    // Instance member
    this.radius = radius;

    this.ref = function () {
      this.draw(); // can reference prototype member
    };

    this.move = function () {
      console.log("move");
    };
  }

  // const Circle = radius => {
  //   this.radius = radius;
  // };

  Circle.prototype.draw = () => {
    this.move(); // can reference instance member
    // Prototype member
    console.log("draw");
  };

  const c1 = new Circle(1);
  const c2 = new Circle(2);

  // Circle.prototype === c1.__proto__; // ___proto__ deprecated

  console.log("c1", c1);
  console.log(c2);

  console.log(c1.toString());

  // modified property
  Circle.prototype.toString = function () {
    //overrides root object
    return "Circle has a radius of " + this.radius;
  };
  console.log(c1.toString());

  console.log(Object.getPrototypeOf(c1)); // Question -- want to understand the hierarchy
  // console.log(Object.getPrototypeOf(Circle));
};

export default PrototypeInstance;
