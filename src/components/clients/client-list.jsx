import React from 'react';

const ClientList = (props) => {
	return (
		<div>
			<ul>
				{props.clients.map((client, i) =>
        	    <li key={i}>
						{client}
					</li>
				)}
			</ul>
		</div>
	);
};

export default ClientList;