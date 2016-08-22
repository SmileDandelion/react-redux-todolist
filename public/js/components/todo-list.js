import React, {Component} from 'react';
export default class TodoList extends Component {
    toggle(index) {
        this.props.onToggle(index);
    }

    delete(index) {
        this.props.onDelete(index);
    }

    render() {
        return <div>
            {this.props.filter.map((todo, index)=> {
                return <div key={index}>
                    <input type="checkbox" checked={todo.isDone} onClick={this.toggle.bind(this, index)}/>
                    <span style={{'textDecoration': todo.isDone ? 'line-through' : ''}}>{todo.text}</span>
                    <button onClick={this.delete.bind(this, index)}>删除</button>
                </div>
            })}
        </div>
    }
}