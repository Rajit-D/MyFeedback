import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowPost from "./ShowPost";

export default function CreatePost() {
  const [post, setPost] = useState("");
  const [feedBack, setFeedBack] = useState([]);

  const handleChange = (e) => {
    setPost(e.target.value);             // getting the string that is written in the text area and setting it to 
  };                                     // the state variable post

  const sendData = () => {      // function to post 
    let lastId;
    if(feedBack.slice(-1)[0] === undefined)               // checking if the entered object is the first object 
      lastId = 0;
    else
      lastId = parseInt(feedBack.slice(-1)[0].id);         // getting the last id of the object from the api
    if (post.length === 0) 
      alert("cannot be empty");
    else {
      const newPost = {              // new object that has to be posted to the api
        postContent: post,
        comments: [],
        id: (lastId + 1)
      };
      let updatedData = [...feedBack,newPost];          // merging the new post with the previous posts
      setFeedBack(updatedData);                  // setting feedback as the new updated array of objects
      axios.post("https://634b9812317dc96a308761f4.mockapi.io/posts", newPost);     // posting the new post to the api
      setPost("");
    }
  };
 
  const getData = async () => {               // function to retrieve the data from the api
    const url = "https://634b9812317dc96a308761f4.mockapi.io/posts";     
    let data = await fetch(url);
    let parsedData = await data.json();
    setFeedBack(parsedData);        
  };

  useEffect(() => {       // calling the getData() for the first render of the component
    getData();
  }, []);


  const deletePost = (id) => {             // function to delete a post 
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
      {feedBack.map((e,i) => {             // displaying all the post present in the api 
        return <ShowPost key={i} id={e.id} postContent={e.postContent} deletePost={deletePost}/>;
      })}
    </div>
  );
}
