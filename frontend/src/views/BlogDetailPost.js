import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import posts from "../data/posts";

const BlogDetailPost = ({ match }) => {
	const detailPost = posts.find((p) => p.id === match.params.id);
	console.log(detailPost);
	return (
		<>
			<Header />
			<div className="content blog detail">
				<div className="wrapper">
					<div>
						<h1>Detail Post</h1>
					</div>
					<aside>
						<div className="widget">
							<div className="wrapper">y</div>
						</div>
					</aside>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default BlogDetailPost;
