import React from "react";

function Comments(props) {
  return (
    <div>
      <div className="comment">
        <div className="content">
          
            {props.detail.display_name}
         

          <div className="text">
            <p>{props.detail.body}</p>
          </div>
         
        </div>
      </div>
    </div>
  );
}
export default Comments;
