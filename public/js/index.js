import React, {Component} from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';

import AddTodo from './components/addtodo';
import TodoList from './components/todolist';

import reducer from './reducers/reducer';


const store = createStore(reducer);


class App extends Component {
    add(text) {
        store.dispatch({type: 'ADD', text});
    }

    toggle(index) {
        store.dispatch({type:'TOGGLE',  index});
    }

    delete(index){
        store.dispatch({type:'DELETE',index});
    }
    render() {
        return <div>
            <AddTodo onAdd={this.add.bind(this)}/>
            <TodoList onDelete={this.delete.bind(this)} onToggle={this.toggle.bind(this)} todos={store.getState().todos}/>
        </div>
    }
}

function renderFunction() {
    render(<App/>, document.getElementById('root'));
}

//注册监听器
store.subscribe(renderFunction);

renderFunction();