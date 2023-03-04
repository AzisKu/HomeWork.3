import {types} from "../types";

const initialState = {
    title: ""
}

export default function titleReducer(state = initialState,action) {
    switch (action.type) {
        case "CHANGE_TITLE":
            return{...state, title:"hello world"}
        default: return state
    }
}