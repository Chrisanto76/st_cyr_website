import React from 'react';
import './OurChef.css';

const OurChef = () => {
	return (
		<div>
			<div className="chef--img">
				<div className="container">
					<div className="chef--content">
						<h1 className="heading--primary">
							Notre <span>equipe</span>
						</h1>

						<p className="text--white">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Voluptates, officia.
						</p>
					</div>
				</div>
			</div>

			{/* chef info */}

			<div className="container">
				<div className="grid--container py-md">
					<div className="grid--item team--info">
						<h3 className="heading--tertiary">
							Jerome <span>Dupont</span>
						</h3>

						<h4>Directeur</h4>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
							eius veniam ratione repudiandae quaerat excepturi ipsum ullam
							dolor necessitatibus blanditiis?
						</p>
					</div>

					<div className="grid--item team--info">
						<h3 className="heading--tertiary">
							Antony <span>Poure</span>
						</h3>

						<h4>Directeur</h4>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
							eius veniam ratione repudiandae quaerat excepturi ipsum ullam
							dolor necessitatibus blanditiis?
						</p>
					</div>
					<div className="grid--item team--info">
						<h3 className="heading--tertiary">
							Franck <span>Stahtam</span>
						</h3>

						<h4>Chef</h4>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
							eius veniam ratione repudiandae quaerat excepturi ipsum ullam
							dolor necessitatibus blanditiis?
						</p>
					</div>
					<div className="grid--item team--info">
						<h3 className="heading--tertiary">
							John <span>Smith</span>
						</h3>

						<h4>Chef executif</h4>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
							eius veniam ratione repudiandae quaerat excepturi ipsum ullam
							dolor necessitatibus blanditiis?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurChef;
