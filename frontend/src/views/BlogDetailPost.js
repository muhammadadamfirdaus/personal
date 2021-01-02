import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import posts from "../data/posts";

const BlogDetailPost = ({ match }) => {
	const detailPost = posts.find((p) => p.id === match.params.id);
	// const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };

	const pageTransition = {
		hidden: {
			scale: 0,
			// width: 0,
		},
		visible: {
			scale: 1,
			width: "100%",
			transition: {
				duration: 0.5,
				ease: [0.6, 0.01, -0.05, 0.9],
			},
		},
		exit: {
			scale: 0,
			transition: {
				duration: 0.5,
				ease: [0.43, 0.13, 0.23, 0.96],
			},
		},
	};
	return (
		<>
			<div className="App blog detail">
				<Header />
				<motion.div
					className="content col col-3"
					initial="hidden"
					animate="visible"
					exit="exit"
					variants={pageTransition}
				>
					<div className="wrapper">
						<ul>
							<Link to="/blog/">
								<span>Kembali</span>
							</Link>
							<li>
								<div className="wrapper">
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
							</li>
						</ul>
						<aside>
							<div className="widget">
								<div className="wrapper">x</div>
							</div>
						</aside>
					</div>
				</motion.div>
				<Footer />
			</div>
		</>
	);
};

export default BlogDetailPost;
