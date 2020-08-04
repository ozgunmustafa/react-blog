import React from "react";
import { Link } from "react-router-dom";

function footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <h2 className="footerTitle">ReactBlog</h2>
          <div className="socialMediaIcons">
            <Link to=""><i class="linkedin icon"></i></Link>
            <Link to=""> <i class="facebook icon"></i></Link>
            <Link to=""> <i class="twitter square icon"></i></Link>
          </div>
          <small className="footerText">
          ReactBlog react ile geliştirilmiş yazı paylaşma platformudur.
          </small>
         
        </div>
        
      </div>
    </footer>
  );
}

export default footer;
