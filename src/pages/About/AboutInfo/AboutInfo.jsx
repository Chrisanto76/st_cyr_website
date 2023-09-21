import React from 'react';
import './AboutInfo.css';

const AboutInfo = () => {
	return (
		<div className="section">
			<div className="container grid--container">
				<div>
					<div className="about-info-content">
						<h2 className="heading--secondary">
							Quelques mots <span>sur nous</span>
						</h2>

						<h4>Le Saint Cyr est une brasserie traditionnelle.</h4>

						<p>
							Contrary to popular belief, Lorem Ipsum is not simply random text.
							It has roots in a piece of{' '}
							<span className="special--word2">classical</span> Latin literature
							from 45 BC, making it over 2000 years old. Richard McClintock, a
							Latin professor at Hampden-Sydney College in Virginia, looked up
							one of the more obscure Latin words,{' '}
							<span className="special--word2">consectetur,</span> from a Lorem
							Ipsum passage
						</p>

						<blockquote>
							Nulla consequat massa quis enim. Doncus ut, imperdiet a.
						</blockquote>

						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
							commodo ligula eget dolor.{' '}
							<span className="special--word2">Aenean massa.</span> Cum sociis
							natoque penatibus et magnis dis parturient montes, nascetur
							ridiculus mus. Donec quam felis.
						</p>
					</div>
				</div>
				<div>
					<div className="about-info-content">
						<h2 className="heading--secondary">
							un verre <span>/des amis</span>
						</h2>

						<h4>nous vous attendons !</h4>

						<p>
							Contrary to popular belief, Lorem Ipsum is not simply random text.
							It has roots in a piece of{' '}
							<span className="special--word2">classical</span> Latin literature
							from 45 BC, making it over 2000 years old. Richard McClintock, a
							Latin professor at Hampden-Sydney College in Virginia, looked up
							one of the more obscure Latin words,{' '}
							<span className="special--word2">consectetur,</span> from a Lorem
							Ipsum passage
						</p>

						<blockquote>
							Nulla consequat massa quis enim. Doncus ut, imperdiet a.
						</blockquote>

						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
							commodo ligula eget dolor.{' '}
							<span className="special--word2">Aenean massa.</span> Cum sociis
							natoque penatibus et magnis dis parturient montes, nascetur
							ridiculus mus. Donec quam felis.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutInfo;
