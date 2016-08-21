import React, {Component} from 'react';
export default class TodoList extends Component {
    toggle(index) {
        this.props.onToggle(index);
    }

    render() {
        return <div>
            {this.props.todos.map((todo, index)=> {
                return <div key={index}>
                    <input type="checkbox" onClick={this.toggle.bind(this, index)}/>
                    <span style={{'textDecoration': todo.isDone ? 'line-through' : ''}}>{todo.text}</span>
                </div>
            })}
        </div>
    }
}