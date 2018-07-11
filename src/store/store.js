/**
 * Created by drunkengranite on 1/14/2017.
 */

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import Immutable from "immutable";
import index from "../reducers/index";

export const history = createHistory();

const middleware = applyMiddleware(routerMiddleware(history), thunk);

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

let local;

if (preloadedState === "{{STORE}}") {
    console.log("store was not found in the html");
    local = createStore(index, middleware);
} else {
    console.log("store was found in the html");
    Object.keys(preloadedState).map((key) => {
        if (key !== "router") {
            Object.keys(preloadedState[key]).map((second) => {
                preloadedState[key][second] = Immutable.fromJS(
                    preloadedState[key][second]
                );
            });
        }
    });

    console.dir(preloadedState);

    local = createStore(index, preloadedState, middleware);
}

export const store = local;
