export const actionTypes = {
  ADD_POST: "ADD_POST",
  GET_POSTS_HANDLER: "GET_POSTS_HANDLER",
};

export const addPost = (newPost) => ({
  type: actionTypes.ADD_POST,
  newPost,
});

export const getPostsHandler = (postList) => ({
  type: actionTypes.GET_POSTS_HANDLER,
  postList,
});
