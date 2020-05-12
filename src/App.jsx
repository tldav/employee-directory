import React, { Component, Fragment } from "react";
import Navbar from "./components/Navbar";

class App extends Component {
	state = {
		users: []
	};
	render() {
		return (
			<div style={{ backgroundColor: "black" }}>
				<Navbar />
			</div>
		);
	}
}

export default App;
