// Core
import { all } from 'redux-saga/effects';

// Instruments
import todos from './todos';

export function* saga () {
    yield all([
        todos.addTodoWatcher(),
        todos.completeAllTodosWatcher(),
        todos.completeTodoWatcher(),
        todos.deleteTodoWatcher(),
        todos.findTodoWatcher(),
        todos.fetchTodosWatcher(),
        todos.toggleTodoPriorityWatcher(),
        todos.updateTodoWatcher()
    ]);
}
