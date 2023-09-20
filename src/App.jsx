import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Delivery from './pages/Delivery/Delivery';
import About from './pages/About/About';
import './index.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import DeliveryInfo from './pages/Delivery/DeliveryInfo/DeliveryInfo';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/delivery" element={<Delivery />} />
				<Route path="/about" element={<About />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
