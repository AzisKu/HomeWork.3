import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers";

window.composeEnhancers = undefined;
const composeEnhancers = window.composeEnhancers || compose;

export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
)