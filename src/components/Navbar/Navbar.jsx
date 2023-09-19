import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
	return (
		<div className="header">
			<div className="container">
				<div className="nav--bar">
					<Link to="/" className="logo">
						<h1>Le st Cyr</h1>
					</Link>
					<ul className="nav--menu">
						<li>
							<NavLink className="nav--link" to="/">
								Accueil
							</NavLink>
						</li>
						<li>
							<NavLink className="nav--link" to="/menu">
								Menu
							</NavLink>
						</li>
						<li>
							<NavLink className="nav--link" to="/delivery">
								Livraisons
							</NavLink>
						</li>
						<li>
							<NavLink className="nav--link" to="/about">
								A propos
							</NavLink>
						</li>
						<li>
							<NavLink className="nav--link" to="/contact">
								Contact
							</NavLink>
						</li>
						<li>
							<button>Commandez</button>
						</li>
					</ul>

					<div className="hamburger">
						<FaTimes size={20} style={{ color: '#fff' }} />
						<FaBars size={20} style={{ color: '#fff' }} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
