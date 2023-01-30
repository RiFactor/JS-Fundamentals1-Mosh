const LocalGlobalScope = () => {
  const color = "purple"; // global here

  function greeting() {
    const message = "hi"; // local: function, if, for, {} blocks etc.
    console.log(message);
    const color = "red"; // precedence over global constant *
    console.log("greeting", color);
  }

  const farewell = () => {
    // no longer a window object when function set to a const
    const message = "bye";
    console.log(message); // valid JS to have the same name in a different function
  };

  // console.log(message); // out of scope
  console.log("global", color); // * not overriden by local scoped var
  greeting();
  farewell();
};

export default LocalGlobalScope;
