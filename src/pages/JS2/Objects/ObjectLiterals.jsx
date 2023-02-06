const ObjectLiterals = () => {
  console.clear();
  console.log("ObjectLiterals");

  const circle = {
    radius: 1,
    location: {
      x: 2,
      y: 3
    },
    draw() {
      console.log("draw"); // 'behaviour', better to use facory function
    }
  };

  circle.draw();
};

export default ObjectLiterals;
