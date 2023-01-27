const Circle = () => {
  console.clear();
  console.log("circle");

  // Mosh solution

  const circle2 = {
    // can just modify
    radius: 1,
    get area() {
      // read only property
      return (Math.PI * this.radius * this.radius).toPrecision(3);
    }
  };

  console.log(circle2);
  circle2.radius = 2;
  console.log(circle2);
  // circle2.area = 20; // prove that can't modify it // Cannot set property which has only a getter
};

export default Circle;
