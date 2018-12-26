import React from 'react';

const ClientList = (props) => {
	return (
		<div>
			<ul className="client-list">
				{props.clients.map((client, i) =>
        	    <li className="client" key={i}>
						<img className="client-icon" src="../public/images/client-icon.png"/> <a>{client}</a>
				</li>
				)}
			</ul>
		</div>
	);
};

export default ClientList;
