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
	aboutBody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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