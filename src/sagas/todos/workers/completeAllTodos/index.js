// Core
import { call, put, select } from 'redux-saga/effects';

// Instruments
import todoActions from 'actions/todos';
import { api, token } from 'instruments/api';

export function* completeAllTodosWorker () {
    try {
        const todos = yield select((state) => state.todos);

        //console.log('todos', todos);
        const response = yield call(fetch, api, {
            method:  'PUT',
            headers: {
                Authorization:  token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todos),
        });

        const { data, message } = yield call([response, response.json]);

        console.log('data', data);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(todoActions.toggleCompleteTodoSuccess(data));
    } catch (error) {
        yield put(todoActions.toggleCompleteTodoFailure(error.message));
    } finally {
        console.log('Attempting to change todo favorite...');
    }
}
