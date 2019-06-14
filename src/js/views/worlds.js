import React from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export class Worlds extends React.Component {
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						actions.fetchget("https://swapi.co/api/planets/");
						return (
							<div className="text-center mt-5">
								<p>planets</p>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
