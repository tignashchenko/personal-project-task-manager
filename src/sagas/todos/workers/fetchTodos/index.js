// Core
import { call, put } from 'redux-saga/effects';

// Instruments
import todoActions from 'actions/todos';
import { api, token } from 'instruments/api';

export function* fetchTodosWorker () {
    try {
        const response = yield call(fetch, api, {
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

        yield put(todoActions.fetchTodosSuccess(data));

        if (!localStorage.getItem('todos')) {
            localStorage.setItem('todos', JSON.stringify(data));
        }
    } catch (error) {
        yield put(todoActions.fetchTodosFailure(error.message));
    } finally {
        console.log('Attempted to fetch todos...');
    }
}
