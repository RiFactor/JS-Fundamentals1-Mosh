import InheritanceImage from "src/assets/Inheritance.jpg";

// Prototype (parent object)
const Inheritance = () => {
  console.clear();
  console.log("Inheritance & Constructor Prototypes");

  let x = {}; // where {} is the root obj, has no prototype / parent
  let y = {};

  console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));

  //   x.__proto__ === y.__proto__; // deprecated but can run on console

  // .toString() isn't defined for x, but exists in the prototype obj (inherited) so JS engine searches up prototype chain

  console.log(x.toString());

  // MultiLevel Inheritance
  // array inherits from object
  let myArray = [];
  console.log("myArray", myArray); // *USEFUL for seeing available object members* trace prototype on console

  // Constructor Prototypes
  function Circle(radius) {
    // prototype of 'myCircle'
    this.radius = radius;
    this.draw = () => {
      console.log("draw");
    };
  }

  const myCircle = new Circle(1);
  console.log(myCircle); // protoype is the circle constructor, root prototype is the empty object

  return (
    <section>
      <img src={InheritanceImage} width={400} alt="inheritance explained" />
    </section>
  );
};

export default Inheritance;
