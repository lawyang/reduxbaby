import { combineReducers } from 'redux';
import mainReducer from './userReducer';



const store = combineReducers({
    mainReducer
});

export default store