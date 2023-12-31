import React from 'react';
import './Beverages.css';

import ListItem from '../../../components/ListItem/ListItem';

const menuDataLeft = [
	{
		title: '7up',
		price: 3.9,
	},
	{
		title: 'root beer',
		price: 3.9,
	},
	{
		title: 'apple juice',
		price: 3.9,
	},
	{
		title: 'orange juice',
		price: 3.9,
	},
];

const menuDataMiddle = [
	{
		title: 'coke',
		price: 3.9,
	},
	{
		title: 'pepsi',
		price: 2.9,
	},
	{
		title: 'red bull',
		price: 4.9,
	},
	{
		title: 'bitter lemon',
		price: 2.95,
	},
];

const menuDataRight = [
	{
		title: 'crush',
		price: 2.7,
	},
	{
		title: 'crystal light',
		price: 5.9,
	},
	{
		title: 'banana shake',
		price: 5.9,
	},
	{
		title: 'pineapple shake',
		price: 7.95,
	},
];

const Beverages = () => {
	return (
		<div className="section">
			<div className="container beverages">
				<h1 className="heading--secondary">
					Softs <span>/Drinks</span>
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
						{menuDataMiddle.map((item, i) => (
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

export default Beverages;
