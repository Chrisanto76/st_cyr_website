import React from 'react';
import HeroImage from '../../components/HeroImage/HeroImage';
import bgImage from '../../assets/floor.jpeg';

const About = () => {
	return (
		<div>
			<HeroImage
				bgimage={bgImage}
				heading={[
					'A propos de nous',
					<span className="ampersand"> & </span>,
					<span>galerie de photos</span>,
				]}
				text="Look closer, and you can see where our passion for flavour begins."
			/>
		</div>
	);
};

export default About;
