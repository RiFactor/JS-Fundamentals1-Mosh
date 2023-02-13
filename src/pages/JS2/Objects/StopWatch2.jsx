import Stopwatch from "./Stopwatch";

const StopWatch2 = () => {
  console.clear();
  console.log("stopwatch attempt 2");
  const stopWatch = {
    recordedDuration: 0,
    startTime: 0,
    endTime: 0,
    start() {
      if (this.startTime > 0) {
        throw new Error("Stopwatch already started");
      }
      this.endTime = 0;
      this.startTime = Date.now();
    },
    stop() {
      if (this.endTime > 0) {
        throw new Error("Stopwatch already stopped");
      }
      this.endTime = Date.now();
      this.recordedDuration = (this.endTime - this.startTime) / 1000;
      this.startTime = 0;
    },
    duration() {
      return this.recordedDuration;
    },
    reset() {
      this.recordedDuration = 0;
      this.startTime = 0;
      this.endTime = 0;
    }
    // set start() {}
  };

  console.log("stopwatch", stopWatch);
  stopWatch.start();
  console.log("stopwatch", stopWatch);
  stopWatch.stop();
  stopWatch.start();
  stopWatch.stop();
  stopWatch.reset();
  console.log("stopwatch", stopWatch);
  console.log(stopWatch.duration());

  console.log("stopwatch", stopWatch);
  stopWatch.start();
};

export default StopWatch2;
