import {connect} from 'react-redux';
import Footer from '../components/footer';
const mapDispatchToProps = (dispatch)=> {
    return {
        onFilter: (filterName)=> {
            dispatch({type:'FILTER',filterName});
        }
    }
};
export default connect(()=>{return {}},mapDispatchToProps)(Footer);
