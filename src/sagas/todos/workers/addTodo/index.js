// Core
import { call, put } from 'redux-saga/effects';

// Instruments
import todoActions from 'actions/todos';
import { api, token } from 'instruments/api';

export function* addTodoWorker ({ payload: comment }) {
    try {
        const response = yield call(fetch, api, {
            method:  'POST',
            headers: {
                Authorization:  token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: comment,
            }),
        });

        const { data, message } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(todoActions.addTodoSuccess(data));
    } catch (error) {
        yield put(todoActions.addTodoFailure(error.message));
    } finally {
        console.log('Attempted to add a todo...');
    }
}
