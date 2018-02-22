// Core
import { call, put } from 'redux-saga/effects';

// Instruments
import todoActions from 'actions/todos';
import { api, token } from 'instruments/api';

export function* findTodoWorker ({ payload: searchTerm }) {
    try {
        const response = yield call(fetch, `${api}?search=${searchTerm}`, {
            method:  'GET',
            headers: {
                Authorization:  token,
                'Content-Type': 'application/json',
            },
        });

        const { data, message } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(message);
        }

        console.log('data', data);

        yield put(todoActions.findTodoSuccess(data));

    } catch (error) {
        yield put(todoActions.findTodoFailure(error.message));
    } finally {
        console.log('Attempted to find a todo...');
    }
}
