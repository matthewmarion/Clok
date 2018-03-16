import React from 'react';
import Stopwatch from '../tracking/stopwatch';
import Header from '../header/header';
import '../../public/css/main-content.css';

const MainContent = () => {
	return (
		<div className="main-wrapper">
			<Header />
			<Stopwatch />
		</div>
	);
};

export default MainContent;