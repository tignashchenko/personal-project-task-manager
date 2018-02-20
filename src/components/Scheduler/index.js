// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Control, Form } from 'react-redux-form';

// Instruments
import Styles from './styles';
import Checkbox from 'theme/assets/Checkbox';
import todoActions from 'actions/todos';
// Components
import Task from 'components/Task';

class Scheduler extends Component {
    componentDidMount () {
        const { actions } = this.props;

        actions.fetchTodos();

        this.refetch = setInterval(actions.fetchTodos, 30000);
    }

    componentWillUnmount () {
        clearInterval(this.refetch);
    }

    createTodo = ({ message }) => {
        const { actions } = this.props;

        //
        // event.preventDefault();
        //
        // const todoMessage = document.getElementById('todo-create-field').value;
        //
        // if (todoMessage.length > 46) {
        //     alert('Your input is too long!'); //eslint-disable-line
        //
        //     document.getElementById('todo-create-field').value = '';
        //
        //     return;
        // } else if (!todoMessage.length) {
        //     alert('Please enter a valid input!'); //eslint-disable-line
        //
        //     return;
        // }
        actions.addTodo(message);
    };

    render () {
        const { actions, todos } = this.props;
        const allCompleted = todos.every((todo) => todo.completed);
        const todoList = todos.map(({ id, message, completed, favorite }) => (
            <Task
                changePriority = { actions.toggleTodoPriority }
                complete = { actions.toggleCompleteTodo }
                completed = { completed }
                deleteTodo = { actions.deleteTodo }
                editable = { false }
                favorite = { favorite }
                id = { id }
                key = { id }
                message = { message }
                updateTodo = { actions.updateTodo }
            />
        ));

        return (
            <section className = { Styles.scheduler }>
                <main>
                    <header>
                        <h1>Планировщик задач</h1>
                        <input placeholder = 'Поиск' type = 'search' />
                    </header>
                    <section>
                        <Form
                            model = 'forms.addTodo'
                            onSubmit = { this.createTodo } >
                            <Control.text id = 'forms.addTodo.message' model = 'forms.addTodo.message' placeholder = 'Описание моей новой задачи' />
                            <button type = 'submit'>
                                Добавить задачу
                            </button>
                        </Form>
                        <ul>{todoList}</ul>
                    </section>
                    <footer>
                        <Checkbox
                            checked = { allCompleted }
                            color1 = '#363636'
                            color2 = '#fff'
                            onClick = { actions.toggleCompleteAllTodos }
                        />
                        <code>Все задачи выполнены</code>
                    </footer>
                </main>
            </section>
        );
    }
}

const mapStateToProps = ({ todos }) => ({
    todos,
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...todoActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Scheduler);
