// Core
import { call, put } from 'redux-saga/effects';

// Instruments
import todoActions from 'actions/todos';
import { api, token } from 'instruments/api';

export function* updateTodoWorker ({ payload }) {
    try {
        console.log('payload', payload);
        const response = yield call(fetch, api, {
            method:  'PUT',
            headers: {
                Authorization:  token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify([payload]),
        });

        const { data, message: errorMessage } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(errorMessage);
        }

        yield put(todoActions.updateTodoSuccess(data));
    } catch (error) {
        yield put(todoActions.updateTodoFailure(error.message));
    } finally {
        console.log('Attempted to edit a todo...');
    }
}
