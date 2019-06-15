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

				<ul className="navbar-nav">
					<li className="nav-item">
						<Link to="/characters" className="nav-link">
							Characters
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/starships" className="nav-link">
							Starship
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/worlds" className="nav-link">
							Worlds
						</Link>
					</li>
				</ul>
			</nav>
		);
	}
}
