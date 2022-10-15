import React from 'react'

export default function ShowPost(props) {
    return (
        <div className="my-3 card" key={props.index}>
            <div className="card-body">
                <h5 className="card-title">{`Post #${props.index + 1}`}</h5>
                <p className="card-text"><strong>${props.element}</strong></p>
                <button id={`${props.index + 1}`} onClick={() => { props.deletePost(this.id) }} className="btn btn-danger">Delete Post</button>
                <div>
                    <p className="my-2">Your comments :</p>
                </div>
                <div className="my-3 form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Write a comment</label>
                </div>
                <button className="btn btn-secondary">Post comment</button>
            </div>
        </div>
    )
}
