// Core
import { all } from 'redux-saga/effects';

// Instruments
import todos from './todos';

export function* saga () {
    yield all([
        todos.addTodoWatcher(),
        todos.deleteTodoWatcher(),
        todos.fetchTodosWatcher()
    ]);
}
