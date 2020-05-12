import React, { Component } from "react";
import "./EmployeeCard.css";

class EmployeeCard extends Component {
	state = {};
	render() {
		return (
			<div className="container employee-card">
				<div className="row justify-content-around">
					<div className="col-3 ">
						<img
							src="https://www.imagemagick.org/Usage/canvas/gradient_bilinear.jpg"
							alt="mage"
						/>
					</div>
					<div className="col-3 align-self-center d-flex justify-content-center">
						<h3>Name</h3>
					</div>
					<div className="col-3 align-self-center d-flex justify-content-end">
						<h3>Email</h3>
					</div>
				</div>
			</div>
		);
	}
}
export default EmployeeCard;
