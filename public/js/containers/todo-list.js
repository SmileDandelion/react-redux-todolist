import {connect} from 'react-redux';
import TodoList from '../components/todo-list';

const mapStateToProps = (state)=> {
    return {filter: state.filter}
};

const mapDispanchToProps = (dispatch)=> {
    return {
        onToggle: (index)=> {
            dispatch({
                type: 'TOGGLE',
                index
            });
        },
        onDelete: (index)=> {
            dispatch({
                type: 'DELETE',
                index
            });
        }
    }
};
export default connect(mapStateToProps, mapDispanchToProps)(TodoList);