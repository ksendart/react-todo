import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class AddTodoItem extends Component {
    state = {
        label: '',
    };

    render() {
        const { onAdded } = this.props;
        const { label } = this.state;
        return (
            <form className="form-inline mt-2">
                <div className="form-group">
                    <input className="form-control" onChange={(val) => this.setState({label: val}) }/>
                </div>
                <div className="form-group">
                    <button type="button"
                            className="btn btn-primary"
                            onClick={() => onAdded(label)}>
                        <FontAwesomeIcon icon="plus"/>
                    </button>
                </div>
            </form>
        );
    }
}