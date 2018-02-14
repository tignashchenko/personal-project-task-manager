//Instruments
import types from './types';

export default Object.freeze({
    deleteTodo: (id) => ({
        type:    types.DELETE_TODO,
        payload: id,
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
