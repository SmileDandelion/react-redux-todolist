import {connect} from 'react-redux';
import TodoList from '../components/todo-list';

const mapStateToProps = (state)=> {
    return {todos: state.todos}
};

const mapDispanchToProps = (dispanch)=> {
    return {
        onToggle: (index)=> {
            dispanch({
                type: 'TOGGLE',
                index
            });
        }
    }
};
export default connect(mapStateToProps, mapDispanchToProps)(TodoList);