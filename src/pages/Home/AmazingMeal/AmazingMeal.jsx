import React, { useState } from 'react';
import './AmazingMeal.css';

import image1 from '../../../assets/hamburger.jpeg';
import image2 from '../../../assets/cheese.jpeg';
import image3 from '../../../assets/coffee.jpg';
import image4 from '../../../assets/pizza.jpeg';
import image5 from '../../../assets/wine.jpeg';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { PiCheckFatBold } from 'react-icons/pi';
const AmazingMeal = () => {
	const [items, setItems] = useState([
		{ id: 1, url: image1 },
		{ id: 2, url: image2 },
		{ id: 3, url: image3 },
		{ id: 4, url: image4 },
		{ id: 5, url: image5 },
	]);
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
	};
	return (
		<div className="section">
			<div className="container">
				<div className="amazing--container">
					<div className="amazing--carousel">
						<div>
							<Slider {...settings}>
								{items.map((item) => (
									<div key={item.id}>
										<img src={item.url} alt="carousel pic" />
									</div>
								))}
							</Slider>
						</div>
					</div>
					<div className="amazing--content">
						<h2 className="heading--secondary">
							Prenez le temps <span className="ampersand">&#38;</span>
							<br />
							<span>Profitez...</span>
						</h2>

						<h4>On vous attends !</h4>

						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
							dolorum iure officiis quaerat praesentium soluta eaque repellendus
							dolor molestias neque!
							<br />
							<br />
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Repudiandae expedita neque eligendi repellendus impedit laborum.
						</p>

						<blockquote>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias.
						</blockquote>
					</div>
				</div>

				<div className="amazing-card-container">
					<div className="amazing-card amazing-card-left">
						<img src={image1} alt="burger" className="amazing-card-image" />

						<div className="amazing-card-content">
							<div className="amazing-card-title">
								<h3 className="heading--tertiary">
									<PiCheckFatBold size={20} style={{ color: '#c3512f' }} />
									Les meilleurs <span>produits</span>
								</h3>

								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Vitae sequi numquam maiores.
								</p>
							</div>
						</div>
					</div>
					<div className="amazing-card amazing-card-right">
						<img src={image2} alt="cheese" className="amazing-card-image" />

						<div className="amazing-card-content">
							<div className="amazing-card-title">
								<h3 className="heading--tertiary">
									<PiCheckFatBold size={20} style={{ color: '#c3512f' }} />
									Les meilleurs <span>produits</span>
								</h3>

								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Vitae sequi numquam maiores.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AmazingMeal;
