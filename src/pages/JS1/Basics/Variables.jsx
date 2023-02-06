const Variables = () => {
  // 1. Don't use special keywords e.g. 'if', 'return' etc.
  // 2. Use a meaningful name - clear for other developers
  // 3. Can't start with a number
  // 4. Can't contain a space or a hyphen '-'
  // 5. Use camelCase to join words
  // 6. Case-sensitive

  // Analogy: data in a var is like items in a container

  // use let to declare, end with a ';'
  // use '' for vars but can use "" - Cube's prettier config uses ""

  let firstName, lastName; // undefined, can declare on one line but best practise to use separate lines

  let firstNAme = "Trevor"; // best to initialise! (Even if empty) -- QUESTION

  console.log(firstNAme, firstName); // case-senstive

  lastName = "Noah";

  console.log(lastName);
};

export default Variables;
