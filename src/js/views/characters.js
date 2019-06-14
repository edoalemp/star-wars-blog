import React from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export class Characters extends React.Component {
	render() {
		let array = [];
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						array = store.obj.results;
						actions.fetchget("https://swapi.co/api/people/");
						return (
							<div className="text-center mt-5">
								<p>personajes</p>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
