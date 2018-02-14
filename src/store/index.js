//  Core
import { compose, createStore } from 'redux';

// Instruments
import reducer from 'reducers/todos/index';

const dev = process.env.NODE_ENV === 'development'; // eslint-disable-line
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = dev && devtools ? devtools : compose;

export default createStore(reducer, composeEnhancers());
