import React from 'react';
import ClientForm from './add-client';
import ClientList from './client-list';
import {addClient, selectClient, removeClient} from '../actions/clients';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const remote = require('electron').remote;
const url = require('url');

class Clients extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newClient: ''
		};
		this.handleNewClientChange = this.handleNewClientChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSelectClientChange = this.handleSelectClientChange.bind(this);
		this.handleRemoveClient = this.handleRemoveClient.bind(this);
	}

	handleNewClientChange(event) {
		this.setState({ newClient: event.target.value });
	}

	handleSubmit(event) {
		this.props.addClient(this.state.newClient);
		const clients = this.props.clients.clientList;
		this.props.selectClient(this.state.newClient);
		this.setState({
			newClient: ''
		});
		event.preventDefault();
	}

	handleSelectClientChange(event) {
		const client = event.target.value;
		this.props.selectClient(client);
	}

	handleRemoveClient(event) {
		const activeClient = this.props.clients.activeClient;
		this.props.removeClient(activeClient);
		event.preventDefault();
	}

	openNewClientWindow() {
		let win = new remote.BrowserWindow({
			parent: remote.getCurrentWindow(),
			modal: true,
			height: 300,
			width: 300
		});

		win.loadURL(url.format({
			pathname: path.join(__dirname, 'index.html'),
			protocol: 'file:',
			slashes: true
		}));
	}

	render() {
		return (
			<div className="clients">
				<p className="clients-label">CLIENTS</p>
				<ClientList
				clients={this.props.clients.clientList}
				/>
				<ClientForm
					onSubmit={this.handleSubmit}
					onChange={this.handleNewClientChange}
					newClient={this.state.newClient}
				/>
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
		addClient: addClient,
		selectClient: selectClient,
		removeClient: removeClient
	}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(Clients);
