import { connect } from 'react-redux';
import Counter from './counter';


const mSTP = (state, ownProps) => {
    return { 
        errors : state.errors,
    }
};

const mDTP = dispatch => {

    return { 
            signUp : user => dispatch(signUp(user)),
            logIn : user => dispatch(logIn(user)),
            logOut : user => dispatch(logOut(user)),
            removeErrors: () => dispatch(removeErrors())
        };
    
};

export default connect(mSTP, mDTP)(Counter);