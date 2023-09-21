import React from 'react';
import './Gallery.css';

import image1 from '../../../assets/pizza.jpeg';
import image2 from '../../../assets/burger.jpeg';
import image3 from '../../../assets/tumbler.jpeg';
import image4 from '../../../assets/cheese.jpeg';
import image5 from '../../../assets/oldfashioned.jpeg';
import image6 from '../../../assets/spritz.jpeg';
import image7 from '../../../assets/wine.jpeg';
import image8 from '../../../assets/floor.jpeg';
import image9 from '../../../assets/oldfashioned.jpeg';
import image10 from '../../../assets/coffee.jpg';

const Gallery = () => {
	return (
		<div className="gallery">
			<figure className="gallery__item gallery__item-1">
				<img src={image1} alt="Gallery image 1" className="gallery__img" />
			</figure>
			<figure className="gallery__item gallery__item-2">
				<img src={image2} alt="Gallery image 2" className="gallery__img" />
			</figure>
			<figure className="gallery__item gallery__item-3">
				<img src={image3} alt="Gallery image 3" className="gallery__img" />
			</figure>
			<figure className="gallery__item gallery__item-4">
				<img src={image4} alt="Gallery image 4" className="gallery__img" />
			</figure>
			<figure className="gallery__item gallery__item-5">
				<img src={image5} alt="Gallery image 5" className="gallery__img" />
			</figure>
			<figure className="gallery__item gallery__item-6">
				<img src={image6} alt="Gallery image 6" className="gallery__img" />
			</figure>
			<figure className="gallery__item gallery__item-7">
				<img src={image7} alt="Gallery image 7" className="gallery__img" />
			</figure>
			<figure className="gallery__item gallery__item-8">
				<img src={image8} alt="Gallery image 8" className="gallery__img" />
			</figure>
			<figure className="gallery__item gallery__item-9">
				<img src={image9} alt="Gallery image 9" className="gallery__img" />
			</figure>
			<figure className="gallery__item gallery__item-10">
				<img src={image10} alt="Gallery image 10" className="gallery__img" />
			</figure>
		</div>
	);
};

export default Gallery;
