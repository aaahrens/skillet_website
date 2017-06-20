import {LOAD_MENU, SpreadSheetURL, MenuURL, TEST} from "../constants/constants";
import axios from "axios";
import Immutable from 'immutable'
import {getWorksheet} from 'gsheets'
require('isomorphic-fetch');

const getMenuObj = () => {
	return axios.get(MenuURL);
};

const getItems= () => {
	return axios.get(SpreadSheetURL);
};




export const getMenu = () => {
	return (dispatch, getState) => {

		Promise.all(
			[
				getWorksheet('1tOAxF5rsRz8bI0rkcTKDa3wQRdOZIEnjgCoZc8J8iz8', 'Sheet1'),
				getWorksheet('1tOAxF5rsRz8bI0rkcTKDa3wQRdOZIEnjgCoZc8J8iz8', 'Sheet2')
			])
			.then((values) => {
				const MenuItems = Immutable.fromJS(values[0].data);
				const Menu = Immutable.fromJS(values[1].data)
					.map((menu) =>
						menu.set("Items",
							MenuItems.filter((item) =>
								menu.get('Name').trim() === item.get('Section').trim()
							)
						)
					);
				dispatch(loadMenu(Menu))
			})
			.catch(error => console.log(error))

	};
};




export const loadMenu = (menu) => {
	return {
		type: LOAD_MENU,
		payload: menu
	}
};


