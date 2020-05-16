import React, { Component, Fragment } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import EmployeeCard from "./components/EmployeeCard";

class App extends Component {
	state = {
		employees: []
	};

	// Makes a request to a dummy data api upon the first page render.
	componentDidMount() {
		axios
			.get("https://randomuser.me/api/?results=50&nat=us")
			.then((response) => {
				this.setState({ employees: response.data.results });
				console.log(response.data.results);
			});
	}

	onSearchSubmit = (term) => {
		const searchedEmployee = this.state.employees.filter(({ name }) => {
			return name.first === term || name.last === term;
		});

		this.setState({ employees: searchedEmployee });
	};

	render() {
		return (
			<Fragment>
				<Navbar />
				<div className="ui container" style={{ marginTop: "20px" }}>
					<SearchBar onSearchSubmit={this.onSearchSubmit} />
					<EmployeeCard employees={this.state.employees} />
				</div>
			</Fragment>
		);
	}
}

export default App;
