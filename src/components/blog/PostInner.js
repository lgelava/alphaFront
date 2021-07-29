import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Carousel from "react-material-ui-carousel";

const PostInner = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:3001/getSpecificPost/${id}`)
      .then((res) => setPost(res.data));
  }, []);

  return (
    <>
      <div className="inner_page">
        {(post.images && post.images.length !== 1) === true ? (
          <div className="img_container">
            <Carousel className="carousel">
              {post.images.map((item, i) => (
                <img className="img_in_carousel" src={item} key={i} alt={post.title}/>
              ))}
            </Carousel>
          </div>
        ) : (post.images && post.images.length === 1) ? (
            <img src={post.images[0]} alt={post.title} />
        ) :
          ""
        }
      </div>
    </>
  );
};

export default PostInner;
