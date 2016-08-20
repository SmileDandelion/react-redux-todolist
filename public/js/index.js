import React, {Component} from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';

import AddTodo from './components/addtodo';

import reducer from './reducers/reducer';


const store = createStore(reducer);


class App extends Component {
    add(text) {
        store.dispatch({type: 'ADD', text});
    }

    render() {
        return <div>
            <AddTodo onAdd={this.add.bind(this)}/>
        </div>
    }
}

function renderFunction() {
    render(<App/>, document.getElementById('root'));
}

//注册监听器
store.subscribe(renderFunction);

renderFunction();