const FactoryConstructorFunctions = () => {
  console.clear();
  console.log("Factory & Constructor Functions");
  // FACTORY FUNCTION

  // // former syntax
  //   function createCircle1(radius) {
  //     return {
  //       radius,
  //       draw: function () {
  //         console.log("draw circle1");
  //       }
  //     };
  //   }
  //   console.log(createCircle1(1));

  const createCircle = radius => {
    return {
      // MUST return
      radius,
      draw() {
        console.log("draw factory circle");
      }
    };
  };
  //   console.log(createCircle(1));

  const factoryCircle = createCircle(5);
  console.log(factoryCircle);

  // CONSTRUCTOR FUNCTION

  // // former syntax
  // function Circle(radius) {
  //   this.radius = radius;
  //   this.draw = function () {
  //     console.log("draw constructor circle");
  //   };
  // }

  function Circle2(radius) {
    // alternative to writing function keyword e.g. arrow syntax?
    this.radius = radius; // doesn't need 'return' keyword?
    this.draw = () => {
      // QUESTION - is this syntax correct?
      console.log("draw constructor circle");
    };
  }

  // VSCode converted to an ES2015 class:
  class Circle3 {
    constructor(radius) {
      this.radius = radius;
      this.draw = () => {
        console.log("draw constructor circle");
      };
    }
  }

  // const constructorCircle = new Circle(3);
  // console.log(constructorCircle);
  const constructorCircle2 = new Circle2(4); // requires 'new' keyword
  console.log(constructorCircle2); // QUESTION -- example says don't need console.log ? but I do here https://codewithmosh.com/courses/310571/lectures/4881078
  const constructorCircle3 = new Circle3(3);
  console.log(constructorCircle3);

  // every object has a constructor property that references the fn used to create that obj

  console.log(factoryCircle.constructor);
  console.log(constructorCircle2.constructor);

  // e.g.
  //  new String(); // "", ''
  // new Boolean(); // true, false
  // new Number(); // 1, 2, 3...
};

export default FactoryConstructorFunctions;
