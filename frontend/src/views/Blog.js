import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import posts from "../data/posts";

// get latest post
const recentPosts = posts.sort((a, b) => a.time_published - b.time_published);
const Blog = () => {
	return (
		<>
			<div className="App blog">
				<Header />
				<div className="content col col-2">
					<div className="wrapper">
						<ul className="list">
							{recentPosts.map((x) => (
								<li key={x.id}>
									<h3>
										<Link
											to={`/blog/${x.id}/${x.title
												.replace(/[\W_]+/g, "-")
												.toLowerCase()}`}
										>
											{x.title}
										</Link>
									</h3>
									<span>
										{x.time_published
											.slice(0, 10)
											.split("-")
											.reverse()
											.join("-")}
									</span>
									<p>{x.description}</p>
								</li>
							))}
						</ul>
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

export default Blog;
