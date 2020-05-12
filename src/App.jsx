import React, { Component, Fragment } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import EmployeeCard from "./components/EmployeeCard";

class App extends Component {
	state = {
		employees: []
	};

	componentDidMount() {
		axios
			.get("https://randomuser.me/api/?results=50&nat=us")
			.then((response) => {
				console.log(response.data.results);
			});
	}

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
