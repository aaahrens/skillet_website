/**
 * Created by drunkengranite on 1/14/2017.
 */
import {handleActions} from "redux-actions";


const initialState = {

};


const DataReducers = handleActions({

	["EXAMPLE"]: (state, actions) => {
		return {
			...state,
		}
	}


}, initialState);


export default DataReducers;