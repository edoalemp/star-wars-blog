import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export class Characters extends React.Component {
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						console.log(store);
						let arrayhtml = [];
						let array = [];
						let x;

						array = store.obj.results;
						if (array !== undefined) {
							for (let i = 0; i <= array.length - 1; i++) {
								arrayhtml.push(
									<div className="card" style={{ width: 400 }} key={i}>
										<img className="card-img-top" src="img_avatar1.png" alt="Card image" />
										<div className="card-body">
											<h4 className="card-title">{array[i]["name"]}</h4>
											<p className="card-text">Some example text.</p>
											<Link
												to="/single"
												className="btn btn-primary"
												onClick={() => actions.fetchget(store.obj.results[i]["url"])}>
												See Profile
											</Link>
										</div>
									</div>
								);
							}
						}

						x = (
							<div>
								<h1>CHARACTERS</h1>
								<div className="row">{arrayhtml}</div>
								<button
									type="button"
									className="btn btn-primary"
									onClick={() => actions.fetchget(store.obj["previous"])}>
									Previous
								</button>
								<button
									type="button"
									className="btn btn-primary"
									onClick={() => actions.fetchget(store.obj["next"])}>
									Next
								</button>
							</div>
						);

						return x;
					}}
				</Context.Consumer>
			</div>
		);
	}
}
