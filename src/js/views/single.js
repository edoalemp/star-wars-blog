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
						let arrayhtml = [];
						let link = "";
						for (let attrib in store.details) {
							if (typeof store.details[attrib] === "string") {
								arrayhtml.push(
									<tr key={attrib}>
										<td>{attrib}</td>
										<td>{store.details[attrib]}</td>
									</tr>
								);
							}
							if (typeof store.details[attrib] === "object" && Array.isArray(store.details[attrib])) {
								let array = [];
								for (let i = 0; i <= store.details[attrib].length - 1; i++) {
									if (typeof store.details[attrib][i] === "string")
										array.push(<li key={i}>{store.details[attrib][i]}</li>);
								}
								arrayhtml.push(
									<tr key={attrib}>
										<td>{attrib}</td>
										<td>
											<ul>{array}</ul>
										</td>
									</tr>
								);
							}
						}

						if (
							(store.obj.next !== null && store.obj.next.search("people") !== -1) ||
							(store.obj.previous !== null && store.obj.previous.search("people") !== -1)
						) {
							link = "/characters";
						}
						if (
							(store.obj.next !== null && store.obj.next.search("starships") !== -1) ||
							(store.obj.previous !== null && store.obj.previous.search("starships") !== -1)
						) {
							link = "/starships";
						}
						if (
							(store.obj.next !== null && store.obj.next.search("planets") !== -1) ||
							(store.obj.previous !== null && store.obj.previous.search("planets") !== -1)
						) {
							link = "/worlds";
						}

						return (
							<div>
								<table className="table table-striped">
									<thead>{arrayhtml}</thead>
								</table>
								<Link to={link}>
									<span className="btn btn-primary btn-lg" href="#" role="button">
										Back
									</span>
								</Link>

								<span
									className="btn btn-primary btn-lg"
									href="#"
									role="button"
									onClick={() => actions.setfavorites(store.details)}>
									Add to Favorites
								</span>
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
