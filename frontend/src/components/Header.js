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
					<Link to={"/article"}>
						<span>Blog</span>
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
