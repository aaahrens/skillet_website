/**
 * Created by drunkengranite on 1/14/2017.
 */

import allReducers from "../reducers/all.reducers";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {routerMiddleware} from "react-router-redux";
import createHistory from "history/createBrowserHistory";


export const history = createHistory();

const middleware = applyMiddleware(
	routerMiddleware(history),
	thunk
);

/** @namespace window.__PRELOADED_STATE__ */
const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

let store;

if(preloadedState === '{{STORE}}'){
	console.log("store was note rendered")
	store = createStore(allReducers, middleware);
}else{
	console.log("shit was rendered")
	let store = createStore(allReducers, preloadedState,  middleware);
}

export default store

