const DefaultParameters = () => {
  console.clear();
  // if setting a default param, need to define it last or ensure params after also have default param
  function interest(principal, rate = 3.5, years = 5) {
    // rate = rate || 3.5; // neater to define default option in param
    return ((principal * rate) / 100) * years;
  }

  console.log(interest(10000));
  console.log(interest(10000, 3));

  // workaround not advised
  function interest2(principal, rate = 3.5, years) {
    // not setting default param last
    return ((principal * rate) / 100) * years;
  }

  // if years doesn't have a default param, it will return NaN, so pass in undefined for rate to define years
  console.log(interest2(10000, undefined, 5));
};

export default DefaultParameters;
