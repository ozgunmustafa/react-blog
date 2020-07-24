import React from "react";
import logo from '../../logo.png';


function header() {

    return (
        <header>
          <a href="/" className="logo">
            <img src={logo} className="logo" alt="" />
          </a>

        </header>
    );

}

export default header;
