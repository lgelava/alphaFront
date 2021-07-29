import React from "react";
import "./Posts.css";
import { useHistory } from "react-router-dom";

const PostItem = ({ post }) => {
  const history = useHistory();
  return (
    <div className="post_item">
      <div className="person_and_text">
        <p>{post.text}</p>
      </div>
      <div className="post_images_div">
        {post.images.length === 1 ? (
          <img
            className="main_post_img"
            onClick={() => history.push(`/postInner/${post._id}`)}
            src={post.images[0]}
            alt={post.text}
          ></img>
        ) : post.images.length > 1 ? (
          <>
            <img
              className="multiple_img_sample main_post_img"
              onClick={() => history.push(`/postInner/${post._id}`)}
              alt={post.text}
              src={post.images[0]}
            ></img>
            <p className="more_images">+ {post.images.length - 1} more</p>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PostItem;
