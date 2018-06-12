const intitialState = {
	clientList: [],
	activeClient: ''
};

export default (state=intitialState, action) => {
	let updatedClients;

	const removeClient = function(array, client) {
		const index = array.indexOf(client);
		array.splice(index, 1);
	}
	
	switch(action.type) {
	case 'CLIENT_ADDED':
		updatedClients = state.clientList.concat(action.payload);
		return {...state, clientList: updatedClients};
		break;
	case 'CLIENT_REMOVED':
		updatedClients = state.clientList;
		console.log(updatedClients);
		removeClient(updatedClients, action.payload);
		console.log(updatedClients);
		return {...state, clientList: updatedClients};
		break;
	case 'CLIENT_SELECTED':
		return {...state, activeClient: action.payload};
		break;
	}
	return state;
};