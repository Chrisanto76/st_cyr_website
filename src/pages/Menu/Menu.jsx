import React from 'react';
import HeroImage from '../../components/HeroImage/HeroImage';
import bgImage from '../../assets/coffee.jpg';
import MenuOfTheDay from './MenuOfTheDay/MenuOfTheDay';
import Breakfast from './Breakfast/Breakfast';
import LunchTime from './LunchTime/LunchTime';
import CoffeeSelection from './CoffeeSelection/CoffeeSelection';
import Beverages from './Beverages/Beverages';

const Menu = () => {
	return (
		<div>
			<HeroImage
				bgimage={bgImage}
				heading={['Notre ', <span>Menu</span>]}
				text="Plats faits maison, cuisine de saison."
			/>
			<MenuOfTheDay />
			<Breakfast />
			<LunchTime />
			<CoffeeSelection />
			<Beverages />
		</div>
	);
};

export default Menu;
