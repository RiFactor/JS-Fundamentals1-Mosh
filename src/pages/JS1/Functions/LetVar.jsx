const LetVar = () => {
  console.clear();
  // block-scoped variables: let, const
  // let - scope confined to block {},
  for (let i = 0; i < 5; i++) {
    console.log("i", i);
  }
  // console.log(i); // not defined

  // fn-scoped variables: var
  // var - accessible outstide block {}, limited to fn defined in
  for (var j = 0; j < 5; j++) {
    console.log(j);
  }
  console.log("j", j);

  // DO NOT DO THIS:

  var animal = "panda"; // attached to window object
  // window.animal; // DO NOT DO THIS, only 1 instance, 3rd party library may override var w/ same name var

  function sayHi() {
    console.log("hi");
  }

  // window.sayHi(); // do not want this either -- should use modules, explained later
};

export default LetVar;
