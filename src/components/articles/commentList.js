import React from "react";
import Comments from "./comments";

const commentList = (props) => {
  return (
    <div>
      <h3>Yorumlar</h3>
      {props.comments.map((comment) => {
        return <Comments detail={comment} key={comment.id} />;
      })}
    </div>
  );
};

export default commentList;
