import React, { useState } from 'react'

export default function ShowPost(props) {

    const handleChange = (e) => {
        props.setComment(e.target.value);
    }

    const positive= ['good', 'better', 'best'];
    const negative= ['bad', 'worse', 'worst'];

    return (
        <div className="my-3 card">
            <div className="card-body">
                <h5 className="card-title">{`Post #${props.id}`}</h5>
                <p className="card-text"><strong>{props.postContent}</strong></p>
                <button className="btn btn-danger" onClick={() => {props.deletePost(props.id)}}>Delete Post</button>
                <div>
                    <p className="my-2"><em>Your comments :</em></p>
                        {props.showComments.map((e, i) => {      // diplaying all the comments 
                            return <p key={i}><mark style={{backgroundColor: "#C9C5BA", borderRadius: "5px", padding: "5px"}}>{e}</mark></p>
                            // return <Comments key={i} comments={e.comments} />
                        })}
                </div>
                <div className="my-3 form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" onChange={handleChange} value={props.comment}></textarea>
                    <label htmlFor="floatingTextarea">Write a comment</label>
                <button className="btn btn-secondary" onClick={() => {props.addComments(props.id)}}>Post comment</button>
            </div>
        </div>
    )
}