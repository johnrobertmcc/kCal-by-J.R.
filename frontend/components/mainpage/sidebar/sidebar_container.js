import { connect } from 'react-redux';
import SideBar from './sidebar';
import {signUp, logIn, logOut, removeErrors, updateUser} from '../../../actions/session_actions';


const mSTP = (state, ownProps) => {

    return { 
        user: state.entities.users[state.session.id],
        errors : state.errors,
    }
};

const mDTP = dispatch => {

    return { 
            signUp : user => dispatch(signUp(user)),
            logIn : user => dispatch(logIn(user)),
            logOut : user => dispatch(logOut(user)),
            removeErrors: () => dispatch(removeErrors()),
            updateUser : user => dispatch(updateUser(user))
        };
    
};

export default connect(mSTP, mDTP)(SideBar);