import React,{Component} from 'react';
export default class AddTodo extends Component{
    add(){
        this.props.onAdd(this.refs.my_input.value);
    }
    render(){
        return <div>
            <input type="text" ref="my_input"/>
            <button onClick={this.add.bind(this)}>添加</button>
        </div>
    }
}