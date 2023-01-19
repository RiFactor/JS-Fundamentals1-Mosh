const SpreadOperator = () => {
  const subjects = ["Spanish", "Art", "Maths"];
  const extraSubjects = ["Theatre", "Music", "Physics"];
  const allSubjects = [...subjects, "D&T", ...extraSubjects, "Biology"];
  console.log(allSubjects);

  const copyAllSubjects = [...allSubjects];
  console.log(copyAllSubjects);

  return (
    <section>
      <h2>Spread Operator</h2>
    </section>
  );
};

export default SpreadOperator;
