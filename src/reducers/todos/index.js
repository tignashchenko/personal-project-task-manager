// Instruments
import types from 'actions/todos/types';

export default (state = [], { payload, type }) => {
    switch (type) {
        case types.ADD_TODO_SUCCESS:
            return [payload, ...state];

        case types.DELETE_TODO_SUCCESS:
            return state.filter((todo) => todo.id !== payload);

        case types.FETCH_TODOS_SUCCESS:
            return [...payload];

        case types.TOGGLE_COMPLETE_ALL_TODOS:
            return state.map((todo) => ({ ...todo, completed: !todo.completed }));

        case types.TOGGLE_COMPLETE_TODO:
            return state.map((todo) => todo.id === payload ? { ...todo, completed: !todo.completed } : todo);

        case types.TOGGLE_TODO_PRIORITY: {
            const modifiedPriorityTodos = state.map((todo) => todo.id === payload ? { ...todo, important: !todo.important } : todo);
            const priorityTodos = modifiedPriorityTodos.filter((todo) => todo.important);
            const nonPriorityTodos = modifiedPriorityTodos.filter((todo) => !todo.important);

            return [...priorityTodos.reverse(), ...nonPriorityTodos];
        }

        case types.UPDATE_TODO:
            return state.map((todo) => todo.id === payload.id ? { ...todo, message: payload.message } : todo);

        default:
            return state;
    }
};
