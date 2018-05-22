export const addClient = (client) => {
	alert('Added new client: ' + client);
	return {
		type: 'CLIENT_ADDED',
		payload: client
	};
};

export const removeClient = (client) => {
	alert('Removed client: ' + client);
	return {
		type: 'CLIENT_REMOVED',
		payload: client
	};
}

export const selectClient = (client) => {
	return {
		type: 'CLIENT_SELECTED',
		payload: client
	};
};