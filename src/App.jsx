import React, { Component, Fragment } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import EmployeeCard from "./components/EmployeeCard";

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
					<EmployeeCard />
				</div>
			</Fragment>
		);
	}
}

export default App;
