const initialState = {
  posts: [],
};

const reducer = (state = initialState, action) => {
  const { posts } = state;
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        posts: [action.newPost, ...posts],
      };

    case "GET_POSTS_HANDLER":
      return {
        ...state,
        posts: action.postList,
      };
    default:
      return state;
  }
};

export default reducer;
