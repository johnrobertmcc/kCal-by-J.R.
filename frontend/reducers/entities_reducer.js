import { combineReducers } from "redux";
import CaloriesReducer from "./calory_reducer";
import usersReducer from "./user_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    calories: CaloriesReducer
});

export default entitiesReducer;