import React from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Delivery from './pages/Delivery/Delivery';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import './index.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
	useEffect(() => {
		const lockPortrait = () => {
			if (screen.orientation && screen.orientation.lock) {
				screen.orientation.lock('portrait');
			}
		};

		lockPortrait(); // Appel initial pour verrouiller en mode portrait

		// Écouteur d'événement pour verrouiller l'orientation lorsqu'elle change
		window.addEventListener('orientationchange', lockPortrait);

		return () => {
			// Retirer l'écouteur d'événement lors du démontage du composant
			window.removeEventListener('orientationchange', lockPortrait);
		};
	}, []);
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/delivery" element={<Delivery />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
