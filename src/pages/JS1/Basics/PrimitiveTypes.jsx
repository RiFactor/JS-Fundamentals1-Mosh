const PrimitiveTypes = () => {
  // Primitive Types (Primitives / Value Types)
  // string, number, boolean, undefined (also a value), null (object)

  // Value	Type
  const age = 25; // number literal ie number
  let height = 5.5; // still a number (not specific e.g. floating point as in other languages)	5.5	number
  const pet = "dog"; // string literal ie string
  const isAwake = true; // boolean
  let unknown; // must initialise const
  //   const unknown; // must initialise const
  const uncertain = undefined; // undefined (less common)
  const selectedLanguage = null; // null -> clear a value / selection

  // Dynamic language - type of var can change
  console.log(typeof height);
  height = "5 feet";
  console.log(typeof height);

  // symbol?
};

export default PrimitiveTypes;
