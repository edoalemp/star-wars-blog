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
						console.log(store.obj);
						let attribarray = Object.getOwnPropertyNames(store.obj);
						console.log(attribarray);
						let arrayhtml = [];
						for (let i = 0; i <= attribarray.length - 1; i++) {
							arrayhtml.push(
								<tr key={i}>
									<td>{attribarray[i]}</td>
									<td>{store.obj[attribarray[i]]}</td>
								</tr>
							);
						}

						return (
							<div>
								<table className="table table-striped">
									<thead>{arrayhtml}</thead>
								</table>
								<h1 className="display-1">This will show the demo element: {store.obj["gender"]}</h1>
								<hr className="my-4" />
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
