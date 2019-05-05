const initState = {
  posts: [
    {
      id: "1",
      postTitle: "Gramy w piłkę nożną",
      author: "Rafał Podraza",
      postContent: "blah\nasdasda\n\nxddddd",
      url: "ZOBACZ",
      postType: "PUBLICZNY"
    }
  ]
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_POST":
      console.log("created post", action.post);
      return state;
    case "CREATE_POST_ERROR":
      console.log("create post error", action.err);
      return state;
    default:
      return state;
  }
};

export default postReducer;
