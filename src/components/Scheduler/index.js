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
    render () {
        const { todos } = this.props;
        const allCompleted = todos.every((todo) => todo.completed);
        const todoList = todos.map(({ id, message, completed, important }) => (
            <Task
                changePriority = { this.changePriority }
                complete = { this.complete }
                completed = { completed }
                id = { id }
                important = { important }
                key = { id }
                message = { message }
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
                        <form onSubmit = { this.handleSubmit }>
                            <input placeholder = 'Описание моей новой задачи' type = 'text' />
                            <button>Добавить задачу</button>
                        </form>
                        <ul>{todoList}</ul>
                    </section>
                    <footer>
                        <Checkbox
                            checked = { allCompleted }
                            color1 = '#363636'
                            color2 = '#fff'
                            onClick = { this.completeAll }
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
