import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">STAR WARS</span>
				</Link>
				<Context.Consumer>
					{({ actions }) => (
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link
									to="/characters"
									className="nav-link"
									onClick={() => actions.fetchget("https://swapi.co/api/people/")}>
									Characters
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/starships"
									className="nav-link"
									onClick={() => actions.fetchget("https://swapi.co/api/starships/")}>
									Starship
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/worlds"
									className="nav-link"
									onClick={() => actions.fetchget("https://swapi.co/api/planets/")}>
									Worlds
								</Link>
							</li>
						</ul>
					)}
				</Context.Consumer>
			</nav>
		);
	}
}
