import {types} from "../types";

const initialState = {
    todoValue: "",
    todos: []
}


export default function reducer(state = initialState, action) {

    switch (action.type) {
        case types.CHANGE_TODO_INPUT:
            return {...state, todoValue: action.payload}
        case types.ADD_TODO:
            let id = 1;
            if (state.todos.length > 0) {
                id = +state.todos[state.todos.length - 1].id + 1
            }
            return {...state, todos: [...state.todos, {id, text: action.payload, status: false}], todoValue: ""}
        case types.DELETE_TODO:
            const newArray = state.todos.filter(todo => +todo.id !== +action.payload);
            return {...state, todos: newArray}

        case types.CHANGE_STATUS:
            const newArrayStatus = state.todos.map(todo => {
                if (+todo.id === +action.payload.id) {
                    return {
                        ...todo,
                        status: action.payload.status
                    }
                } else {
                    return todo
                }
            })
            return {...state, todos: newArrayStatus}
        default:
            return state
    }






}