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

    toggleCompleteAllTodosFailure: (error) => ({
        type:    types.TOGGLE_COMPLETE_ALL_TODOS_FAILURE,
        payload: error,
        error:   true,
    }),

    toggleCompleteAllTodosSuccess: (todos) => ({
        type:    types.TOGGLE_COMPLETE_ALL_TODOS_SUCCESS,
        payload: todos,
    }),

    toggleCompleteTodo: (todo) => ({
        type:    types.TOGGLE_COMPLETE_TODO,
        payload: todo,
    }),

    toggleCompleteTodoFailure: (error) => ({
        type:    types.TOGGLE_COMPLETE_TODO_FAILURE,
        payload: error,
        error:   true,
    }),

    toggleCompleteTodoSuccess: (id) => ({
        type:    types.TOGGLE_COMPLETE_TODO_SUCCESS,
        payload: id,
    }),

    toggleTodoPriority: (todo) => ({
        type:    types.TOGGLE_TODO_PRIORITY,
        payload: todo,
    }),

    toggleTodoPriorityFailure: (error) => ({
        type:    types.TOGGLE_TODO_PRIORITY_FAILURE,
        payload: error,
        error:   true,
    }),

    toggleTodoPrioritySuccess: (id) => ({
        type:    types.TOGGLE_TODO_PRIORITY_SUCCESS,
        payload: id,
    }),

    updateTodo: (id, message, favorite, completed) => ({
        type:    types.UPDATE_TODO,
        payload: {
            id,
            completed,
            favorite,
            message,
        },
    }),

    updateTodoFailure: (error) => ({
        type:    types.UPDATE_TODO_FAILURE,
        payload: error,
        error:   true,
    }),

    updateTodoSuccess: (todo) => ({
        type:    types.UPDATE_TODO_SUCCESS,
        payload: todo,
    }),
});
