import React, {Component} from 'react';
export default class AddTodo extends Component {
    add(){
        const text = this.refs.myInput.value;
        this.props.onAdd(text);
    }
    render() {
        return <div>
            <input type="text" ref='myInput'/>
            <button onClick={this.add.bind(this)}>+</button>
        </div>
    }
}