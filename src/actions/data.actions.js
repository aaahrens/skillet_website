import {LOAD_MENU} from "../constants/constants";
import Immutable from "immutable";
import {getWorksheet} from "gsheets";
require('isomorphic-fetch');

export const getMenu = () => {
	return (dispatch, getState) => {

		Promise.all(
			[
				getWorksheet('1tOAxF5rsRz8bI0rkcTKDa3wQRdOZIEnjgCoZc8J8iz8', 'Items'),
				getWorksheet('1tOAxF5rsRz8bI0rkcTKDa3wQRdOZIEnjgCoZc8J8iz8', 'Sections')
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


export const getGallery = () => {
	return (dispatch, getState) => {
		Promise.resolve(getWorksheet('1tOAxF5rsRz8bI0rkcTKDa3wQRdOZIEnjgCoZc8J8iz8', 'Gallery'))
			.then((response) => {
				console.dir(response)
			})
			.catch((error) => {
				console.log(error)
			})

	}
}

