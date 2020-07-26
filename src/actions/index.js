import { api } from "../api";
import axios from "axios";

export const GET_ARTICLE = "GET_ARTICLE";
export const GET_ARTICLE_ERROR = "GET_ARTICLE_ERROR";
export const GET_ARTICLE_LIST = "GET_ARTICLE_LIST";
export const GET_ARTICLE_LIST_ERROR = "GET_ARTICLE_LIST_ERROR";
export const CREATE_COMMENT = "CREATE_COMMENT";
export const CREATE_COMMENT_ERROR = "CREATE_COMMENT_ERROR";
export const REMOVE_ARTICLE = "REMOVE_ARTICLE";
export const REMOVE_ARTICLE_ERROR = "REMOVE_ARTICLE_ERROR";
export const EDIT_ARTICLE = "EDIT_ARTICLE";
export const EDIT_ARTICLE_ERROR = "EDIT_ARTICLE_ERROR";

export const getArticleList = () => (dispatch) => {
  api()
    .get("/posts")
    .then((response) => {
      dispatch({ type: GET_ARTICLE_LIST, payload: response.data });
    })
    .catch(() => {
      dispatch({
        type: GET_ARTICLE_LIST,
        payload: "Yazılar Yüklenirken Hata Oluştu",
      });
    });
};

export const getArticle = (id) => (dispatch) => {
  axios
    .all([api().get(`/posts/${id}`), api().get(`/posts/${id}/comments`)])
    .then((responses) => {
      const payload = {
        ...responses[0].data,
        articleComments: responses[1].data,
      };

      dispatch({
        type: GET_ARTICLE,
        payload,
      });
    })
    .catch((error) =>
      dispatch({
        type: GET_ARTICLE_ERROR,
        payload: " Detaylar getirilirken hata oluştu",
      })
    );
};

export const createComment = (id, comment) => (dispatch) => {
  api()
    .post(`/posts/${id}/comments`, comment)
    .then((response) => {
      dispatch({
        type: CREATE_COMMENT,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: CREATE_COMMENT_ERROR,
        payload: " Yorum oluşturulurken hata oluştu",
      });
    });
};

export const editArticle = (id, article, push) => (dispatch) => {
  api()
    .put(`/posts/${id}`, article)
    .then((response) => {
      dispatch({
        type: EDIT_ARTICLE,
        payload: response.data,
      });

      push(`/post/${id}`);
    })
    .catch(() =>
      dispatch({
        type: EDIT_ARTICLE_ERROR,
        payload: "Düzenlenirken hata oluştu",
      })
    );
};

export const removeArticle = (id, close, push) => (dispatch) => {
  api()
    .delete(`/posts/${id}`)
    .then((response) => {
      dispatch({ type: REMOVE_ARTICLE, payload: id });
      close();
      push("/");
    })
    .catch(() =>
      dispatch({
        type: REMOVE_ARTICLE_ERROR,
        payload: "Silinirken hata oluştu",
      })
    );
};
