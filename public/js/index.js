import React, {Component} from 'react';
import {render} from 'react-dom';
import reducer from './reducers/reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(reducer);

class App extends Component {
    render() {
        return <div>
            hello
        </div>
    }
}

render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));