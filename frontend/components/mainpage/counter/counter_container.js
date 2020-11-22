import { connect } from 'react-redux';
import Counter from './counter';
import {createCalory, deleteCalory, updateCalory, fetchCalories} from '../../../actions/calory_actions';


const mSTP = (state, ownProps) => {
    let date;
    let allotted;

    date = ownProps.date ? ownProps.date : new Date().toLocaleDateString()
    allotted = ownProps.allotted ? ownProps.allotted : 2500
    let userId = ownProps.user.id
    return { 
        calories: Object.values(state.entities.users[userId].calories),
        date,
        allotted,
        userId
    }
};

const mDTP = dispatch => {

    return { 
          createCalorie : calory => dispatch(createCalory(calory)),
          deleteCalorie : caloryId => dispatch(deleteCalory(caloryId)),
          updateCalory : calory => dispatch(updateCalory(calory)),
          fetchCalories : userId => dispatch(fetchCalories(userId)),
        };
    
};

export default connect(mSTP, mDTP)(Counter);