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
				</div>
			</div>
		</footer>
	);
};

export default Footer;
