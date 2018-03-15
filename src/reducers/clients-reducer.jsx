const intitialState = {
    clientList: []
}

export default (state=intitialState, action) => {
    switch(action.type) {
        case "CLIENT_ADDED":
            const updatedClients = state.clientList.concat(action.payload);
            return {...state, clientList: updatedClients};
            break;
    }
    return state;
}