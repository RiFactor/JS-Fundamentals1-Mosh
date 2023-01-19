const JoiningArrays = () => {
  const message = "The Theory Of Everything";
  const splitMessage = message.split(" ");
  console.log(message);
  console.log(splitMessage);

  const joinedMessage = splitMessage.join("-").toLowerCase();
  console.log(joinedMessage);

  return (
    <section>
      <h2>Joining Arrays</h2>;
    </section>
  );
};

export default JoiningArrays;
