import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class TodoListItem extends Component {
    render() {
        const { label, isDone, isImportant, onDeleted, toggleDone, toggleImportant} = this.props;
        let className = [];
        if (isDone) {
            className.push('done');
        }
        if (isImportant) {
            className.push('important');
        }

        return (
            <span>
                <span className={className.join(' ')}>{label}</span>
                <span className="btn-group float-right">
                    <button type="button"
                            className="btn btn-outline-info"
                            onClick={ toggleDone }>
                        <FontAwesomeIcon icon="check"/>
                    </button>
                    <button type="button"
                            className="btn btn-outline-success"
                            onClick={ toggleImportant }>
                        <FontAwesomeIcon icon="exclamation"/>
                    </button>
                    <button type="button"
                            className="btn btn-outline-warning"
                            onClick={ onDeleted }>
                        <FontAwesomeIcon icon="trash"/>
                    </button>
                </span>
            </span>
            );
    };
}