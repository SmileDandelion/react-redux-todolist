import TodoList from '../components/add-todo';
import {connect} from 'react-redux';
const mapDispanchTOProps =(dispanch)=>{
    return {
        onAdd:(text)=>{
            dispanch({type:'ADD',text});
        }
    }
};
export default connect(()=>{return {}},mapDispanchTOProps)(TodoList);
