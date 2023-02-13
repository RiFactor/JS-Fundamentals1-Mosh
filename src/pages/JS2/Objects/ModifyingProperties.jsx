const ModifyingProperties = () => {
  console.clear();
  console.log("Modifying Properties");

  function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
      console.log("draw");
    };
  }

  const circle = new Circle(2);

  circle.location = { x: 1 }; // Add a property at run-time (can't w/ classes)

  const propertyName = "center-location";
  circle["center-location"] = "2"; // Access using bracket notations when property not known at run-time or uses space / special characters '-' etc that can't be passed using dot notation
  console.log(circle);

  // Dynamically delete properties using '.xyz' or '["xyz"]'
  delete circle.location;
  console.log(circle);
};

export default ModifyingProperties;
