import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import IntroWrapper from "../components/intro/introWrapper";
import CategoryList from "../components/categories/categoryList";
import ArticleList from "../components/articles/articleList";

const HomePage=()=> {
  return (
    <div>
      <IntroWrapper></IntroWrapper>
      <CategoryList></CategoryList>
      <ArticleList></ArticleList>

    </div>
  );
}

export default HomePage;
