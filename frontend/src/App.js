import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import "./css/App.scss";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/about" component={About} exact />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
