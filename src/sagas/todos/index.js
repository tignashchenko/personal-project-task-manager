// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import types from 'actions/todos/types';
import { fetchTodosWorker } from './workers/fetchTodos';

export default Object.freeze({
    * fetchTodosWatcher () {
        yield takeEvery(types.FETCH_TODOS, fetchTodosWorker);
    },
});
