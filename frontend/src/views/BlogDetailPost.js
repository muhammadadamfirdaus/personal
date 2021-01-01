import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import posts from "../data/posts";

const BlogDetailPost = ({ match }) => {
	const detailPost = posts.find((p) => p.id === match.params.id);
	return (
		<>
			<div className="App blog detail">
				<Header />
				<div className="content col col-3">
					<div className="wrapper">
						<div>
							<Link to="/blog/">
								<span>Kembali</span>
							</Link>
							<h2>{detailPost.title}</h2>
							<span>
								Ditulis pada:{" "}
								{detailPost.time_published
									.slice(0, 10)
									.split("-")
									.reverse()
									.join("-")}
								, pukul {detailPost.time_published.slice(14, 19)} WIB.
							</span>
							<span>Oleh: {detailPost.author}</span>
							<article
								dangerouslySetInnerHTML={{ __html: detailPost.body }}
							></article>
						</div>
						<aside>
							<div className="widget">
								<div className="wrapper">x</div>
							</div>
						</aside>
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
