// Spread operator is cleaner

const CombiningAndSlicingArrays = () => {
  const subjects = ["Spanish", "Art", "Maths"];
  const extraSubjects = ["Theatre", "Music", "Physics"];
  const allSubjects = subjects.concat(extraSubjects);
  console.log(allSubjects);

  subjects[0] = "D&T"; // primitive types are copied so will only update for the modified array
  console.log(subjects);
  console.log(allSubjects);

  const subjects2 = [{ id: 1, subject: "Spanish" }, "Art", "Maths"];
  const extraSubjects2 = ["Theatre", "Music", "Physics"];
  const allSubjects2 = subjects2.concat(extraSubjects2);
  console.log(allSubjects2);

  subjects2[0].subject = "D&T"; // references copied therefore reference types will update for all objects pointing to that reference
  console.log(subjects2);
  console.log(allSubjects2);

  subjects2[0] = { id: 8, subject: "Graphic Design" }; // changing the reference entirely (where the object points to) only affects the one array
  console.log(subjects2);
  console.log(allSubjects2);

  // SLICING ARRAYS - *returns* a *shallow copy* of a portion of an array
  const sliceAllSubjects2 = allSubjects2.slice(2, 4); // starting index upto, but not including, end index
  console.log(sliceAllSubjects2);

  const sliceAllSubjects = allSubjects.slice(4); // starting index to the end
  console.log(sliceAllSubjects);

  const copiedAllSubjects = allSubjects.slice(); // copies all
  console.log(copiedAllSubjects);

  const displaySubjects = subjects.join(" ");
  console.log(subjects);

  return (
    <section>
      <h2>Combining And Slicing Arrays</h2>
      <p>{displaySubjects}</p>
    </section>
  );
};

export default CombiningAndSlicingArrays;
