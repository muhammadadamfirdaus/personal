import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useFetch from "../hooks/useFetch";

const ArticleDetail = ({ match }) => {
	// const detailPost = posts.find((p) => p.id === match.params.id);
	const post = useFetch(
		`https://www.muhammadadamfirdaus.com/blog/wp-json/wp/v2/posts?slug=${match.params.id}`
	);
	console.log(match);
	console.log(post);
	const dateOptions = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	};
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
				<div className="content col col-3">
					<div className="wrapper">
						<div>
							{post && (
								<article>
									<div className="wrapper">
										<Link to="/article">
											<span>Kembali</span>
										</Link>
										<h3>{post[0].title.rendered}</h3>
										<span>
											Ditulis pada:{" "}
											{new Date(post[0].date).toLocaleDateString(
												"id-ID",
												dateOptions
											)}
										</span>
										<div
											dangerouslySetInnerHTML={{
												__html: post[0].content.rendered,
											}}
										></div>
									</div>
								</article>
							)}
						</div>
					</div>
				</div>
				{/* <motion.div
					className="content col col-3"
					initial="hidden"
					animate="visible"
					exit="exit"
					variants={pageTransition}
				>
					<div className="wrapper">
						<div>
							<article>
								<div className="wrapper">
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
									<div
										dangerouslySetInnerHTML={{ __html: detailPost.body }}
									></div>
								</div>
							</article>
						</div>
						<aside>
							<div className="widget">
								<div className="wrapper">x</div>
							</div>
						</aside>
						<aside>
							<div className="widget">
								<div className="wrapper">x</div>
							</div>
						</aside>
					</div>
				</motion.div> */}
				<Footer />
			</div>
		</>
	);
};

export default ArticleDetail;
