const Constants = () => {
  // • use 'const' (by default) to declare and define variables that should remain unchanged and prevent bugs
  // • use 'let' (when needed) to declare and define variables that change value

  let weather = "raining"; // changing
  const firstName = "me"; // remains unchanged

  // firstName = "you"; // cannot reassign a const

  console.log(firstName);
};

export default Constants;
