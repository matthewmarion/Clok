const intitialState = {
	clientList: [],
	activeClient: ''
};

export default (state=intitialState, action) => {
	let updatedClients;

	const removeClientFromList = function(array, client) {
		const index = array.indexOf(client);
		array.splice(index, 1);
	}

	const removeClientFromHeader = function(array, client) {
		const index = array.indexOf(client);
		if (array.length == 0) {
			state.activeClient = '';
		} else {
			state.activeClient = array[0];
		}
	}

	switch(action.type) {
	case 'CLIENT_ADDED':
		updatedClients = state.clientList.concat(action.payload);
		return {...state, clientList: updatedClients, activeClient: action.payload};
		break;
	case 'CLIENT_REMOVED':
		updatedClients = state.clientList;
		removeClientFromList(updatedClients, action.payload);
		removeClientFromHeader(updatedClients, action.payload);
		return {...state, clientList: updatedClients};
		break;
	case 'CLIENT_SELECTED':
		return {...state, activeClient: action.payload};
		break;
	}
	return state;
};