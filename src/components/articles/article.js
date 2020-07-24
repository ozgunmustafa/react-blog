import React from "react";
import Tag from "../tag";

 function article(props) {
  return (
    <div className="article">
      <img
        className="article-image"
        alt=""
        src="https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      />
      <div className="article-content">
        <h2>{props.article.title}</h2>
        <p>
        {props.article.content}
        </p>
      
      </div>
    </div>
  );
}
export default article
