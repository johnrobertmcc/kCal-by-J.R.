import { connect } from 'react-redux';
import SideBar from './sidebar';


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
            removeErrors: () => dispatch(removeErrors())
        };
    
};

export default connect(mSTP, mDTP)(SideBar);