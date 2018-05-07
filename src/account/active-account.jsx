import React from 'react';

const ActiveAccount = (props) => {
	return (
		<div className="active-account">
            <p>{props.account.name}</p>
        </div>
	);
};

export default Dropdown;