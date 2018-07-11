/**
 * Created by drunkengranite on 1/14/2017.
 */
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import DataReducers from "./DataReducer";
import stateReducers from "./StateReducers";

const index = combineReducers({
    state: stateReducers,
    data: DataReducers,
    router: routerReducer
});

export default index;
