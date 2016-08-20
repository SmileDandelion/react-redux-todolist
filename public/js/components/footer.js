import React, {Component} from 'react';

export default class Footer extends Component {
    filter(filterName) {
        this.props.onFilter(filterName);
    }
    render() {
        return <div>
            <button onClick={this.filter.bind(this,'ALL')}>ALL</button>
            <button onClick={this.filter.bind(this,'ACTIVED')}>ACTIVED</button>
            <button onClick={this.filter.bind(this,'COMPLETED')}>COMPLETED</button>
        </div>
    }
}