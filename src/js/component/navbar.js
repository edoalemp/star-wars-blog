import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">STAR WARS</span>
				</Link>

				<ul className="navbar-nav">
					<li className="nav-item">
						<Link to="/characters">
							<a className="nav-link" href="#">
								Characters
							</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/machines">
							<a className="nav-link" href="#">
								Machines
							</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/worlds">
							<a className="nav-link" href="#">
								Worlds
							</a>
						</Link>
					</li>
				</ul>
			</nav>

			/*
			<nav className="navbar navbar-light bg-light mb-3">

				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>

			</nav> */
		);
	}
}
