// title
// body
// author
// views
// comments
//   (author, body)
// isLive

const ExerciseBlogPostObject = () => {
  // const createBlogPost = (
  //   body,
  //   author,
  //   views,
  //   commentAuthor,
  //   commentBody,
  //   isLive
  // ) => {
  //   return {
  //     body,
  //     author,
  //     views,
  //     comments: { commentAuthor, commentBody },
  //     isLive,
  //   };
  // };

  // console.log(createBlogPost("this is great", "RD", 5, "I agree", true, false));

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
