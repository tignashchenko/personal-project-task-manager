//Instruments
import types from './types';

export default Object.freeze({
    toggleCompleteTodo: (id) => ({
        type:    types.TOGGLE_COMPLETE_TODO,
        payload: id,
    }),
});
