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
						let arrayhtml = [];
						let array = store.obj.results;
						if (array !== undefined) {
							for (let i = 0; i <= array.length - 1; i++) {
								arrayhtml.push(
									<div className="card">
										<div className="card-body">{array[i]["name"]}</div>
									</div>
								);
							}
						}
						return (
							<div>
								<h1>PLANETS</h1>
								<div className="row">{arrayhtml}</div>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
