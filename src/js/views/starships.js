import React from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export class Starships extends React.Component {
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						actions.fetchget("https://swapi.co/api/starships/");
						return (
							<div className="text-center mt-5">
								<p>naves</p>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
