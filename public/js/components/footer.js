import React, {Component} from 'react';
export default class Footer extends Component {
    filter(filterName) {
        this.props.onFilter(filterName);
    }

    render() {
        return <div>
            <button onClick={this.filter.bind(this, 'all')}>ALL</button>
            <button onClick={this.filter.bind(this, 'active')}>ACTIVEd</button>
            <button onClick={this.filter.bind(this, 'complete')}>COMPLETED</button>
        </div>
    }
}