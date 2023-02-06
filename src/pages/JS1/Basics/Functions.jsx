const Functions = () => {
  // fn declarations don't need to be terminated w/ ';'
  // fn set of statements that performs a task or calculates & returns a value

  function greet(name, question = ", How are you?") {
    // params, set w/ a default value, o/w undefined
    console.log("hello " + name + question);
  }

  greet("Trev"); // arguments
  greet("Trev", ", What's up");

  console.clear();
  // modern syntax for functions
  const squareNumbers = number => {
    return number * number; // w/o 'return' will be undefined
  };

  console.log(squareNumbers(5)); // need to log on the console to appear!
  // can assign a to a var then log

  // shorthand doesn't require return keyword for one line
  const cubeNumbers = number => number * number * number;
  const cubedNumber = cubeNumbers(3);
  console.log(cubedNumber);
};

export default Functions;
