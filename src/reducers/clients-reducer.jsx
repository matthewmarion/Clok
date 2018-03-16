const intitialState = {
	clientList: [],
	activeClient: ''
};

export default (state=intitialState, action) => {
	switch(action.type) {
	case 'CLIENT_ADDED':
		const updatedClients = state.clientList.concat(action.payload);
		return {...state, clientList: updatedClients};
		break;
	case 'CLIENT_SELECTED':
		return {...state, activeClient: action.payload};
		break;
	}
	return state;
};