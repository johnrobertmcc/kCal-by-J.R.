import {connect} from 'react-redux';
import MainPage from './mainpage';
import {logOut} from '../../actions/session_actions';


const mSTP = state => {
 
    return null
}

const mDTP = dispatch => {
    return ({
        logOut: () => dispatch(logOut())
    })
}


export default connect(null, mDTP)(MainPage);