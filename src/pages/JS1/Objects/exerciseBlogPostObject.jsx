const ExerciseBlogPostObject = () => {
  // object literal syntax
  let post = {
    body: "Super foods",
    author: "RD",
    views: 5,
    comments: [
      {
        author: "A",
        body: "agreed",
      },
      {
        author: "B",
        body: "better options",
      },
    ],
    isLive: false,
  };

  console.log(post);
};

export default ExerciseBlogPostObject;
