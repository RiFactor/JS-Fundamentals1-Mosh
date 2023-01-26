const ExercisePriceRangeObject = () => {
  let priceRanges = [
    {
      icon: "$",
      tooltip: "Inexpensive",
      minPricePerPerson: 0,
      maxPricePerPeson: 15
    },
    {
      icon: "$$",
      tooltip: "Moderate",
      minPricePerPerson: 16,
      maxPricePerPeson: 25
    },
    {
      icon: "$$$",
      tooltip: "Expensive",
      minPricePerPerson: 25,
      maxPricePerPeson: 50
    }
  ];

  let restaurants = [{ averageMealPricePerPerson: 5 }];
};

export default ExercisePriceRangeObject;
