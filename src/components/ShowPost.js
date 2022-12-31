import React from "react";

export default function ShowPost(props) {
  const positive = ["good", "better", "best"];
  const negative = ["worst", "bad", "worse"];

  // this model is very good

  const handleChange = (e) => {
    props.setComment(e.target.value);
  };

  const checkStatement = (str) => {
    // for determining the comments
    str = str.toLowerCase();
    const arr = str.split(" ");
    let pos = 0,
      neg = 0;
    for (let i of positive) {
      for (let j of arr) {
        if (i === j) pos++;
      }
    }
    for (let i of negative) {
      for (let j of arr) {
        if (i === j) neg++;
      }
    }
    if (pos > neg) return "#71F79F";
    else if (pos < neg) return "#F7996E";
    else return "#C9C5BA";
  };

  return (
    <div className="my-3 card" style={{backgroundColor: '#F4E3B2'}}>
      <div className="card-body">
        <h5 className="card-title">{`Post #${props.id}`}</h5>
        <p className="card-text">
          <strong>{props.postContent}</strong>
        </p>
        <button
          className="btn btn-danger"
          onClick={() => {
            props.deletePost(props.id);
          }}
        >
          Delete Post
        </button>
        <div>
          <p className="my-2">Your comments :</p>
          {props.showComments.map((e, i) => {
            // diplaying all the comments
            let colour = checkStatement(e);
            return (
              <p key={i}>
                <mark style={{ background: colour, borderRadius: "5px", padding: "5px" }}>{e}</mark>
              </p>
            );
          })}
        </div>
        <div className="my-3 form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            onChange={handleChange}
            value={props.comment}
            style={{backgroundColor:'#F4E3B2', 
                    border:'1px solid black'
                  }}
          ></textarea>
          <label htmlFor="floatingTextarea">Write a comment</label>
          <button
            className="btn btn-secondary"
            onClick={() => {
              props.addComments(props.id);
            }}
            style={{ marginTop: "10px" }}
          >
            Post comment
          </button>
        </div>
      </div>
    </div>
  );
}
