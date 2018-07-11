/**
 * Created by drunkengranite on 1/14/2017.
 */
import { handleActions } from "redux-actions";
import { SELECT_TAB } from "../constants";

const initialState = {};

const stateReducers = handleActions(
    {
        [SELECT_TAB]: (state, action) => ({
            ...state,
            currentTab: action.payload
        })
    },
    initialState
);

export default stateReducers;
