import React, {Component} from 'react';
export default class TodoList extends Component {
    toggle(index) {
        this.props.onToggle(index);
    }

    render() {
        const todos = this.props.todos.map((todo, index)=> {
            return <div key={index}>
                <input type="checkbox" checked={todo.isDone} onClick={this.toggle.bind(this,index)}/>
                {todo.text}
            </div>
        });
        return <div>
            {todos}
        </div>
    }
}