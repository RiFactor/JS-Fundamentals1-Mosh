import OOPIntroImage from "assets/OOPIntro.png"; // absolute paths best; '../' to jump out of folder

const OOPIntro = () => {
  return (
    <section>
      <h1>Object Oriented Programming</h1>
      <img src={OOPIntroImage} width={500} height={500} alt="benefits-of-OOP" />
    </section>
  );
};

export default OOPIntro;
