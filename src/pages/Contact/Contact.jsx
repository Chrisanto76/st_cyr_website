import React from 'react';
import './Contact.css';
import HeroImage from '../../components/HeroImage/HeroImage';
import bgImage from '../../assets/oldfashioned.jpeg';

const Contact = () => {
	return (
		<div>
			<HeroImage
				bgimage={bgImage}
				heading={['Contactez ', <span>Nous</span>]}
				text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
			/>
		</div>
	);
};

export default Contact;
