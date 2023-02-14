const StopWatch3 = () => {
  // Mosh solution
  function StopWatch() {
    let startTime,
      stopTime,
      running,
      duration = 0;

    this.start = () => {
      if (running) {
        throw new Error("Already started");
      }
      running = true;
      startTime = new Date();
    };
    this.stop = () => {
      if (!running) {
        throw new Error("Already stopped");
      }
      stopTime = new Date();
      const seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
      duration += seconds; // so that stopwatch can continue counting
      running = false;
    };
    this.reset = () => {
      startTime = null; // Question -- why null
      stopTime = null;
      running = false;
      duration = 0;
    };

    Object.defineProperty(this, "duration", {
      get: function () {
        return duration;
      }
    });
  }
};

export default StopWatch3;
