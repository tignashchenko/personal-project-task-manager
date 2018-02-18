// Core
import { call, put } from 'redux-saga/effects';

// Instruments
import todoActions from 'actions/todos';
import { api, token } from 'instruments/api';

export function* deleteTodoWorker ({ payload: id }) {
    try {
        const response = yield call(fetch, `${api}${id}`, {
            method:  'DELETE',
            headers: {
                Authorization: token,
            },
        });

        if (response.status !== 204) {
            const { message } = yield call([response, response.json]);

            throw new Error(message);
        }

        yield put(todoActions.deleteTodoSuccess(id));
    } catch (error) {
        yield put(todoActions.deleteTodoFailure(error.message));
    } finally {
        console.log('Attempting to delete a todo...');
    }
}
