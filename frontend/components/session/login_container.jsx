import { connect } from 'react-redux';
import LogIn from './login';
import { signUp, logIn, logOut, removeErrors } from '../../actions/session_actions';


const mSTP = ({errors}) => {
    return { errors}
};

const mDTP = dispatch => {

    return { 
            signUp : user => dispatch(signUp(user)),
            logIn : user => dispatch(logIn(user)),
            logOut : user => dispatch(logOut(user)),
            removeErrors: () => dispatch(removeErrors())
        };
    
};

export default connect(mSTP, mDTP)(LogIn);