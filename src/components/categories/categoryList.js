import React from "react";
import Category from "./category";

export default function categoryList() {
  return (
    <div className="categories">
      <h2>Kategoriler</h2>
      <div className="categoryList container">
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
}
