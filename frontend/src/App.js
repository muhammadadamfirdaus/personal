import "./css/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Blog from "./views/Blog";
import BlogDetailPost from "./views/BlogDetailPost";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/about" component={About} exact />
				<Route path="/blog/" component={Blog} exact />
				<Route path="/blog/:id" component={BlogDetailPost} />
			</Switch>
		</Router>
	);
}

export default App;
