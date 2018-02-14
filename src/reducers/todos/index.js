// Instruments
import { todos } from 'components/Scheduler/todos';
import types from 'actions/todos/types';

export default (state = todos, { payload, type }) => {
    switch (type) {
        case types.DELETE_TODO:
            return state.filter((todo) => todo.id !== payload);

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

        default:
            return state;
    }
};
