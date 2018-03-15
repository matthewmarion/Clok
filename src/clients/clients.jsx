import React from 'react';
import ClientForm from './add-client';
import ClientList from './client-list';
import SelectClient from './select-client';
import {addClient} from '../actions/clients';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Clients extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newClient: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ newClient: event.target.value });
	}

	handleSubmit(event) {
		this.props.addClient(this.state.newClient);
		this.setState({
			newClient: ''
		});
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
				<ClientList clients={this.props.clients.clientList}/>
				<SelectClient clients={this.props.clients.clientList} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		clients: state.clients
	};
};

const matchDispatchToProps = (dispatch) => {
	return bindActionCreators({
		addClient: addClient
	}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Clients);