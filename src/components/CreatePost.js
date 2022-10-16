import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowPost from "./ShowPost";

export default function CreatePost() {
  const [post, setPost] = useState("");
  const [feedBack, setFeedBack] = useState([]);

  const handleChange = (e) => {
    setPost(e.target.value);
  };

  const sendData = () => {
    let lastId;
    if(feedBack.slice(-1)[0] === undefined)
      lastId = 0;
    else
      lastId = parseInt(feedBack.slice(-1)[0].id);
    if (post.length === 0) 
      alert("cannot be empty");
    else {
      const newPost = {
        postContent: post,
        comments: [],
        id: (lastId + 1)
      };
      let updatedData = [...feedBack,newPost];
      setFeedBack(updatedData);
      axios.post("https://634b9812317dc96a308761f4.mockapi.io/posts", newPost);
      setPost("");
    }
  };

  const getData = async () => {
    const url = "https://634b9812317dc96a308761f4.mockapi.io/posts";
    let data = await fetch(url);
    let parsedData = await data.json();
    setFeedBack(parsedData);
  };

  useEffect(() => {
    getData();
  }, []);


  const deletePost = (id) => {
    const note = feedBack.filter((e) => e.id !== id);

    axios.delete(`https://634b9812317dc96a308761f4.mockapi.io/posts/${id}`);
    setFeedBack(note);
  };

  return (
    <div className="form-floating">
      <textarea
        className="form-control"
        placeholder="Leave a comment here"
        id="addTxt floatingTextarea2"
        style={{ height: "100px" }}
        onChange={handleChange}
        value={post}
      ></textarea>
      <label htmlFor="floatingTextarea2">type here</label>
      <button className="btn btn-success my-3" onClick={sendData}>
        Create Post
      </button>
      {feedBack.map((e,i) => {
        return <ShowPost key={i} id={e.id} postContent={e.postContent} deletePost={deletePost}/>;
      })}
    </div>
  );
}
