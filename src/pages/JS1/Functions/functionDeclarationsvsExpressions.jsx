const FunctionDeclarationsvsExpressions = () => {
  // console.clear();
  // Function Declaration

  function walk() {
    console.log("walk"); // Question, no result w/o return keyword, not needed in example
  }

  // Anonymous / Named Function Expression
  const run = function () {
    console.log("run anonymous test");
  };
  run();
  console.log("anon test run");

  const run2 = function run() {
    // return console.log("run named"); // "return not necessary"
    console.log("run named");
  };

  // const run = () => {
  // }

  let move = run; // referencing same anonymous function, object in memory

  // **** don't need return and console.log, just run functions
  // console.log(walk());
  // console.log(run());
  // console.log(run2());
  // console.log(move());

  console.log("run functions:");
  walk(); // Question - nothing rendered here --> check actual browser console not console ninja
  run();
  run2();
  move();
};

export default FunctionDeclarationsvsExpressions;
