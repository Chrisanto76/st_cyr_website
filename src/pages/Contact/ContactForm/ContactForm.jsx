// import React from 'react';
// import './ContactForm.css';

// import bgImage from '../../../assets/tumbler.jpeg';

// const ContactForm = () => {
// 	return (
// 		<div className="section">
// 			<div className="container grid--container contact-content">
// 				<div>
// 					<h1 className="heading--secondary">
// 						get in <span>touch</span>
// 					</h1>

// 					<img src={bgImage} alt="get in touch" />

// 					<p>
// 						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
// 						commodo ligula eget dolor. Aenean massa. Cum sociis natoque{' '}
// 						<span className="special--word2">penatibus</span> et magnis dis
// 						parturient montes, nascetur ridiculus mus. Donec quam felis,
// 						ultricies nec, pellentesque eu, pretium quis, sem.
// 					</p>

// 					<p>
// 						Nulla consequat massa quis enim. Donec pede justo,{' '}
// 						<span className="special--word2">fringilla</span> vel, aliquet nec,
// 						vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
// 						venenatis vitae, justo.
// 					</p>
// 				</div>

// 				<div>
// 					<h1 className="heading--secondary">
// 						Mail <span>us</span>
// 					</h1>

// 					<form>
// 						<div className="form-field name-email">
// 							<div>
// 								<label>Name</label>
// 								<input type="text" name="name" />
// 							</div>

// 							<div>
// 								<label>Email</label>
// 								<input type="email" name="email" />
// 							</div>
// 						</div>

// 						<div className="form-field">
// 							<div>
// 								<label>Subject</label>
// 								<input type="text" name="subject" />
// 							</div>
// 						</div>

// 						<div className="form-field">
// 							<div>
// 								<label>Message</label>
// 								<textarea type="text" name="message" />
// 							</div>
// 						</div>
// 					</form>

// 					<button type="submit">Submit</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default ContactForm;

import React from 'react';
import './ContactForm.css';

import bgImage from '../../../assets/tumbler.jpeg';

const ContactForm = () => {
	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);

		// Remplacez 'YOUR_FORMSPREE_ENDPOINT' par votre URL de point de terminaison Formspree
		const endpoint = 'https://formspree.io/f/xleypwzj';

		try {
			const response = await fetch(endpoint, {
				method: 'POST',
				body: formData,
				headers: {
					Accept: 'application/json',
				},
			});

			if (response.ok) {
				alert('Message sent successfully!');
				// Réinitialiser le formulaire si l'envoi a réussi
				form.reset();
			} else {
				alert('An error occurred while sending the message.');
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};

	return (
		<div className="section">
			<div className="container grid--container contact-content">
				<div>
					<h1 className="heading--secondary">
						get in <span>touch</span>
					</h1>

					<img src={bgImage} alt="get in touch" />

					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
						commodo ligula eget dolor. Aenean massa. Cum sociis natoque{' '}
						<span className="special--word2">penatibus</span> et magnis dis
						parturient montes, nascetur ridiculus mus. Donec quam felis,
						ultricies nec, pellentesque eu, pretium quis, sem.
					</p>

					<p>
						Nulla consequat massa quis enim. Donec pede justo, //{' '}
						<span className="special--word2">fringilla</span> vel, aliquet nec,
						venenatis vitae, justo.
					</p>
				</div>
				<div>
					<h1 className="heading--secondary">
						Mail <span>us</span>
					</h1>
					<form onSubmit={handleSubmit}>
						<div className="form-field name-email">
							<div>
								<label>Name</label>
								<input type="text" name="name" />
							</div>
							<div>
								<label>Email</label>
								<input type="email" name="email" />
							</div>
						</div>
						<div className="form-field">
							<div>
								<label>Subject</label>
								<input type="text" name="subject" />
							</div>
						</div>
						<div className="form-field">
							<div>
								<label>Message</label>
								<textarea type="text" name="message" />
							</div>
						</div>
						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
