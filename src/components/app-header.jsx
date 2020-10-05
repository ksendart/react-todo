import React, { Component } from 'react';

export default class AppHeader extends Component {
    render() {
        const {todoCount, doneTodoCount} = this.props;
        return (
            <div>
                <h1>Todo List</h1>
                <h5>{doneTodoCount} done in {todoCount}</h5>
            </div>
        );
    }
};