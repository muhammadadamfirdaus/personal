import "../css/App.scss";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Blog = () => {
	return (
		<>
			<Header />
			<div className="content blog">
				<div className="wrapper">
					<section></section>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Blog;
