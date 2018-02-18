// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import types from 'actions/todos/types';
import { addTodoWorker } from './workers/addTodo';
import { deleteTodoWorker } from './workers/deleteTodo';
import { fetchTodosWorker } from './workers/fetchTodos';

export default Object.freeze({
    * addTodoWatcher () {
        yield takeEvery(types.ADD_TODO, addTodoWorker);
    },

    * deleteTodoWatcher () {
        yield takeEvery(types.DELETE_TODO, deleteTodoWorker);
    },

    * fetchTodosWatcher () {
        yield takeEvery(types.FETCH_TODOS, fetchTodosWorker);
    },
});
