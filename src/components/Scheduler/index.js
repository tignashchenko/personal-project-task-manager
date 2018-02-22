// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Control, Errors, Form } from 'react-redux-form';

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

        actions.addTodo(message);
    };

    findTodo = ({ message }) => {
        const { actions } = this.props;

        message ? actions.findTodo(message) : actions.fetchTodos();
    }

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
                        <Form
                            model = 'forms.findTodo'
                            onChange = { this.findTodo } >
                            <Control.text
                                id = 'forms.findTodo.message'
                                model = 'forms.findTodo.message'
                                placeholder = 'Поиск'
                            />
                        </Form>
                    </header>
                    <section>
                        <Errors
                            messages = { {
                                required: 'This field cannot contain an empty string.',
                                length:   'This field cannot exceed 46 characters.',
                            } }
                            model = 'forms.addTodo.message'
                            show = { (field) => field.focus }
                        />
                        <Form
                            model = 'forms.addTodo'
                            onSubmit = { this.createTodo } >
                            <Control.text
                                id = 'forms.addTodo.message'
                                model = 'forms.addTodo.message'
                                placeholder = 'Описание моей новой задачи'
                                validators = { {
                                    required: (val) => val.length,
                                    length:   (val) => val.length <= 46,
                                } }
                            />
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
