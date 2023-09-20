import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};
	return (
		<div className="header">
			<div className="container">
				<div className="nav--bar">
					<Link to="/" className="logo">
						{/* <img
							src="./src/assets/logo.png"
							alt="logo"
							height={50}
							width={50}
						/> */}
						<h1 className="heading--logo">le st cyr</h1>
					</Link>
					<ul className={click ? 'nav--menu active' : 'nav--menu'}>
						<li onClick={handleClick}>
							<NavLink className="nav--link" to="/">
								Accueil
							</NavLink>
						</li>
						<li onClick={handleClick}>
							<NavLink className="nav--link" to="/menu">
								Menu
							</NavLink>
						</li>
						<li onClick={handleClick}>
							<NavLink className="nav--link" to="/delivery">
								Livraisons
							</NavLink>
						</li>
						<li onClick={handleClick}>
							<NavLink className="nav--link" to="/about">
								Infos
							</NavLink>
						</li>
						<li onClick={handleClick}>
							<NavLink className="nav--link" to="/contact">
								Contact
							</NavLink>
						</li>
						<li onClick={handleClick}>
							<button>Commandez</button>
						</li>
					</ul>

					<div className="hamburger" onClick={handleClick}>
						{click ? (
							<FaTimes size={20} style={{ color: '#fff' }} />
						) : (
							<FaBars size={20} style={{ color: '#fff' }} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
