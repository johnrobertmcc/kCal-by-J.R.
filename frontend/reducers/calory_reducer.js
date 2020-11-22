import { RECEIVE_CALORY, RECEIVE_ALL_CALORIES, REMOVE_CALORY} from "../actions/calory_actions";

const CaloriesReducer = (state = {}, action) => {

    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CALORY:
            const temp = action.calory;
            temp.date = temp.date.split('-').reverse().join('/');
            return {[temp.id] : temp};
        
        case RECEIVE_ALL_CALORIES:

            return action.calories

        case REMOVE_CALORY:
            const test = Object.assign({}, state)
            delete test[action.caloryId];
            return test;

        default:
            return state;
    }
}

export default CaloriesReducer;