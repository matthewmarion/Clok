export const addClient = (client) => {
	alert('Added new client: ' + client);
	return {
		type: 'CLIENT_ADDED',
		payload: client
	};
};

export const selectClient = (client) => {
	alert('Client selected: ' + client);
	return {
		type: 'CLIENT_SELECTED',
		payload: client
	};
};