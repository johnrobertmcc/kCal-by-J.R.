import { connect } from 'react-redux';
import Counter from './counter';
import {createCalory, deleteCalory, updateCalory, fetchCalories} from '../../../actions/calory_actions';


const mSTP = (state, ownProps) => {
    return { 
        calories: state.entities.calories,
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