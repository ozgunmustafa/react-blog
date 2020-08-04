import React from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";

function header() {
  return (
   	<header>
		<div id="nav-head">
			<div id="logo">ReactBlog</div>
			<label for="menu-toggle">
					<div class="toggle-icon">
						<div></div>
						<div></div>
						<div></div>
					</div>
				</label>
		</div>
		<input type="checkbox" id="menu-toggle"/>
		<ul class="nav-links">
			<li>  <NavLink to="/">Anasayfa</NavLink> </li>
			<li> <NavLink to="/createArticle">Yeni Yazı </NavLink> </li>
		
		</ul>
	</header>
  );
}

export default header;
