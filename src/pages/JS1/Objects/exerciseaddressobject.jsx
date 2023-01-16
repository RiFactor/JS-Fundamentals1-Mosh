const ExerciseAddressObject = () => {
  const myAddress = {
    street: "Sesame Street",
    city: "Manhattan",
    zipCode: 10023
  };

  const showAdress = address => {
    for (let key in address) {
      // can't get this to display on webapp
      //   //   <div>{key}</div>;
      //   //   <p>{(key, myAddress[key])}</p>;
      //   console.log(key, myAddress[key]);
      //   //   return key, myAddress[key];
    }
  };

  return (
    <div>
      <h1>Exercise Address Object</h1>
      <div>{showAdress(myAddress)}</div>
    </div>
  );
};
export default ExerciseAddressObject;
