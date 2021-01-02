import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import posts from "../data/posts";

// get latest post
const recentPosts = posts.sort((a, b) => a.time_published - b.time_published);
// const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const sequence = {
	hidden: {
		opacity: 0,
		y: 100,
	},
	visible: (x) => ({
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: [0.43, 0.13, 0.23, 0.96],
			delay: x * 0.2,
		},
		y: 0,
	}),
	exit: (x) => ({
		opacity: 0,
		transition: {
			duration: 0.5,
			ease: [0.43, 0.13, 0.23, 0.96],
			delay: x * 0,
		},
		y: 50,
		scale: 0,
	}),
};

const Blog = () => {
	return (
		<>
			<div className="App blog">
				<Header />
				<div className="content col col-2">
					<div className="wrapper">
						<ul className="list">
							{recentPosts.map((x) => (
								<Link
									to={`/blog/${x.id}/${x.title
										.replace(/[\W_]+/g, "-")
										.toLowerCase()}`}
									key={x.id}
									style={{ textDecoration: "none" }}
								>
									<motion.li
										initial="hidden"
										animate="visible"
										exit="exit"
										variants={sequence}
										custom={x.id}
										key={x.id}
									>
										<div className="wrapper">
											<h3>{x.title}</h3>
											<span>
												{x.time_published
													.slice(0, 10)
													.split("-")
													.reverse()
													.join("-")}
											</span>
											<p>{x.description}</p>
										</div>
									</motion.li>
								</Link>
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
