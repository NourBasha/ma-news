import {combineReducers} from 'redux';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
search_reducer : SearchReducer
})
export default RootReducer;