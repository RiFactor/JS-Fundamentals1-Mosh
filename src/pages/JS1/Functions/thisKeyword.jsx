const ThisKeyword = () => {
  // 'this': references object executing current function
  // fn in obj = method, 'this' references the obj o/w reference global objects: global obj in node / window obj in browsers
  // regular fns reference global obj

  console.clear();
  console.log(this); // undefined (global obj) --> works in browser console

  // METHOD (fn in obj)
  const video = {
    title: "a",
    play() {
      console.log(this);
    }
  };
  video.play();

  video.stop = function () {
    console.log(this); // points to obj
  };

  video.stop();

  // CONSTRUCTOR FUNCTIONS

  function Video(title) {
    this.movieTitle = title;
    console.log(this);
  }

  const v = new Video("Inside Out"); // new operator: 'this' points to new created empty obj {}

  // REGULAR FUNCTIONS
  function playVideo() {
    console.log(this); // undefined: window obj
  }

  playVideo();

  // REGULAR FUNCTION IN OBJ
  const movies = {
    title: "movie",
    tags: ["a", "b", "c"],
    // showTags: method
    showTags() {
      // this. references movies
      this.tags.forEach(function (tag) {
        // anonymous call back function
        // forEach: regular fn will reference global obj:
        console.log(tag); // works fine
        console.log(this.title, tag); // this.references (global) window obj
        console.log(this, tag); // this.references (global) window obj
      });
    }
  };
  // movies.showTags(); // Cannot read properties of undefined (reading 'title')

  // BEST SOLUTION
  const moviesArrow = {
    title: "movie Arrow",
    tags: ["a", "b", "c"],
    showTags() {
      this.tags.forEach(tag => {
        // arrow fn inherits 'this' reference from containing fn (showTags), not re-bound to new obj
        console.log(this.title, tag);
      });
    }
  };

  console.log("movies Arrow");
  moviesArrow.showTags();

  // SOLUTIONS EXPLAINED

  // pass 'this' arg as 2nd param, for some regular functions
  const movies2 = {
    title: "movie2",
    tags: ["a", "b", "c"],
    showTags() {
      this.tags.forEach(function (tag) {
        console.log(this.title, tag); // now this.references movies2
      }, this); // could write any obj: {name: "me"} // works when you change this.title to this / this.title
    }
  };

  console.log("movies 2");
  movies2.showTags();

  const moviesBindObj = {
    title: "movie2",
    tags: ["a", "b", "c"],
    showTags() {
      this.tags.forEach(
        function (tag) {
          console.log(this.name, tag); // change to this or this.name (this.title doesn't exist on currently bound obj)
        },
        { name: "me test" }
      ); // could write any obj: {name: "me"}
    }
  };

  console.log("movies Bind Obj");
  moviesBindObj.showTags();

  // ALTERNATE SOLUTIONS (not advised)
  const movies3 = {
    title: "movie3",
    tags: ["a", "b", "c"],
    showTags() {
      const self = this; // or 'const that = this;'
      this.tags.forEach(function (tag) {
        console.log(self.title, tag); // now self.references movies2
      });
    }
  };

  console.log("movies 3");
  movies3.showTags();

  // BIND
  const movies4 = {
    title: "movie4",
    tags: ["a", "b", "c"],
    showTags() {
      this.tags.forEach(
        function (tag) {
          console.log(this.title, tag);
        }.bind(this) // in showTags method, 'this' references movies4 obj
      );
    }
  };

  console.log("movies 4");
  movies4.showTags();

  // FUNCTIONS ARE OBJECTS
  console.log("Functions are objects");
  function playVideo2() {
    console.log(this);
  }

  playVideo2(); // ref window obj
  playVideo2.call({ name: "me" });
  playVideo2.apply({ name: "you" });

  function playVideo3(a, b) {
    this.firstArg = a;
    this.secondaArg = b;
    console.log(this);
    // console.log(this);
  }

  // only diff b'ween call & apply is how other params are passed
  playVideo3.call({ name: "me" }, 1, 2);
  playVideo3.apply({ name: "you" }, [1, 2]); // pass as array

  const playBoundVideo = playVideo2.bind({ name: "them" }); // returns a NEW fn, permanently points 'this' to newly defined obj passed here
  playBoundVideo();

  // OR call directly w/o defining as a new const
  playVideo3.bind({ name: "them" })(); //ignore undefined params
};

export default ThisKeyword;
