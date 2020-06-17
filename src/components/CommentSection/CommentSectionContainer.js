// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  console.log("comments", props.comments)

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {props.comments.map((comment, id) => {
        return <div key={id}><Comment comment={comment}/></div>
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
