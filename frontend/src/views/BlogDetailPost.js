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
			opacity: 0,
			// scale: 0,
			y: -50,
			// width: 0,
		},
		visible: {
			opacity: 1,
			// scale: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: [0.6, 0.01, -0.05, 0.9],
			},
		},
		exit: {
			opacity: 0,
			y: 200,
			transition: {
				duration: 1,
				ease: [0.6, 0.01, -0.05, 0.9],
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
