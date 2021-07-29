import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getPostsHandler } from "../../redux/postActions";
import "./Posts.css";
import PostItem from "./PostItem";
const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:3001/getAllPosts")
      .then((res) => dispatch(getPostsHandler(res.data)));
  }, []);
  const posts = useSelector((state) => state.posts);
  return (
    <div className="posts_outer">
      {posts.map((post) => (
        <PostItem post={post} key={post._id} />
      ))}
    </div>
  );
};

export default Posts;
