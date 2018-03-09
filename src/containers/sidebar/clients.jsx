import React from 'react';
import ClientForm from '../../components/clients/add-client';
import ClientList from '../../components/clients/client-list';

class Clients extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clients: [],
			newClient: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ newClient: event.target.value });
	}

	handleSubmit(event) {
		const newClient = this.state.newClient;
		alert('Added new client: ' + newClient);
		this.setState(prevState => ({
			clients: prevState.clients.concat(newClient),
			clientName: ''
		}));
		event.preventDefault();
	}

	render() {
		return (
			<div>
				<ClientForm 
					onSubmit={this.handleSubmit} 
					onChange={this.handleChange} 
					newClient={this.state.newClient}
				/>
				<ul>
                    
				</ul>
				<ClientList clients={this.state.clients}/>
			</div>
		);
	}
}

export default Clients;