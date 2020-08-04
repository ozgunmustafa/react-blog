import {
  GET_ARTICLE_LIST_ERROR,
  GET_ARTICLE_LIST,
  GET_ARTICLE,
  GET_ARTICLE_ERROR,
  CREATE_COMMENT,
  CREATE_COMMENT_ERROR,
  REMOVE_ARTICLE,
  REMOVE_ARTICLE_ERROR,
  EDIT_ARTICLE,
  EDIT_ARTICLE_ERROR,
} from "../actions";

const INITIAL_STATE = {
  articleList: [],
  articleListError: "",
  articleDetails: {
    id: "",
    title: "",
    content: "",
    created_at: "",
    articleComments: [],
  },
  error: "",
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ARTICLE_LIST:
      return { ...state, articleList: action.payload, error: "" };
    case GET_ARTICLE_LIST_ERROR:
      return { ...state, error: action.payload };
    case GET_ARTICLE:
      return { ...state, articleDetails: action.payload, error: "" };
    case GET_ARTICLE_ERROR:
      return { ...state, error: action.payload };

    case CREATE_COMMENT:
      return {
        ...state,
        articleDetails: {
          ...state.articleDetails,
          articleComments: [
            ...state.articleDetails.articleComments,
            action.payload,
          ],
        },
        error: "",
      };
    case CREATE_COMMENT_ERROR:
      return { ...state, error: action.payload };

    case REMOVE_ARTICLE:
      return {
        ...state,
        articleList: state.articleList.filter(
          (article) => article.id !== action.payload
        ),
        error: "",
      };

    case REMOVE_ARTICLE_ERROR:
      return { ...state, error: action.payload };

    case EDIT_ARTICLE:
      return {
        ...state,
        articleDetails: { ...state.articleDetails, ...action.payload },
        error:""
      };

    case EDIT_ARTICLE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
