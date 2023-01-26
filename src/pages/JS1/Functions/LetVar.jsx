const LetVar = () => {
  // block-scoped var
  // let - scope confined to block {},
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  //   console.log(i);

  // fn-scoped var
  // var - accessible outstide block {}, limited to fn defined in
  for (var j = 0; j < 5; j++) {
    console.log(j);
  }
  console.log(j);
};

export default LetVar;
