import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { reducer } from "./reducers/reducer";

const logger = createLogger({
    collapsed: true,
    diff: true
})

export const store = createStore(reducer, applyMiddleware(thunk, logger))