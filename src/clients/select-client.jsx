import React from 'react';

const Dropdown = (props) => {
	return (
		<div className="form-group">
			<label htmlFor="select-client">Active client:</label>
			<select onChange={props.onChange} className="form-control" id="select-client">
				{props.clients.map((client, i) =>
        	    <option key={i}>{client}</option>
				)}
			</select>
		</div>
	);
};

export default Dropdown;