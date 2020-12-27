import "../css/App.scss";
import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import skills from "../data/skills";

const Home = () => {
	const descH1 = {
		hidden: {
			opacity: 0,
			y: -100,
		},
		visible: {
			opacity: 1,
			y: 0,
		},
	};

	const social = {
		hidden: {
			opacity: 0,
			x: 100,
		},
		visible: (x) => ({
			opacity: 1,
			transition: { delay: x * 0.1 },
			x: 0,
		}),
	};

	const year = new Date().getFullYear();
	const yearFrontEnd = Number(year - 2015);

	// get design skill
	const skillDesign = skills
		.filter(({ category }) => category === "design")
		.sort((a, b) => a.id - b.id);

	// get coding skill
	const skillCoding = skills
		.filter(({ category }) => category === "code")
		.sort((a, b) => a.id - b.id);

	console.log(skillCoding);
	return (
		<>
			<div className="app home">
				<Header />
				<section className="col intro">
					<div className="wrapper">
						<div className="b desc">
							<div className="wrapper">
								<div>
									<motion.h1
										initial="hidden"
										animate="visible"
										variants={descH1}
										transition={{ ease: "easeOut", duration: 1 }}
									>
										Turn UI into Something Interactive
									</motion.h1>
									<p>
										Almost {yearFrontEnd} years in Front End World, passionate
										on animation, elegant color palettes, UI trends.
									</p>
									<p>
										Solid in CSS, continuous growing on JavaScript, and keep
										following on latest web technologies.
									</p>
								</div>
							</div>
						</div>
						<div className="b profile">
							<div className="wrapper">
								<div>
									<div className="photo">
										<img src="images/profile.png" alt="" />
									</div>
									<h3>Muhammad Adam Firdaus</h3>
								</div>
							</div>
						</div>
						<div>
							<ul className="social">
								<motion.li
									custom={0}
									initial="hidden"
									animate="visible"
									variants={social}
								>
									<a href="mailto:adam@muhammadadamfirdaus.com">
										<span className="icon icon-email"></span>
									</a>
								</motion.li>
								<motion.li
									custom={1}
									initial="hidden"
									animate="visible"
									variants={social}
								>
									<a
										href="https://www.behance.net/muhammadadamfirdaus"
										target="blank"
									>
										<span className="icon icon-behance"></span>
									</a>
								</motion.li>
								<motion.li
									custom={2}
									initial="hidden"
									animate="visible"
									variants={social}
								>
									<a
										href="https://github.com/muhammadadamfirdaus"
										target="blank"
									>
										<span className="icon icon-github"></span>
									</a>
								</motion.li>
								<motion.li
									custom={3}
									initial="hidden"
									animate="visible"
									variants={social}
								>
									<a
										href="https://www.linkedin.com/in/muhammadadamfirdaus/"
										target="blank"
									>
										<span className="icon icon-linkedin"></span>
									</a>
								</motion.li>
								<motion.li
									custom={4}
									initial="hidden"
									animate="visible"
									variants={social}
								>
									<a href="https://twitter.com/id_adam" target="blank">
										<span className="icon icon-twitter"></span>
									</a>
								</motion.li>
							</ul>
						</div>
					</div>
				</section>
				<section className="col col-2 summary">
					<div className="wrapper">
						<div>
							<div className="wrapper">
								<div>
									<img src="images/code.png" alt="" />
								</div>
							</div>
						</div>
						<div className="b">
							<div className="wrapper">
								<div>
									<div className="wrapper">
										<h2>Who Am I?</h2>
										<p>
											Professional all rounder who know how to satisfying
											clients.
										</p>
									</div>
								</div>
								<div>
									<div className="wrapper">
										<h2>What Can I Do?</h2>
										<p>
											Generally, I can do common what people said about frontend
											field. Aesthetic, beautiful looking, interactivity,
											colors, emotional, users, clients, and stuff like that.
										</p>
										<p>
											Specifically, I research, design, and also code web apps.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div className="wrapper">
								<div>
									<div className="wrapper">
										<h3>Analysis</h3>
										<p>
											Every projects, as a person, I love to research first. How
											the others do that, it could be better than that, and how
											far it can go further.
										</p>
										<p>
											When get stuck, what causes it? Should we make a improve
											or just tweak a few things.
										</p>
									</div>
								</div>
								<div>
									<div className="wrapper">
										<h3>Branding</h3>
										<p>
											I want to my users know what products that I build. Then,
											I should make it easier to everyone to memorize.
										</p>
										<p>
											It could be change the logo as corporate identity or
											discuss to other teams how it should be running.
										</p>
										<p>
											Sometimes, I do SEO a lot. Make sure all meta tags are
											correct. Follow schema.org guidances. So, I aware of my
											apps in order to boost marketing performances.
										</p>
									</div>
								</div>
								<div>
									<div className="wrapper">
										<h3>Server</h3>
										<p>When I do projects alone, I handle server by myself.</p>
										<p>
											Mostly still traditional hosting or VPS running on Apache,
											NGINX, or even LiteSpeed. Yes. I install them manually.
										</p>
										<p>
											When needed, I pay attention to server performances. How
											much Apache can handle concurrent connection?
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="col col-2 skills">
					<div className="wrapper">
						<div>
							<div className="wrapper">
								<h2>Design</h2>
								<ul className="list">
									{skillDesign.map((d) => (
										<li key={d.id}>
											<h3>{d.title}</h3>
											<p>{d.description}</p>
											{d.assessment ? (
												<div className="assessments">
													<span className="icon icon-clipboard"></span>
													<span>
														<a
															href="https://www.linkedin.com/in/muhammadadamfirdaus/detail/skills/(ACoAABdRv98BirGK39QzdXCCEOLM2K3v3Ut_YVo,2)/"
															target="blank"
														>
															LinkedIn Skill Assessment badge
														</a>
													</span>
												</div>
											) : (
												""
											)}
										</li>
									))}
								</ul>
							</div>
						</div>
						<div>
							<div className="wrapper">
								<h2>Code</h2>
								<ul className="list">
									{skillCoding.map((c) => (
										<li key={c.id}>
											<h3>{c.title}</h3>
											<p>{c.description}</p>
											{c.assessment === true ? (
												<div className="assessments">
													<span className="icon icon-clipboard"></span>
													<span>
														<a
															href="https://www.linkedin.com/in/muhammadadamfirdaus/detail/skills/(ACoAABdRv98BirGK39QzdXCCEOLM2K3v3Ut_YVo,2)/"
															target="blank"
														>
															LinkedIn Skill Assessment badge
														</a>
													</span>
												</div>
											) : (
												""
											)}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section className="col experiences">
					<div className="wrapper">
						<ul className="list">
							<h2>Experiences</h2>
							<li>
								<ul>
									<h3>Velospace &amp; Co.</h3>
									<li className="year">
										<span>Nov 2019</span>
										<span>-</span>
										<span>Present</span>
									</li>
									<li>
										<span>
											Focusing on the frontend side, my responsibilities is
											related to:
										</span>
										<ul className="detail">
											<li>
												Create &amp; maintain Velospace &amp; Co's main frontend
												website.
											</li>
											<li>
												Creating user interfaces, user journey, slicing it to
												HTML &amp; JavaScript.
											</li>
											<li>
												Create PERSEGI frontend as a Velospace &amp; Co's
												extending to furniture lifestyle brand.
											</li>
											<li>Deploy to the hosting.</li>
										</ul>
									</li>
								</ul>
							</li>
							<li>
								<ul>
									<li>
										<h3>TEMPO</h3>
									</li>
									<li className="year">
										<span>May 2016</span>
										<span>-</span>
										<span>Nov 2019</span>
									</li>
									<li>
										<ul className="detail">
											<li>
												<span>Revamping TEMPO.CO news main site.</span>
											</li>
											<li>
												<span>
													Create UI for desktop, mobile, and mobile apps.
												</span>
											</li>
											<li>
												<span>Slice it into desktop & mobile version.</span>
											</li>
											<li>
												<span>
													Ensuring site performances for TEMPO.CO like a load
													speed, readability, and brand awareness.
												</span>
											</li>
											<li>
												<span>Create reusable Javascript components.</span>
											</li>
											<li>
												<span>
													Implementing schema.org, meta tags for SEO and SEM
													purposes.
												</span>
											</li>
											<li>
												<span>Revamping Cantika.com and Indonesiana.id.</span>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li>
								<ul>
									<li>
										<h3>Kompas.com</h3>
									</li>
									<li className="year">
										<span>Jan 2015</span>
										<span>-</span>
										<span>Mar 2016</span>
									</li>
									<li>
										<span>
											At Kompas.com, I worked as a part of Digital Advertising.
											Especially for developing client's banners, microsite, and
											related. Work closely with account executive to deliver
											better result for client's performances.
										</span>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</section>
				<section className="col portfolio">
					<div className="wrapper">
						<ul className="list">
							<h2>Portfolio</h2>
							<li>
								<ul>
									<h3>Velospace &amp; Co.</h3>
									<li className="col col-3 projects">
										<div className="wrapper">
											<div className="thumbnail">
												<a
													href="https://www.behance.net/gallery/91891661/Velospace-Co"
													target="blank"
												>
													<img
														src="images/projects/velospace.png"
														alt="Velospace &amp; Co."
													/>
												</a>
											</div>
											<div>
												<div className="wrapper">
													<p>This is main site of Velospace &amp; Co.</p>
													<p>
														Main purpose when I designed it is how can I get
														people attention from their first landed in our
														pages.
													</p>
													<p>
														I should let people know, this site is about house
														and their needs. So I try to make top viewport area
														seamlessly beautiful.
													</p>
												</div>
											</div>
											<div>
												<div className="wrapper">
													<a
														href="https://www.behance.net/gallery/91891661/Velospace-Co"
														target="blank"
														className="button default white"
													>
														Learn More
													</a>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</li>
							<li>
								<ul>
									<h3>GAWAI.IO</h3>
									<li className="col col-3 projects">
										<div className="wrapper">
											<div className="thumbnail">
												<a
													href="https://www.behance.net/gallery/91891661/Velospace-Co"
													target="blank"
												>
													<img
														src="images/projects/gawaiio.png"
														alt="Velospace &amp; Co."
													/>
												</a>
											</div>
											<div>
												<div className="wrapper">
													<p>
														GAWAI.IO is one of my side projects. Still
														prototype. But I have plan to make it with React or
														maybe another frameworks. This demo is about how can
														I deliver to you what exactly my feel, my vision, my
														imagination about design especially in gadget
														lifestyle industries. I am interested on gadget.
														That's why I created this site.
													</p>
												</div>
											</div>
											<div>
												<div className="wrapper">
													<a
														href="https://www.behance.net/gallery/91891661/Velospace-Co"
														target="blank"
														className="button default white"
													>
														Learn More
													</a>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</li>
							<li>
								<ul>
									<h3>Uniqlo Redesign Idea</h3>
									<li className="col col-3 projects">
										<div className="wrapper">
											<div className="thumbnail">
												<a
													href="https://www.behance.net/gallery/91891661/Velospace-Co"
													target="blank"
												>
													<img
														src="images/projects/uniqlo.png"
														alt="Velospace &amp; Co."
													/>
												</a>
											</div>
											<div>
												<div className="wrapper">
													<p>
														This mockup is represent my intuitive. I decided
														Uniqlo just because other brand already have "OK"
														user interfaces.
													</p>
												</div>
											</div>
											<div>
												<div className="wrapper">
													<a
														href="https://www.behance.net/gallery/91891661/Velospace-Co"
														target="blank"
														className="button default white"
													>
														Learn More
													</a>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</section>
				<Footer copyright={year} />
			</div>
		</>
	);
};

export default Home;
