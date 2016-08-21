import React, {Component} from 'react';
export default class TodoList extends Component {
    render() {
        return <div>
            {this.props.todos.map((todo, index)=> {
                return <div>
                    {todo.text}
                </div>
            })}
        </div>
    }
}