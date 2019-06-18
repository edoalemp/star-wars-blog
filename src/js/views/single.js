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
						let backstring = [];
						let url = "https://swapi.co/api";
						let link = "";
						for (let attrib in store.obj) {
							if (typeof store.obj[attrib] === "string") {
								arrayhtml.push(
									<tr key={attrib}>
										<td>{attrib}</td>
										<td>{store.obj[attrib]}</td>
									</tr>
								);
							}
							if (typeof store.obj[attrib] === "object" && Array.isArray(store.obj[attrib])) {
								let array = [];
								console.log(store.obj[attrib].length);
								for (let i = 0; i <= store.obj[attrib].length - 1; i++) {
									if (typeof store.obj[attrib][i] === "string")
										array.push(<li key={i}>{store.obj[attrib][i]}</li>);
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
							if (attrib === "url") {
								let str = store.obj[attrib];

								if (str.search("people") !== -1) {
									link = "/characters";
									url = url + "/people/";
								}
								if (str.search("starships") !== -1) {
									link = "/starships";
									url = url + "/starships/";
								}
								if (str.search("planets") !== -1) {
									link = "/worlds";
									url = url + "/planets/";
								}
								console.log(url);
							}
						}

						return (
							<div>
								<table className="table table-striped">
									<thead>{arrayhtml}</thead>
								</table>
								<Link to={link} onClick={() => actions.fetchget(url)}>
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
