import {LOAD_MENU, SAVE_ABOUT, SAVE_GALLERY, SAVE_SPECIALS} from "../constants/constants";
import Immutable from "immutable";
import {getWorksheet} from "gsheets";

require('isomorphic-fetch');


export const fetchAll = () => {
	return (dispatch, getState) => {
		dispatch(getMenu());
		dispatch(getGallery());
		dispatch(getSpecials());
		dispatch(getAbout());
	}
};


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
							MenuItems.filter((item) => {
									if (!menu.get('Name') || !item.get('Section')) {
										return false
									}
									return menu.get('Name').trim() === item.get('Section').trim()
								}
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
				dispatch(saveGallery(Immutable.fromJS(response.data)))
			})
			.catch((error) => {
				console.log(error)
			})

	}
}

export const saveGallery = (data) => {
	return {
		type: SAVE_GALLERY,
		payload: data
	}
}

export const getSpecials = () => {
	return (dispatch, getState) => {
		Promise.resolve(getWorksheet('1tOAxF5rsRz8bI0rkcTKDa3wQRdOZIEnjgCoZc8J8iz8', 'Specials'))
			.then((response) => {
				dispatch(saveSpecials(Immutable.fromJS(response.data)))
			})
			.catch((error) => {
				console.log(error)
			})
	}
}


export const saveSpecials = (specials) => {
	return {
		type: SAVE_SPECIALS,
		payload: specials
	}
}


export const getAbout = () => {

	return (dispatch, getState) => {

	}
};

//http://docs.google.com/feeds/download/documents/Export?docId=2PACX-1vT5efz6CGzbhxaHAcKGee2CaXP2fuxzeM65-xaqCSFd1aCWjndT9n0T65uJwd7UMAyInwXBRAbOu5r3&exportFormat=txt

export const saveAbout = (text) => {
	return {
		type: SAVE_ABOUT,
		payload: text
	}
}