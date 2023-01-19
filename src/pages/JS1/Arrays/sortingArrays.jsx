const SortingArrays = () => {
  const subjects = [
    { id: 1, subject: "maths" },
    { id: 2, subject: "French" },
    { id: 3, subject: "spanish" }, //lowercase - ASCII table will be ranked first
    { id: 3, subject: "D&T" }
  ];

  subjects.sort((a, b) => {
    const lowerA = a.subject.toLowerCase();
    const lowerB = b.subject.toLowerCase();
    if (lowerA < lowerB) return -1; // sort a before b
    if (lowerA > lowerB) return 1; // sort a after b
    return 0; // a === b
  });
  console.log(subjects);
};

export default SortingArrays;
