import React, {Component} from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './reducers/reducer';

import AddTodo from './containers/add-todo';
import TodoList from './containers/todo-list';

const store = createStore(reducer);

class App extends Component {
    render() {
        return <div>
            <AddTodo/>
            <TodoList/>
        </div>
    }
}

render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));