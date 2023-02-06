const FunctionsAreObjects = () => {
  console.clear();
  console.log("Functions Are Objects");

  // constructor fn
  function Circle(radius) {
    this.radius = radius;
    this.draw = () => {
      console.log("draw");
    };
  }

  console.log(Circle.constructor); // ƒ Function() { [native code] }

  const circle = new Circle(1);
  console.log(circle);

  // under the hood
  const Circle2 = new Function(
    "radius", // argument
    `    this.radius = radius;
  this.draw = () => {
    console.log("draw");}` // function
  );

  const circle2 = new Circle2(2);
  // under the hood
  //   Circle.call({}, 1, 2, 3); // pass multiple args
  //   Circle.call(window, 1, 2, 3); // don't do this, equivalent of excluding 'new' keyword
  //   Circle.apply({}, [1, 2, 3]); // pass multiple args in an array

  console.log(circle2);
};

export default FunctionsAreObjects;
