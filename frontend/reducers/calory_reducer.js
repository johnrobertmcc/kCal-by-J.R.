import { RECEIVE_CALORY, RECEIVE_ALL_CALORIES, REMOVE_CALORY} from "../actions/calory_actions";

const CaloriesReducer = (state = {}, action) => {

    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CALORY:
            debugger
            return {[action.calory.id] : action.calory};
        
        case RECEIVE_ALL_CALORIES:

            return action.calories

        case REMOVE_CALORY:
            const temp = Object.assign({}, state)
            delete temp[action.caloryId];
            return temp;

        default:
            return state;
    }
}

export default CaloriesReducer;