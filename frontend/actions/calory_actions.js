import * as CaloryUtil from '../util/calory_util';


export const RECEIVE_ALL_CALORIES = 'RECEIVE_ALL_CALORIES';
export const RECEIVE_CALORY = 'RECEIVE_CALORY';
export const REMOVE_CALORY = 'REMOVE_CALORY';

const receiveAllCalories= (calories) =>{

    return(
        {
            type: RECEIVE_ALL_NOTES,
            calories
        }
    )
}


export const fetchCalories = (userId) => dispatch => {

    return CaloryUtil.fetchCalories(userId).then(calories => dispatch(receiveAllCalories(calories)));
};

const receiveCalory = calory => {
    debugger
    return (
        {
            type: RECEIVE_CALORY,
            calory
        }
    )
};

export const fetchCalory = caloryId => dispatch => {
    return CaloryUtil.fetchCalory(caloryId).then(calory => dispatch(receiveCalory(calory)))
};

export const createCalory = calory => dispatch => {
    debugger
    return CaloryUtil.createCalory(calory).then(calory =>dispatch(receiveCalory(calory)));
};

export const updateCalory = calory => dispatch => {
    return CaloryUtil.updateCalory(calory).then(calory => dispatch(receiveCalory(calory)));
};

const removeCalory = ({id}) => {

    return (
        {
            type: REMOVE_CALORY,
            id
        }
    )
};

export const deleteCalory = caloryId => dispatch => {

    return CaloryUtil.deleteCalory(caloryId).then(calory=> dispatch(removeCalory(calory)))
};