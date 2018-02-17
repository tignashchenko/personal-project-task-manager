// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Instruments
import Styles from './styles';
import Checkbox from 'theme/assets/Checkbox';
import todoActions from 'actions/todos';

// Components
import Task from 'components/Task';

class Scheduler extends Component {
    createTodo = (event) => {
        const { actions } = this.props;

        event.preventDefault();

        const todoMessage = document.getElementById('todo-create-field').value;

        if (todoMessage.length > 46) {
            alert('Your input is too long!'); //eslint-disable-line

            document.getElementById('todo-create-field').value = '';

            return;
        } else if (!todoMessage.length) {
            alert('Please enter a valid input!'); //eslint-disable-line

            return;
        }
        actions.addTodo(todoMessage);

        document.getElementById('todo-create-field').value = '';
    };

    render () {
        const { actions, todos } = this.props;
        const allCompleted = todos.every((todo) => todo.completed);
        const todoList = todos.map(({ id, message, completed, important }) => (
            <Task
                changePriority = { actions.toggleTodoPriority }
                complete = { actions.toggleCompleteTodo }
                completed = { completed }
                deleteTodo = { actions.deleteTodo }
                editable = { false }
                id = { id }
                important = { important }
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
                        <form onSubmit = { this.createTodo }>
                            <input id = 'todo-create-field' placeholder = 'Описание моей новой задачи' type = 'text' />
                            <button>Добавить задачу</button>
                        </form>
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
