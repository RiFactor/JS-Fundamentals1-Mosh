const IteratingMembers = () => {
  console.clear();
  // Instance Member
  function Circle(radius) {
    this.radius = radius;
    this.move = function () {};
    console.log("move");
  }

  const c1 = new Circle(1);

  Circle.prototype.draw = function () {
    // Protoype Member
    console.log("draw"); // can update member after creating instance c1, b/c of obj ref, will be available on instance c1
  };

  c1.draw();

  // iterates instance members only
  console.log(Object.keys(c1));

  // iterates instance (own) members and prototype members
  for (let key in c1) {
    console.log(key);
  }

  // instance members only
  console.log(c1.hasOwnProperty("move"));
  console.log(c1.hasOwnProperty("draw"));
};

export default IteratingMembers;
