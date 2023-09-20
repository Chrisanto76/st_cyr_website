import React from 'react';
import HeroImage from '../../components/HeroImage/HeroImage';
import bgimage from '../../assets/coffee.jpg';
import MenuOfTheDay from './MenuOfTheDay/MenuOfTheDay';
import Breakfast from './Breakfast/Breakfast';
import LunchTime from './LunchTime/LunchTime';
import CoffeeSelection from './CoffeeSelection/CoffeeSelection';

const Menu = () => {
	return (
		<div>
			<HeroImage
				bgimage={bgimage}
				heading={['Notre ', <span>Menu</span>]}
				text="Plats faits maison, cuisine de saison."
			/>
			<MenuOfTheDay />
			<Breakfast />
			<LunchTime />
			<CoffeeSelection />
		</div>
	);
};

export default Menu;
