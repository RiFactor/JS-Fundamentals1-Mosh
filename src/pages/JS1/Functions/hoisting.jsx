const Hoisting = () => {
  // FUNCTION DECLARATION

  // Function Declaration moved here 'under the hood' by JS engine
  //   function walk() {
  //     console.log("walk");
  //   }

  // Can call fn declaration before initialised
  // b/c JS engine 'hoists' all function declarations to the top of the page when executing code
  walk(); // no error

  function walk() {
    console.log("walk");
  }

  walk();

  // FUNCTION EXPRESSION
  // can't call fn expressions before initialisation
  //   run(); // void
  //   console.log(run());

  // Anonymous / Named Function Expression
  const run = function () {
    return console.log("run anonymous");
  };

  run();
  console.log(run());
};

export default Hoisting;
