import React, {Component} from 'react';
export default class TodoList extends Component {

    render() {
        const todos = this.props.todos.map((todo, index)=> {
           return <div key={index}>
               {todo.text}
           </div>
        });
        return <div>
            {todos}
        </div>
    }
}