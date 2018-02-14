//Instruments
import types from './types';

export default Object.freeze({
    addTodo: (newTodo) => ({
        type:    types.ADD_TODO,
        payload: newTodo,
    }),

    deleteTodo: (id) => ({
        type:    types.DELETE_TODO,
        payload: id,
    }),

    toggleCompleteAllTodos: () => ({
        type: types.TOGGLE_COMPLETE_ALL_TODOS,
    }),

    toggleCompleteTodo: (id) => ({
        type:    types.TOGGLE_COMPLETE_TODO,
        payload: id,
    }),

    toggleTodoPriority: (id) => ({
        type:    types.TOGGLE_TODO_PRIORITY,
        payload: id,
    }),
});
