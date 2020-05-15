import React, { Component } from "react";
import "./EmployeeCard.css";

class EmployeeCard extends Component {
	state = {};

	canary = () => {
		console.log(this.props);
	};

	// people = () => {
	// 	const dudes = this.props.employees.map(({name.first, name.last}) => {
	// 		dude = {};
	// 	});
	// };

	// getEmployees = () => {};

	// props.email
	// props.name.first & props.name.last
	// props.picture.medium

	render() {
		const employees = this.props.employees.map(
			({ email, name, picture, id }) => {
				return (
					<div className="container employee-card">
						<div className="row justify-content-around">
							<div className="col-3 ">
								<img
									src={picture.medium}
									alt={name.first}
									key={id}
								/>
							</div>
							<div className="col-3 align-self-center d-flex justify-content-center">
								<h3>
									{name.first} {name.last}
								</h3>
							</div>
							<div className="col-3 align-self-center d-flex justify-content-end">
								<h3>{email}</h3>
							</div>
						</div>
					</div>
				);
			}
		);

		return <div>{employees}</div>;
	}
}
export default EmployeeCard;
