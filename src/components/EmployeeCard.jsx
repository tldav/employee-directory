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
					<div className="col-2">Name</div>
					<div className="col-2">email</div>
				</div>
			</div>
		);
	}
}
export default EmployeeCard;
