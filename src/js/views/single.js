import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class Single extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<Context.Consumer>
					{({ store, actions }) => {
						console.log("okk");
						console.log(store.obj);
						let arrayhtml = [];

						for (let attrib in store.obj) {
							if (typeof store.obj[attrib] === "string") {
								arrayhtml.push(
									<tr key={attrib}>
										<td>{attrib}</td>
										<td>{store.obj[attrib]}</td>
									</tr>
								);
							}
						}

						return (
							<div>
								<table className="table table-striped">
									<thead>{arrayhtml}</thead>
								</table>
								<Link to="/characters" onClick={() => actions.fetchget("https://swapi.co/api/people/")}>
									<span className="btn btn-primary btn-lg" href="#" role="button">
										Back home
									</span>
								</Link>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

Single.propTypes = {
	match: PropTypes.object
};
