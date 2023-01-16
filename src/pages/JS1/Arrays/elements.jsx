const Elements = () => {
  console.clear();

  // ADD ELEMENTS

  const numbers = [2, 3];
  // numbers = [5]; // can't reassign to a constant
  // can modify constant array

  console.log("test@@@@@");

  numbers.push(4, 5); // add to the end
  numbers.unshift(0.5, 1); // add to the beginning
  numbers.splice(2, 0, "hi"); // insert at index, delete

  console.log(numbers);

  const numbers2 = [1, 2, 3, 4, 5, 6];
  // REMOVE ELEMENTS
  numbers2.pop(); // removes last elements
  console.log(numbers2);

  numbers2.shift();
  console.log(numbers2); // removes the first element

  numbers2.splice(1, 2); // removes 2 elements starting at index 1
  console.log(numbers2);

  // FIND ELEMENTS (Primitive)
  console.clear();
  const numbers3 = [1, 2, 1, 3, 4, 5];

  console.log(numbers3.indexOf(1, 2)); // find 1 starting from index 2 of the array
  console.log(numbers3.indexOf(1, 3)); // -1
  console.log(numbers3.lastIndexOf(1)); // find the last entry of 1
  console.log(numbers3.includes(4)); // true if index has the array

  // FIND ELEMENTS(Reference)
  const courses = [
    { id: 1, name: "Econ" },
    { id: 2, name: "Maths" },
  ];

  // .includes won't work b/c diff reference to actual object, diff memory locations
  console.clear();
  const noCourse = courses.includes({ id: 1, name: "Econ" });

  const course = courses.find((course) => {
    return course.name === "Econ";
  });

  const course2 = courses.findIndex(function (course) {
    return course.name === "Econ";
  });

  // ARROW FUNCTION
  const course3 = courses.findIndex((course) => course.name === "Econ"); // don't need return keyword if returning on one line (preference?)

  console.log(noCourse);
  console.log(course);
  console.log(course2); // found at index = 0
  console.log(course3);
};

export default Elements;
