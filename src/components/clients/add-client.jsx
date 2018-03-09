import React from 'react';
import Client from '../../containers/sidebar/clients';

const Form = (props) => {
	return (
		<form onSubmit={props.onSubmit}>
			<label>Client Name:
			<input value={props.newClient} onChange={props.onChange} type="text"/>
			</label>
			<input type="submit" value="Submit" />
		</form>
	);
};

export default Form;