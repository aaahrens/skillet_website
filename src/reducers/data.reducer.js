/**
 * Created by drunkengranite on 1/14/2017.
 */
import {handleActions} from "redux-actions";
import {
	LOAD_MENU
} from '../constants/constants'
import Immutable from 'immutable'

const initialState = {
	menu: Immutable.List(),
	location: "",
	stuff: "penis",

};


const DataReducers = handleActions({

	[LOAD_MENU]: (state, action) => {
		return {
			...state,
			menu: action.payload
		}
	}
}, initialState);


export default DataReducers;