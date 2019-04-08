import { combineReducers } from 'redux';
import {USER_ACTIONS} from '../actions/userActions';



const user = (state = [], action) => {
    switch(action.type) {
        case USER_ACTIONS.ACTIVATE:
            console.log('in the user reducer', action);
            return action.payload;
        default:
            return state;
    } 
}

const cart = (state = [], action) => {
    switch(action.type) {
        case USER_ACTIONS.CARTID:
            console.log('in the user reducer', action);
            return action.payload;
        default:
            return state;
    } 
}

const activatePower = (state = [], action) => {
    switch(action.type) {
        case USER_ACTIONS.POWER:
            console.log('in the user reducer', action);
            return action.payload;
        default:
            return state;
    } 
}

const avengers = (state = [], action) => {
    switch(action.type) {
        case USER_ACTIONS.ASSEMBLE:
            console.log('in the user reducer', action);
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    user,
    activatePower,
    cart,
    avengers
});