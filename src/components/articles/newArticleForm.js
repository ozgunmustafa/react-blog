import React, { useState, useEffect } from "react";
import { api } from "../../api";
import { Link, withRouter, useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editArticle } from "../../actions";
const INITIAL_ARTICLE = {
  title: "",
  content: "",
};
const NewArticleForm = (props) => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [article, setArticle] = useState(INITIAL_ARTICLE);
  const [error, setError] = useState("");

  const onInputChange = (event) =>
    setArticle({ ...article, [event.target.name]: event.target.value });

  const onFormSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (props.article?.title) {
      dispatch(editArticle(id, article, history.push));
    } else {
      api()
        .post("/posts", article)
        .then((response) => {
          history.push("/");
        })
        .catch((err) => {
          setError("Başlık ve içerik kısmı doldurulmalıdır.");
        });
    }
  };
  useEffect(() => {
    if (props.article?.title && props.article?.content)
      setArticle({ title: props.article.title, content: props.article.content });
  }, [props.article]);
  return (
    <div className="container ui form softBorder">
      <h1>{article.content ? "Düzenle" : "Yeni Yazı Oluştur"}</h1>
      {error && (
        <div className="ui icon message">
          <div className="content">
            <div className="header">Hata Oluştu</div>
            <p>{error}</p>
          </div>
        </div>
      )}

      <div className="equal width fields">
        <div className="field">
          <label>Başlık</label>
          <div className="ui input">
            <input
              onChange={onInputChange}
              name="title"
              value={article.title}
              type="text"
              placeholder="First name"
            />
          </div>
        </div>
      </div>

      <div className="field">
        <label>Metni girmeye başlayın...</label>
        <textarea
          onChange={onInputChange}
          name="content"
          value={article.content}
          placeholder="Tell us more about you..."
          rows=""
        ></textarea>
      </div>

      <div className="field">
        <button className="ui button" onClick={onFormSubmit}>
          Kaydet
        </button>
      </div>
    </div>
  );
};
export default NewArticleForm;
