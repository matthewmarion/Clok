import React from 'react';
import Clients from '../clients/clients';
import ActiveAccount from '../account/active-account';
import '../../public/css/sidebar.css';

const Sidebar = () => {
	const accountInfo = { url: '../public/images/profile-placeholder.png', name: 'Matthew Marion' };
	return (
		<nav id="sidebar">
			<div className="sidebar-header">
				<img className="main-logo"src="../public/images/logo.png"/><h1 className="logo-text">clok</h1>
			</div>
			
			<ActiveAccount image={accountInfo.url} name={accountInfo.name} />
			<Clients />
		</nav>
	);
};

export default Sidebar;