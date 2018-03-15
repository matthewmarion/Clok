import React from 'react';
import Client from './clients';

const Form = (props) => {
	return (
		<form onSubmit={props.onSubmit}>
			<label>Client Name:
			<input value={props.newClient} onChange={props.onChange} type="text" required/>
			</label>
			<input type="submit" value="Submit" />
		</form>
	);
};

export default Form;