import React from 'react';
import HeroImage from '../../components/HeroImage/HeroImage';
import bgimage from '../../assets/coffee.jpg';
import MenuOfTheDay from './MenuOfTheDay/MenuOfTheDay';

const Menu = () => {
	return (
		<div>
			<HeroImage
				bgimage={bgimage}
				heading={['Notre ', <span>Menu</span>]}
				text="Plats faits maison, cuisine de saison."
			/>
			<MenuOfTheDay />
		</div>
	);
};

export default Menu;
