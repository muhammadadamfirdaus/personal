import "./css/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Articles from "./views/Articles";
import ArticleDetail from "./views/ArticleDetail";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/about" component={About} exact />
				<Route path="/article/" component={Articles} exact />
				<Route path="/article/:id" component={ArticleDetail} />
			</Switch>
		</Router>
	);
}

export default App;
