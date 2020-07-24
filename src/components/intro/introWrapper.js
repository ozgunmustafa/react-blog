import React, { useState, useEffect } from "react";
import Intro from "./intro";
import axios from "axios";

function IntroWrapper() {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    axios
      .get("https://react-yazi-yorum.herokuapp.com/posts")
      .then((response) => {
        setArticleList(response.data);
      });
  }, []);
  return (
    <div className="intro-wrapper">
      {articleList.map((article) => {
        return (
            <div
            key={article.id}
              className="intro-box"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1587613990221-ac89fb1a1cf4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')`,}}>
              <div className="bg-gradient">
                <span className="badge">Haber</span>
                <h2 className="title">{article.title}</h2>
                <p className="detail">{article.created_at}</p>
              </div>
            </div>
        );
      })}
    </div>
  );
}

export default IntroWrapper;
