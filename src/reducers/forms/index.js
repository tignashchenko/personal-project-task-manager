import { combineForms } from 'react-redux-form';

export default combineForms(
    {
        addTodo: {
            message: '',
        },
        editTodo: {
            message: '',
        },
        findTodo: {
            message: '',
        },
    },
    'forms',
);
