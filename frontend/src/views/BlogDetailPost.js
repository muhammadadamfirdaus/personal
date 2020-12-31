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
						<h2>{detailPost.title}</h2>
						<span>
							{detailPost.time_published
								.slice(0, 10)
								.split("-")
								.reverse()
								.join("-")}
						</span>
						<article>
							<p>{detailPost.body}</p>
						</article>
					</div>
					<aside>
						<div className="widget">
							<div className="wrapper"></div>
						</div>
					</aside>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default BlogDetailPost;
