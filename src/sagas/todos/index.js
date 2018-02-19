// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import types from 'actions/todos/types';
import { addTodoWorker } from './workers/addTodo';
import { completeTodoWorker } from './workers/completeTodo';
import { deleteTodoWorker } from './workers/deleteTodo';
import { fetchTodosWorker } from './workers/fetchTodos';
import { toggleTodoPriorityWorker } from './workers/toggleTodoPriority';
import { updateTodoWorker } from './workers/updateTodo';

export default Object.freeze({
    * addTodoWatcher () {
        yield takeEvery(types.ADD_TODO, addTodoWorker);
    },

    * completeTodoWatcher () {
        yield takeEvery(types.TOGGLE_COMPLETE_TODO, completeTodoWorker);
    },

    * deleteTodoWatcher () {
        yield takeEvery(types.DELETE_TODO, deleteTodoWorker);
    },

    * fetchTodosWatcher () {
        yield takeEvery(types.FETCH_TODOS, fetchTodosWorker);
    },

    * toggleTodoPriorityWatcher () {
        yield takeEvery(types.TOGGLE_TODO_PRIORITY, toggleTodoPriorityWorker);
    },

    * updateTodoWatcher () {
        yield takeEvery(types.UPDATE_TODO, updateTodoWorker);
    },
});
