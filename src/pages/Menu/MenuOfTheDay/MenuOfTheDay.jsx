import React from 'react';
import ListItem from '../../../components/ListItem/ListItem';
import './MenuOfTheDay.css';

import image1 from '../../../assets/pasta.jpeg';
import image2 from '../../../assets/pizza.jpeg';

const menuData = [
	{
		title: 'pasta',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
		price: '15€',
		itemImage: image1,
	},
	{
		title: 'Pizza',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
		price: '15€',
		itemImage: image2,
	},
];

const MenuOfTheDay = () => {
	return (
		<div className="section">
			<div className="container menu-of-the-day">
				<h1 className="heading--secondary">
					<span>Menu </span>du jour
				</h1>
				{menuData.map((data, i) => (
					<ListItem
						key={i}
						title={data.title}
						description={data.description}
						price={data.price}
						itemImage={data.itemImage}
					/>
				))}
			</div>
		</div>
	);
};

export default MenuOfTheDay;
