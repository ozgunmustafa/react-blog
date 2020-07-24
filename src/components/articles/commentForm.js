import React, { useState } from "react";
const COMMENT_INITIAL = { display_name: "", body: "" };

const CommentForm = (props) => {

  const [comment, setComment] = useState(COMMENT_INITIAL);
  
  const handleOnChange = (event) => {
    setComment({ ...comment, [event.target.name]: event.target.value });
  };

  return (
    <React.Fragment>
      <h3>Yorum Yap</h3>

      <form
        className="ui form"
        onSubmit={(event) => {
          console.log(comment)
          props.handleCommentSubmit(event,comment);
          setComment(COMMENT_INITIAL);
        }}
      >
        <div className="equal width fields">
          <div className="field">
            <div className="ui fluid input">
              <input
                name="display_name"
                type="text"
                placeholder="İsim Soyisim"
                onChange={handleOnChange}
                value={comment.display_name}
              />
            </div>
          </div>
        </div>
        <div className="field">
          <textarea
            name="body"
            placeholder="Yorum Yap"
            rows="5"
            onChange={handleOnChange}
            value={comment.body}
          ></textarea>
        </div>
        <div className="field">
          <button className="ui button" type="submit">
            Gönder
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};
export default CommentForm;
