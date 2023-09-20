import React from 'react';
import './DeliveryInfo.css';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const DeliveryInfo = () => {
	return (
		<div className="section">
			<div className="container">
				<div className="grid--container">
					<div>
						<div className="delivery--iconbox">
							<MdOutlineDeliveryDining color="#2b547a" size={30} />
							<h3 className="heading--tertiary">
								Commandez avec <span>/Deliveroo</span>
							</h3>
						</div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
							sunt nesciunt officiis cum optio quisquam nostrum? Officiis in
							exercitationem quia quis magni, non corrupti molestias alias
							quibusdam porro hic, quas quaerat fuga et labore excepturi
							voluptate accusantium ex ullam aut. Quasi fugit error molestias
							autem eaque consequatur totam, voluptate quisquam.
						</p>
					</div>
					<div>
						<div className="delivery--iconbox">
							<AiOutlineInfoCircle color="#2b547a" size={30} />
							<h3 className="heading--tertiary">
								Informations <span>/additionnelles</span>
							</h3>
						</div>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
							error sit alias blanditiis expedita voluptas cupiditate temporibus
							inventore modi architecto fugit sunt, iste laboriosam autem magni
							ullam excepturi corporis necessitatibus delectus eveniet quasi
							tenetur exercitationem.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeliveryInfo;
