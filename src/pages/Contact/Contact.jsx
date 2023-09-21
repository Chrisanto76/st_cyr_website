import React from 'react';
import HeroImage from '../../components/HeroImage/HeroImage';
import bgImage from '../../assets/oldfashioned.jpeg';
import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
	return (
		<div>
			<HeroImage
				bgimage={bgImage}
				heading={['Contactez ', <span>Nous</span>]}
				text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
			/>
			<ContactForm />
		</div>
	);
};

export default Contact;
