import React from 'react';
import HeroImage from '../../components/HeroImage/HeroImage';
import bgImage from '../../assets/cheese2.jpg';
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import AddToCart from './AddToCart/AddToCart';

const Delivery = () => {
	return (
		<div>
			<HeroImage
				bgimage={bgImage}
				heading={['Jouez ', <span>a domicile</span>]}
				text="Livraisons le soir et le week-end."
			/>
			<DeliveryInfo />
			<AddToCart />
		</div>
	);
};

export default Delivery;
