import React from 'react';
import HeroImage from '../../components/HeroImage/HeroImage';
import bgImage from '../../assets/cheese2.jpg';
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';

const Delivery = () => {
	return (
		<div>
			<HeroImage
				bgimage={bgImage}
				heading={['Jouez ', <span>/a domicile</span>]}
				text="Livraisons le soir et le week-end."
			/>
			<DeliveryInfo />
		</div>
	);
};

export default Delivery;
