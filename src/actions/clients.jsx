export const addClient = (client) => {
	alert('Added new client: ' + client);
	return {
		type: 'CLIENT_ADDED',
		payload: client
	};
};