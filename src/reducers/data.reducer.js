/**
 * Created by drunkengranite on 1/14/2017.
 */
import {handleActions} from "redux-actions";
import {
	LOAD_MENU, SAVE_SPECIALS, SAVE_ABOUT, SAVE_GALLERY

} from "../constants/constants";

import Immutable from "immutable";

const initialState = {
	menu: Immutable.List(),
	specials: Immutable.List(),
	aboutText: "",
	images: Immutable.List(),
};


const DataReducers = handleActions({

	[LOAD_MENU]: (state, action) => {
		return {
			...state,
			menu: action.payload
		}
	},

	[SAVE_SPECIALS]: (state, action) => {
		return {
			...state,
			specials: action.payload
		}
	},
	[SAVE_ABOUT]: (state, action) => {
		return {
			...state,
			aboutText: action.payload
		}
	},
	[SAVE_GALLERY]: (state, action) => {
		return {
			...state,
			images: action.payload
		}
	}

}, initialState);


export default DataReducers;