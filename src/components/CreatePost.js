import React, { useRef } from 'react'

export default function CreatePost(props) {

    const addTxt = useRef(null);
    const posts = useRef(null);
    const comments =  useRef(null);

    const handleClick = () => {
        let post = localStorage.getItem("post");
        let postObj;

        if (post == null) {
            postObj = [];
        }
        else {
            postObj = JSON.parse(post);
        }
        postObj.push(addTxt.current.value);
        localStorage.setItem("post", JSON.stringify(postObj));
        addTxt.current.value = "";
        console.log(postObj);
        showPosts();
    }

    const showPosts = () => {
        let post = localStorage.getItem("post");
        let postObj;

        if (post == null) {
            postObj = [];
        }
        else {
            postObj = JSON.parse(post);
        }
        let html = '';
        postObj.forEach((element, index) => {
            html += `<div class="my-3 card">
                        <div class="card-body">
                            <h5 class="card-title">Post #${index+1}</h5>
                            <p class="card-text"><strong>${element}</strong></p>
                            <button id=${index} onClick={deletePost(index)} class="btn btn-danger">Delete Post</button>
                            <div ref={comments}>
                                <p class="my-2">Your comments :</p>
                            </div>
                            <div class="my-3 form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label for="floatingTextarea">Write a comment</label>
                            </div>
                            <button onClick={showcomments} class="btn btn-secondary">Post comment</button>
                        </div>
                    </div>`;
        });
        if(postObj.length!==0){
            posts.current.innerHTML = html;
        }
        else{
            posts.current.innerHTML = "No posts created!"
        }
    }

    const deletePost = (index) =>{
        console.log("I am deleting ", index);

        let post = localStorage.getItem("post");
        let postObj;

        if (post == null) {
            postObj = [];
        }
        else {
            postObj = JSON.parse(post);
        }

        postObj.splice(index, 1);
        localStorage.setItem("post", JSON.stringify(postObj));
        showPosts();
    }

    return (
        <>
            <div className="form-floating">
                <textarea ref={addTxt} className="form-control" placeholder="Leave a comment here" id="addTxt floatingTextarea2" style={{ height: "100px" }}></textarea>
                <label htmlFor="floatingTextarea2">{props.title}</label>
                <button className="btn btn-success my-3" onClick={handleClick}>Create Post</button>
            </div>
            <hr />
            <h1>My posts :</h1>
            <div ref={posts}></div>
        </>
    )
}
