import TodoList from '../components/add-todo';
import {connect} from 'react-redux';
const mapDispanchTOProps =(dispatch)=>{
    return {
        onAdd:(text)=>{
            dispatch({type:'ADD',text});
        }
    }
};
export default connect(()=>{return {}},mapDispanchTOProps)(TodoList);
