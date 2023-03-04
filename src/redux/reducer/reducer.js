import {combineReducers} from "redux";
import todoReducer from "./TodoReducer";
import titleReducer from "./titleReducer";
import usersReducer from "./UsersReducer";




export const rootReducers = combineReducers({
    titleReducer,
    usersReducer,
    todoReducer,

})


