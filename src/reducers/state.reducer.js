/**
 * Created by drunkengranite on 1/14/2017.
 */
import {handleActions} from "redux-actions";
import {SELECT_TAB} from "../constants/constants";

let initialState = {};


const stateReducers = handleActions({
	[SELECT_TAB]: (state, action) => {
		return {
			...state,
			currentTab: action.payload
		}
	}
}, initialState);

export default stateReducers;