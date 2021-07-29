import React, { useRef, useState } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/postActions";

import "./AddArticle.css";

const AddArticle = () => {
  const dispatch = useDispatch();

  const titleRef = useRef("");
  const contentRef = useRef("");

  var images = [];
  const [imageUrls, setImageUrls] = useState([]);
  const handleDrop = (files) => {
    // Push all the axios request promise into a single array
    const uploaders = files.map((file) => {
      // Initial FormData
      const formData = new FormData();
      formData.append("file", file);
      formData.append("tags", `codeinfuse, medium, gist`);
      formData.append("upload_preset", "qekl35ef"); // Replace the preset name with your own
      formData.append("api_key", "873296287657589"); // Replace API key with your own Cloudinary key
      formData.append("timestamp", (Date.now() / 1000) | 0);

      // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
      return axios
        .post(
          "	https://api.cloudinary.com/v1_1/manji-gang/image/upload",
          formData,
          {
            headers: { "X-Requested-With": "XMLHttpRequest" },
          }
        )
        .then((response) => {
          const data = response.data;
          const fileURL = data.secure_url; // You should store this URL for future references in your app
          images.push(fileURL);
        });
    });

    // Once all the files are uploaded
    axios.all(uploaders).then(() => {
      setImageUrls(images);
    });
  };

  const onPostSubmit = () => {
    if (titleRef.current.value !== "") {
      onAdd(titleRef.current.value, contentRef.current.value, imageUrls);
      alert("სტატია წარმატებით დაემატა");
      window.location.reload();
    } else {
      alert("სათაური აუცილებელია");
    }
  };

  const onAdd = (title, text, images) => {
    axios
      .post("http://localhost:3001/addNewPost", {
        title,
        text,
        images,
      })
      .then((res) => {
        dispatch(addPost(res.data));
      })
      .catch((e) => console.log("e", e));
  };

  return (
    <div>
      <form className="postForm">
        <div className="story">
          <input
            type="text"
            className="title"
            placeholder="სათაური"
            ref={titleRef}
          />
          <textarea
            ref={contentRef}
            name="story"
            rows="10"
            className="story"
            placeholder="კონტენტი"
          ></textarea>
        </div>
        <Dropzone onDrop={handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div className="drop_zone" {...getRootProps()}>
                <input {...getInputProps()} />
                <p>სურათები ჩაყარეთ აქ ან დააჭირეთ ასატვირთად</p>
              </div>
            </section>
          )}
        </Dropzone>
        <div className="images_in_dropzone">
          {imageUrls.map((img) => {
            return (
              <img
                key={img}
                style={{ marginTop: "30px" }}
                src={img}
                alt={titleRef.current.value}
              ></img>
            );
          })}
        </div>
      </form>
      <button onClick={onPostSubmit} className="add_post_button">
        სტატიის გამოქვეყნება
      </button>
    </div>
  );
};

export default AddArticle;
