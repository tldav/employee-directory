import React, { Component } from "react";
import "./EmployeeCard.css";

class EmployeeCard extends Component {
	render() {
		// maps through props, which is the array of employees, and adds the relevant information for each employee to a very quickly styled horizontal card.
		const employees = this.props.employees.map(
			({ email, name, picture, id }) => {
				return (
					<div className="container employee-card">
						<div className="row justify-content-around">
							<div className="col-2 ">
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

		return <>{employees}</>;
	}
}
export default EmployeeCard;
