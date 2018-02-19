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

    handleInput = (event) => {
        const { id, completed, favorite } = this.props;

        const escape = event.which === 27;
        const enter = event.which === 13;
        const element = event.target;
        const input = element.nodeName !== 'INPUT' && element.nodeName !== 'TEXTAREA';

        const message = {};

        if (input) {
            if (escape) {
                document.execCommand('undo');
                document.getElementById(id).contentEditable = 'false';
                element.blur();
            } else if (enter) {
                message[document.getElementById(id)] = element.innerHTML;
                this.updateTodo(id, Object.values(message)[0], favorite, completed);
                event.preventDefault();
                document.getElementById(id).contentEditable = 'false';
                element.blur();
            }
        }
    };

    toggleComplete = () => {
        const { complete, completed, id, favorite, message } = this.props;

        complete({
            id,
            message,
            completed,
            favorite,
        });
    };

    toggleEditable = () => {
        const { id } = this.props;

        if (document.getElementById(id).contentEditable === 'false') {
            document.getElementById(id).contentEditable = 'true';
        }
    };

    togglePriority = () => {
        const { changePriority, completed, id, favorite, message } = this.props;

        changePriority({
            id,
            message,
            completed,
            favorite,
        });
    };

    updateTodo = (id, message, favorite, completed) => {
        const { updateTodo } = this.props;

        updateTodo(id, message, favorite, completed);
    };

    render () {
        const { completed, editable, id, favorite, message } = this.props;

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
                    <code contentEditable = { editable } id = { id } onKeyDown = { this.handleInput }>{message}</code>
                </div>
                <div>
                    <Star
                        checked = { favorite }
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        onClick = { this.togglePriority }
                    />
                    <Edit
                        color1 = '#3B8EF3'
                        color2 = '#000'
                        onClick = { this.toggleEditable }
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
