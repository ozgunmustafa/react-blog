import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getArticleList } from "../../actions";

function ArticleList() {
  const articleList = useSelector((state) => state.articleList);
  const dispatch = useDispatch();
  console.log(dispatch)

  useEffect(() => {

    dispatch(getArticleList());
  }, []);

  return (
    <div className="container">
      <div className="articleWrapper">
        {articleList.map((article) => {
          return (
            <Link
              to={`/post/${article.id}`}
              className="article undernone"
              key={article.id}
            >
              <img
                className="article-image"
                alt=""
                src="https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              />
              <div className="article-content">
                <h2>{article.title}</h2>
                <p>{article.content}</p>
                <div className="article-tags"></div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default ArticleList;
