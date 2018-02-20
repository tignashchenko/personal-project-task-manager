// Core
import { combineReducers } from 'redux';

// Instruments
import todos from './todos';
import forms from './forms';

export default combineReducers({
    todos,
    forms,
});
