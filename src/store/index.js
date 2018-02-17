//  Core
import { compose, createStore } from 'redux';

// Instruments
import reducer from 'reducers';
import todos from 'components/Scheduler/todos';

const dev = process.env.NODE_ENV === 'development'; // eslint-disable-line
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = dev && devtools ? devtools : compose;

localStorage.setItem('todos', JSON.stringify(todos));

const persistedState = JSON.parse(localStorage.getItem('todos'));

export default createStore(reducer, persistedState, composeEnhancers());
