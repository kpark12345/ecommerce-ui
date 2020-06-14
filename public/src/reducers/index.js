import { combineReducers } from 'redux';

// import below your specified reducers to create a link to the rootReducer (aka. your store)
import entry from './todoEntryReducer';
import todos from './todosReducer';
import productClicked from './productClickedReducer';


const rootReducers = combineReducers({
    // add reducer file references here
    entry,
    todos,
    productClicked
});

export default rootReducers;