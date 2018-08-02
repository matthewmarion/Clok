import React from 'react';

const Dropdown = (props) => {
	return (
		<div className="form-group">
			<a onClick={props.newClient}>+ New client</a>
		</div>
	);
};

export default Dropdown;