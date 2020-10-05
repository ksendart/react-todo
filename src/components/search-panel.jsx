import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const SearchPanel = () => {
    return (
        <form className="form-inline mt-2">
            <div className="form-group">
                <input className="form-control" placeholder={'Search'} />
            </div>
            <div className="form-group">
                <button type="button"
                        className="btn btn-primary">
                    <FontAwesomeIcon icon="search"/>
                </button>
            </div>
        </form>
    );
}

export default SearchPanel;