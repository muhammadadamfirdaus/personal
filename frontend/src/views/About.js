import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
	const year = new Date().getFullYear();

	return (
		<>
			<div className="App about">
				<Header />
				<div className="content">
					<div className="wrapper">
						<section className="col intro">
							<div className="wrapper">
								<h1>About Me</h1>
								<p>
									Hello, my name is Adam. Currently living in Jakarta,
									Indonesia. I am a professional front end developer. My focus
									is on front of frontend. So I enjoyed converting static mockup
									from design tools into interactive website.
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
									iure architecto minima quia ratione ea numquam iste id error.
									Minima provident sunt ratione facere quasi exercitationem,
									illo neque facilis commodi. Ipsa, rem eum quis at consequatur
									similique accusamus animi maiores, adipisci veritatis
									recusandae quasi. Quas ex nobis alias quam nemo placeat ad id
									expedita nihil! Quam aliquid maiores soluta reiciendis animi
									expedita. Voluptas beatae amet molestiae voluptatum deserunt
									eligendi, nemo saepe, a at ea suscipit ullam consectetur
									dolore nesciunt quas consequatur error ipsa iure odit numquam.
									Eius, dolore enim dolorem hic rem, ad repudiandae minus
									blanditiis similique fugit distinctio possimus.
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Officiis saepe facilis quia id reprehenderit accusantium
									minima non nihil perspiciatis rerum fuga, debitis aliquid
									molestiae illum qui unde nesciunt eveniet beatae eos,
									veritatis odio vitae. Necessitatibus nostrum saepe debitis
									repudiandae atque.
								</p>
							</div>
						</section>
					</div>
				</div>
				<Footer copyright={year} />
			</div>
		</>
	);
};

export default About;
