import "../css/App.scss";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="col">
			<div className="wrapper">
				<nav>
					<Link to={"/"}>
						<span>Home</span>
					</Link>
					<Link to={"/about"}>
						<span>About</span>
					</Link>
					<span>Blog</span>
				</nav>
			</div>
		</header>
	);
};

export default Header;
