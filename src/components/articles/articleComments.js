import React from 'react'
import CommentList from "./commentList"; 
import CommentForm from './commentForm';

 const articleCommnets=(props)=> {
    return (
       <React.Fragment>
          <CommentList comments={props.comments}/>
          <CommentForm handleCommentSubmit={props.handleCommentSubmit}/>
       </React.Fragment>
    )
}
export default articleCommnets