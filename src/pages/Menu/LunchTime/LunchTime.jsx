import React from 'react';
import ListItem from '../../../components/ListItem/ListItem';
import './LunchTime.css';

const menuDataLeft = [
	{
		title: 'Spiced Pigeon',
		description: 'Ale & artichokes',
		price: 38,
	},
	{
		title: 'Ribeye Steak',
		description: 'Mushroom ketchup & fries',
		price: 42,
	},
	{
		title: 'Duck Breast',
		description: 'Smoked confit fennel & umbles',
		price: 35,
	},
	{
		title: 'Roast Turbot',
		description: 'Mussel & seaweed ketchup, salmon roe & sea rosemary',
		price: 22,
	},
];

const menuDataRight = [
	{
		title: 'Linefish',
		description: 'Pan fried line fish, herbed nicola potato',
		price: 27,
	},
	{
		title: 'Autumn Lamb',
		description: 'Pan seared lamb loin, slow roasted lamb shanks',
		price: 33,
	},
	{
		title: 'Duck',
		description: 'Confit duck leg, mushroom and onions',
		price: 75,
	},
	{
		title: 'Homedried Tomato',
		description: 'with sesame, aubergine puree and burnt aubergine jelly',
		price: 22,
	},
];

const LunchTime = () => {
	return (
		<div className="section">
			<div className="container lunch--time">
				<h1 className="heading--secondary">
					Lunch<span>Time</span>
				</h1>

				<div className="grid--container">
					<div>
						{menuDataLeft.map((item, i) => (
							<ListItem
								key={i}
								title={item.title}
								description={item.description}
								price={item.price}
							/>
						))}
					</div>
					<div>
						{menuDataRight.map((item, i) => (
							<ListItem
								key={i}
								title={item.title}
								description={item.description}
								price={item.price}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default LunchTime;
