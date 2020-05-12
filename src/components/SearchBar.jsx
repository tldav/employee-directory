import React, { Component } from "react";

class SearchBar extends Component {
	state = {
		term: ""
	};

	render() {
		return (
			<div className="ui segment" style={{}}>
				<form className="ui form">
					<div className="field ">
						<label>Search Employee by Name</label>
						<input
							type="text"
							value={this.state.term}
							onChange={(e) =>
								this.setState({ term: e.target.value })
							}
						/>
						<div className="ui button">Search</div>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
