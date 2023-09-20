import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="section footer">
			<div className="container">
				<div className="grid--container">
					<div className="footer-grid-item">
						<h3>CAFE JEANNETTE</h3>
						<p>6 Pl. Bienvenüe</p>
						<p>75015 Paris</p>
						<p>01 42 93 26 39</p>
						<Link to="#" className="text--white">
							example@mail.com
						</Link>
					</div>
					<div className="footer-grid-item">
						<h3>CAFE MONTPARNASSE</h3>
						<p> 8 Pl. du 18 Juin 1940</p>
						<p>75006 Paris</p>
						<p>01 45 48 99 34</p>
						<Link to="https://www.cafemontparnasse.fr/" className="text--white">
							cafemontparnasse.fr
						</Link>
					</div>
					<div className="footer-grid-item">
						<h3>LE ST CYR</h3>
						<p>147 Av. de Villiers</p>
						<p>75017 Paris</p>
						<p>01 45 79 80 42</p>
						<Link to="#" className="text--white">
							example@mail.com
						</Link>
					</div>
					<div className="footer-grid-item">
						<h3>LE ST CYR</h3>
						<p>147 Av. de Villiers</p>
						<p>75017 Paris</p>
						<p>01 45 79 80 42</p>
						<Link to="#" className="text--white">
							example@mail.com
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
