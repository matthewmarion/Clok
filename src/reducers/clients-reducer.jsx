const intitialState = {
	clientList: [],
	activeClient: ''
};

export default (state=intitialState, action) => {
	let updatedClients;
	switch(action.type) {
	case 'CLIENT_ADDED':
		updatedClients = state.clientList.concat(action.payload);
		return {...state, clientList: updatedClients};
		break;
	case 'CLIENT_REMOVED':
		updatedClients = state.clientList.splice(action.payload, 1);
		return updatedClients;
		break;
	case 'CLIENT_SELECTED':
		return {...state, activeClient: action.payload};
		break;
	}
	return state;
};