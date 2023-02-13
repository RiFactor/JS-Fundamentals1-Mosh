const EnumeratingProperties = () => {
  const now = new Date();

  function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
      console.log("draw");
    };
  }

  const circle = new Circle(10);

  // 1. Enumerate (list one-by-one)
  for (let key in circle) {
    if (circle[key] !== "function") {
      console.log(circle[key]);
    }
  }
  // 2. Get all keys
  const circleKeys = Object.keys(circle);
  console.log(circleKeys);

  // 3. Check if property exists
  if ("radius" in circle) {
    console.log("Circle has a radius.");
  }

  return (
    <section>
      <h2>Enumerating Properties</h2>
    </section>
  );
};

export default EnumeratingProperties;
