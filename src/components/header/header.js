import React from "react";
import logo from "../../logo.png";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

function header() {
  return (
    <Menu stackable>
      <Menu.Item>
        <img src={logo} className="logo" alt="" />
      </Menu.Item>

      <Menu.Item name="features">
        <NavLink to="/">Anasayfa</NavLink> 
      </Menu.Item>

      <Menu.Item name="features">
        <NavLink to="/createArticle">Yeni Yazı </NavLink> 
      </Menu.Item>



    </Menu>
  );
}

export default header;
