import React from 'react';
import './Hero.css';

const Hero = () => {
	return (
		<div className="hero--img container">
			<div className="hero--content">
				<h1 className="heading--primary">
					<span>Bienvenue</span> au Saint Cyr
				</h1>

				<p className="text--white">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				</p>

				<p className="text--white">
					Réservez au
					<span className="special--word"> 01 45 79 80 42</span>
				</p>
			</div>
		</div>
	);
};

export default Hero;
