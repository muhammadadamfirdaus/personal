import "./css/App.scss";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./views/Home";
import About from "./views/About";
import Blog from "./views/Blog";
import BlogDetailPost from "./views/BlogDetailPost";

function App() {
	const location = useLocation();
	return (
		// <Router>
		<AnimatePresence>
			<Switch location={location} key={location.key}>
				<Route path="/" component={Home} exact />
				<Route path="/about" component={About} exact />
				<Route path="/blog/" component={Blog} exact />
				<Route path="/blog/:id" component={BlogDetailPost} />
			</Switch>
		</AnimatePresence>
		// </Router>
	);
}

export default App;
