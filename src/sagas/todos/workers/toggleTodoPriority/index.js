// Core
import { call, put } from 'redux-saga/effects';

// Instruments
import todoActions from 'actions/todos';
import { api, token } from 'instruments/api';

export function* toggleTodoPriorityWorker ({ payload: todo }) {
    try {
        const response = yield call(fetch, api, {
            method:  'PUT',
            headers: {
                Authorization:  token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([{
                id:        todo.id,
                completed: todo.completed,
                message:   todo.message,
                favorite:  !todo.favorite,
            }]),
        });

        const { data, message } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(todoActions.toggleTodoPrioritySuccess(data[0]));
    } catch (error) {
        yield put(todoActions.toggleTodoPriorityFailure(error.message));
    } finally {
        console.log('Attempting to change todo favorite...');
    }
}
