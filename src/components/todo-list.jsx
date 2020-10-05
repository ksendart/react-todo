import React, { Component } from 'react';
import TodoListItem from './todo-list-item';

export default class TodoList extends Component {S
    render() {
        const {items, onDeleted, toggleDone, toggleImportant} = this.props;
        const listItems = items.map(({id, ...itemProps}) => {
            return (
                <li key={id} className="list-group-item">
                    <TodoListItem {...itemProps}
                                  onDeleted={() => onDeleted(id)}
                                  toggleDone={() => toggleDone(id)}
                                  toggleImportant={() => toggleImportant(id)}/>
                </li>
            );
        });

        return (
            <ul className="list-group mt-2">
                {listItems}
            </ul>
        );
    }
}