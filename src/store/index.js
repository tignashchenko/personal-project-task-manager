//  Core
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Instruments
import reducer from 'reducers';
import { saga } from 'sagas';

const dev = process.env.NODE_ENV === 'development'; // eslint-disable-line
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = dev && devtools ? devtools : compose;

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const persistedState = JSON.parse(localStorage.getItem('todos'));

export default createStore(reducer, persistedState, composeEnhancers(applyMiddleware(...middleware)));

sagaMiddleware.run(saga);
