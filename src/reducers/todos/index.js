// Instruments
import { todos } from 'components/Scheduler/todos';
import types from 'actions/todos/types';

export default (state = todos, { payload, type }) => {
    switch (type) {
        case types.DELETE_TODO:
            return state.filter((todo) => todo.id !== payload);

        case types.TOGGLE_COMPLETE_TODO:
            return state.map((todo) => todo.id === payload ? { ...todo, completed: !todo.completed } : todo);

        case types.TOGGLE_TODO_PRIORITY:
            return state.map((todo) => todo.id === payload ? { ...todo, important: !todo.important } : todo);

        default:
            return state;
    }
};
