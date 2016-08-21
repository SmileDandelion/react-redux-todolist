import {connect} from 'react-redux';
import TodoList from '../components/todo-list';

const mapStateToProps = (state)=> {
    return {todos: state.todos}
};
export default connect(mapStateToProps)(TodoList);