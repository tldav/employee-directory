import React, { Component, Fragment } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

class App extends Component {
	state = {
		employees: []
	};
	render() {
		return (
			<Fragment>
				<Navbar />
				<div className="ui container" style={{ marginTop: "20px" }}>
					<SearchBar />
				</div>
			</Fragment>
		);
	}
}

export default App;
