import React from 'react';
import Tracking from '../tracking/start-tracking';
import Header from '../header/header';
import '../../public/css/main-content.css';

const MainContent = () => {
	return (
		<div className="main-wrapper">
			<Header />
			<Tracking />
		</div>
	);
};

export default MainContent;