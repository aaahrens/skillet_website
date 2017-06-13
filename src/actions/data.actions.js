import {LOAD_MENU, SpreadSheetURL} from "../constants/constants";
import axios from "axios";
import Immutable from 'immutable'

export const getMenu = () => {
	return (dispatch, getState) => {
		axios.get(SpreadSheetURL)
			.then((response) => {
				console.log(response.data)
				let arr = response.data.split(",");
				console.log(arr)
				dispatch(loadMenu(Immutable.List()))
			})
			.catch((error) => {
				console.log(error)
			})
	};
};


export const loadMenu = (menu) => {
	return {
		type: LOAD_MENU,
		payload: menu
	}
};


