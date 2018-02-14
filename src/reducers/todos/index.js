// Instruments
import { todos } from 'components/Scheduler/todos';
import types from 'actions/todos/types';

export default (state = todos, { payload, type }) => {
    switch (type) {
        case types.TOGGLE_COMPLETE_TODO:

            return state.map((todo) => todo.id === payload ? { ...todo, completed: !todo.completed } : todo);
        default:
            return state;
    }
};
