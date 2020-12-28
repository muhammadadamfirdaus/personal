import React from "react";

const Footer = ({ copyright }) => {
	return (
		<footer>
			<div className="wrapper">
				<div>
					<p>
						Made with <span className="icon icon-love"></span> in Cinere.
					</p>
					<p>Copyright &copy; {copyright}. All rights reserved.</p>
					<p>
						See this project on{" "}
						<a
							href="https://github.com/muhammadadamfirdaus/personal"
							target="blank"
						>
							Github
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
