import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import ArticleIndex from "./pages/ArticleIndex";
import HomePage from "./pages/HomePage"
import NewArticle from "./pages/NewArticlePage"
import EditArticle from "./pages/EditArticlePage"

function App() {
  return (
    <Router>
      <Header></Header>
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/post/:id" exact  component={ArticleIndex}></Route>
      <Route path="/createArticle" component={NewArticle}></Route>
      <Route path="/post/:id/edit" component={EditArticle}></Route>
      <Footer></Footer>

    </Router>
  );
}
export default App;
