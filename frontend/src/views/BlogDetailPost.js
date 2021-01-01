import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import posts from "../data/posts";

const BlogDetailPost = ({ match }) => {
	const detailPost = posts.find((p) => p.id === match.params.id);
	return (
		<>
			<div className="App blog detail">
				<Header />
				<div className="content">
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
			</div>
		</>
	);
};

export default BlogDetailPost;
