import React from 'react';
import './Breakfast.css';
import ListItem from '../../../components/ListItem/ListItem';

const menuDataLeft = [
	{
		title: 'Eggs Benedict',
		description: 'with either bacon or salmon',
		price: '21',
	},
	{
		title: 'Enfold’s famous Crepes',
		description: 'with fresh fruit, bacon and maple syrup',
		price: '16',
	},
	{
		title: 'French Toasted Brioche',
		description:
			'with grilled banana, bacon, rosewater mascarpone and maple syrup',
		price: '17',
	},
];

const menuDataRight = [
	{
		title: 'Low Carb Breakfast',
		description: 'grilled chicken breast with veggies',
		price: 13,
	},
	{
		title: 'Bagel',
		description: 'with salmon, cream cheese and salsa',
		price: 8.5,
	},
	{
		title: 'American Pancakes',
		description: 'with chocolate  sauce or maple syrup, honey and cream',
		price: 21,
	},
];
const Breakfast = () => {
	return (
		<div className="container breakfast">
			<h1 className="heading--secondary">
				Petit <span>Déjeuner</span>
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
	);
};

export default Breakfast;
