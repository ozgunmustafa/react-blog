import React from 'react'
import ArticleList from '../components/articles/articleList';

import Tag from '../tag'

const TagIndex=() =>{
    return (
        <div className="categorySection">
        <div className="categoryTitle">
          <h1 >html</h1>
        </div>
    <ArticleList></ArticleList> 

        <div className="article-tags">
        <Tag></Tag>
        <Tag></Tag>
        <Tag></Tag>
        <Tag></Tag>
        <Tag></Tag>
        <Tag></Tag>
        </div>    
      </div>
    )
}


export default TagIndex;