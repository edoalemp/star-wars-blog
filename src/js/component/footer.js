import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export class Footer extends React.Component {
	render() {
		return (
			<footer className="footer mt-auto py-3 text-center">
				<h1>FAVORITES</h1>
				<Context.Consumer>
					{({ store, actions }) => {
						let arrayhtml = [];
						let array = [];
						let x;
						array = store.favorites;
						if (array !== undefined) {
							for (let i = 0; i <= array.length - 1; i++) {
								arrayhtml.push(
									<li key={i}>
										<Link to="/single" onClick={() => actions.viewdetails(array[i])}>
											{array[i].name}
										</Link>
									</li>
								);
							}
						}
						x = <ul className="list-group">{arrayhtml}</ul>;
						return x;
					}}
				</Context.Consumer>
			</footer>
		);
	}
}
