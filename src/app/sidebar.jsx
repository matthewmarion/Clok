import React from 'react';
import Clients from '../clients/clients';
import '../../public/css/sidebar.css';

const Sidebar = () => {
	return (
		<nav id="sidebar">
			<div className="sidebar-header">
				<img className="main-logo"src="../public/images/logo.png"/><h1 className="logo-text">clok</h1>
			</div>
			<Clients />
		</nav>
	);
};

export default Sidebar;