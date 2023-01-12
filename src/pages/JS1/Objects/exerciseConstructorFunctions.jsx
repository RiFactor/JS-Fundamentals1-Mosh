const ExerciseConstructorFunctions = () => {
  function createBlogPost(body, author) {
    this.body = body;
    this.author = author;
    this.views = 0;
    //   comments: { authorCommment, bodyComment },
    this.comments = [];
    this.isLive = false;
    //   isPublished,
  }
  let post = new createBlogPost("New Gadgets", "JB");
  console.log(post);
};
export default ExerciseConstructorFunctions;
