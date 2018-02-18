//Instruments
import types from './types';

export default Object.freeze({
    addTodo: (comment) => ({
        type:    types.ADD_TODO,
        payload: comment,
    }),

    addTodoFailure: (error) => ({
        type:    types.ADD_TODO_FAILURE,
        payload: error,
        error:   true,
    }),

    addTodoSuccess: (newTodo) => ({
        type:    types.ADD_TODO_SUCCESS,
        payload: newTodo,
    }),

    deleteTodo: (id) => ({
        type:    types.DELETE_TODO,
        payload: id,
    }),

    deleteTodoFailure: (error) => ({
        type:    types.DELETE_TODO_FAILURE,
        payload: error,
        error:   true,
    }),

    deleteTodoSuccess: (id) => ({
        type:    types.DELETE_TODO_SUCCESS,
        payload: id,
    }),

    fetchTodos: () => ({
        type: types.FETCH_TODOS,
    }),

    fetchTodosFailure: (error) => ({
        type:    types.FETCH_TODOS_FAILURE,
        payload: error,
        error:   true,
    }),

    fetchTodosSuccess: (todos) => ({
        type:    types.FETCH_TODOS_SUCCESS,
        payload: todos,
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

    updateTodo: (id, message) => ({
        type:    types.UPDATE_TODO,
        payload: {
            id,
            message,
        },
    }),
});
