import React from "react";
import rigoImage from "../../img/maxresdefault-1024x576.jpg";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<div className="text-center mt-5">
					<p>
						<img src={rigoImage} />
					</p>
				</div>
			</div>
		);
	}
}
