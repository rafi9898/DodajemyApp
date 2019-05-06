const initState = {
  comments: null
};

const commentReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_COMMENT":
      console.log("created comment", action.comment);
      return {
        ...state
      };
    case "CREATE_COMMENT_ERROR":
      console.log("CREATE_COMMENT_ERROR", action.err);
      return state;
    default:
      return state;
  }
};

export default commentReducer;
