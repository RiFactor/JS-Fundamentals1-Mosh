const Stopwatch = () => {
  console.clear();
  console.log("Stopwatch Exercise");

  function Stopwatch() {
    Object.defineProperty(this, "start", {
      set: function () {
        this.dateTime = Date.now();
      }
    });
    Object.defineProperty(this, "stop", {
      set: function () {
        this.dateTime2 = Date.now();
        this.duration = (this.dateTime2 - this.dateTime) / 1000;
      }
    });
    Object.defineProperty(this, "duration", {
      get: function () {
        return this.duration;
      }
    });
    Object.defineProperty(this, "reset", {
      set: function () {
        this.dateTime = 0;
        this.dateTime2 = 0;
        this.duration = 0;
        console.log("reset", this.dateTime, this.dateTime2, this.duration);
      }
    });
  }

  // start (once only)
  // stop (once only)
  // duration
  // reset

  const sw = new Stopwatch();
  //   sw.start;
  // console.low(sw.start());
  // sw.start();
  // sw();
  console.log(sw);

  return <h2>Stopwatch</h2>;
};

export default Stopwatch;
