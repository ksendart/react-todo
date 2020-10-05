import React, { Component } from 'react';
import TodoList from './todo-list'
import SearchPanel from './search-panel';
import AppHeader from './app-header';
import AddTodoItem from './add-todo-item';

export default class App extends Component {
    state = {
        listItems: [
            {id: 1, label: 'Item 1', isDone: false, isImportant: false },
            {id: 2, label: 'Item 2', isDone: false, isImportant: false },
            {id: 3, label: 'Item 3', isDone: false, isImportant: false },
        ],
    };

    deleteTodo(id) {
        this.setState(({ listItems }) => {
          return { listItems: listItems.filter(item => item.id !== id) };
        })
    }

    addTodo(text) {
        this.setState(({ listItems }) => {
            const newItem = { id: listItems.length, label: text }
            return { listItems: [...listItems,  newItem] };
        })
    }

    toggleImportant(id) {
        this.setState(({listItems}) => {
            const item = listItems.find(item => item.id === id);

            return { listItems: [...listItems ]};
        });
    }

    toggleDone(id) {
        this.setState(({listItems}) => {
            const item = listItems.find(item => item.id === id);
        });
    }

    render() {
        const { listItems } = this.state;

        return (
            <div>
                <AppHeader todoCount={3} doneTodoCount={1}/>
                <SearchPanel/>
                <TodoList items={listItems}
                          onDeleted={(id) => this.deleteTodo(id)}
                          toggleImportant={(id) => this.toggleImportant(id)}
                          toggleDone={(id) => this.toggleDone(id)}/>
                <AddTodoItem onAdded={(text) => this.addTodo(text)}/>
            </div>
        );
    }
}