import React from 'react';

const RemoveButton = (props) => {
	return (
		<button onClick={props.onClick}>Delete Client</button>
	);
};

export default RemoveButton;