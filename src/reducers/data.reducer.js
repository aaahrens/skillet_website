/**
 * Created by drunkengranite on 1/14/2017.
 */
import {handleActions} from "redux-actions";
import {
	LOAD_MENU
} from '../constants/constants'
import Immutable from 'immutable'

const initialState = {
	menu: filterMenu([
		{section: "Skillets", title: "Mexican Skillet", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", price: 13.99},
		{section: "Skillets", title: "Italian Skillet", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", price: 13.99},
		{section: "Skillets", title: "American Skillet", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", price: 13.99},
		{section: "Skillets", title: "French Skillet", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", price: 14.99},
		{section: "Skillets", title: "Spanish Skillet", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", price: 13.99},
		{section: "Plates", title: "Egg Rolls", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", price: 13.99},
		{section: "Plates", title: "Pancakes", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", price: 9.99},
		{section: "Beverages", title: "Soda", description: "", price: 1.99},
		{section: "Beverages", title: "Soda", description: "", price: 1.99},
		{section: "Beverages", title: "Soda", description: "", price: 1.99},
		{section: "Beverages", title: "Soda", description: "", price: 1.99}
	]),
	location: "",
	stuff: "penis",
	aboutBody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
};

const MenuCollection = () => {
	return {
		skillets: Immutable.List(),
		plates: Immutable.List(),
		beverages: Immutable.List()
	}
}

function filterMenu(list) {
	var pharsedMenu = MenuCollection();

	list.payload.forEach((obj) => {
		switch (obj.section) {
			case 'Skillets':
				pharsedMenu.skillets = pharsedMenu.skillets.push(obj);
				break;
			case 'Plates':
				pharsedMenu.plates = pharsedMenu.plates.push(obj);
				break;
			case 'Beverages':
				pharsedMenu.beverages = pharsedMenu.beverages.push(obj);
				break;
			default: break;
		}
	});

	return pharsedMenu;

}

const DataReducers = handleActions({

	[LOAD_MENU]: (state, action) => {
		var pharsedMenu = filterMenu(action.payload);

		return {
			...state,
			menu: pharsedMenu
		}
	}
}, initialState);


export default DataReducers;