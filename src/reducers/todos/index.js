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

        case types.TOGGLE_COMPLETE_TODO_SUCCESS:
            return state.map((todo) => todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo);

        case types.TOGGLE_TODO_PRIORITY_SUCCESS: {
            const modifiedPriorityTodos = state.map((todo) => todo.id === payload.id ? { ...todo, favorite: !todo.favorite } : todo);
            const priorityTodos = modifiedPriorityTodos.filter((todo) => todo.favorite);
            const nonPriorityTodos = modifiedPriorityTodos.filter((todo) => !todo.favorite);

            return [...priorityTodos.reverse(), ...nonPriorityTodos];
        }

        case types.UPDATE_TODO_SUCCESS:
            return state.map((todo) => todo.id === payload[0].id ? { ...todo, message: payload[0].message } : todo);

        default:
            return state;
    }
};
