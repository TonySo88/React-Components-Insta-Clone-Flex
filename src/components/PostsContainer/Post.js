// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  // set up state for the likes
  console.log("props from the likes page", props)
  const [likes, setLikes] = useState(props.information.likes)
  return (
    <div className="post-border">
      <PostHeader
        // username={props.post.username}
        // thumbnailUrl={
        //   props.post.thumbnailUrl
        // }
        dummyData={props.information}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.information.imageUrl}
        />
      </div>
      <LikeSection likes={likes} setLikes={setLikes}
      />
      <CommentSection
        postId={props.information.imageUrl}
        comments={props.information.comments}
      />
    </div>
  );
};

export default Post;
