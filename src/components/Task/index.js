// Core
import React, { Component } from 'react';
import cx from 'classnames';

// Instruments
import Styles from './styles';
import Checkbox from 'theme/assets/Checkbox';
import Delete from 'theme/assets/Delete';
import Edit from 'theme/assets/Edit';
import Star from 'theme/assets/Star';

export default class Task extends Component {
    deleteTodo = () => {
        const { deleteTodo, id } = this.props;

        deleteTodo(id);
    };

    toggleComplete = () => {
        const { complete, id } = this.props;

        complete(id);
    };

    togglePriority = () => {
        const { changePriority, id } = this.props;

        changePriority(id);
    };

    render () {
        const { completed, important, message } = this.props;

        const styles = cx(Styles.task, {
            [Styles.completed]: completed,
        });

        return (
            <li className = { styles }>
                <div>
                    <Checkbox
                        checked = { completed }
                        color1 = '#3B8EF3'
                        color2 = '#FFF'
                        onClick = { this.toggleComplete }
                    />
                    <code>{message}</code>
                </div>
                <div>
                    <Star
                        checked = { important }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        onClick = { this.togglePriority }
                    />
                    <Edit
                        color1 = '#3B8EF3'
                        color2 = '#000'
                    />
                    <Delete
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        onClick = { this.deleteTodo }
                    />
                </div>
            </li>
        );
    }
}
