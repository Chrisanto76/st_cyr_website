import React from 'react';
import bgImage from '../../assets/floor.jpeg';
import HeroImage from '../../components/HeroImage/HeroImage';
import AboutInfo from './AboutInfo/AboutInfo';
import OurData from './OurData/OurData';
import Gallery from './Gallery/Gallery';

const About = () => {
	return (
		<div>
			<HeroImage
				bgimage={bgImage}
				heading={[
					'A propos ',
					<span className="ampersand"> & </span>,
					<span>galerie de photos</span>,
				]}
				text="Plats faits maison, cuisine de saison."
			/>
			<AboutInfo />
			<OurData />
			<Gallery />
		</div>
	);
};

export default About;
