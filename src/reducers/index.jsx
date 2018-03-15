import { combineReducers } from 'redux';
import ClientsReducer from './clients-reducer';

export default combineReducers({
	clients: ClientsReducer
});