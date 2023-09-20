import React from 'react';
import './DeliveryInfo.css';
import { MdOutlineDeliveryDining } from 'react-icons/md';

const DeliveryInfo = () => {
	return (
		<div className="section">
			<div className="container">
				<div className="grid--container">
					<div>
						<div className="delivery--iconbox">
							<MdOutlineDeliveryDining color="#3512f" />
							<h3 className="heading--tertiary">
								Commandez avec <span>Deliveroo</span>
							</h3>
						</div>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
							voluptatibus velit assumenda tempora necessitatibus corrupti
							officiis nobis minima sequi culpa.
						</p>
					</div>
					<div>
						<div className="delivery--iconbox">
							<MdOutlineDeliveryDining color="#3512f" />
							<h3 className="heading--tertiary">
								Informations <span>additionnelles</span>
							</h3>
						</div>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
							voluptatibus velit assumenda tempora necessitatibus corrupti
							officiis nobis minima sequi culpa.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeliveryInfo;
