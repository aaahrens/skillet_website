import {LOAD_MENU, SpreadSheetURL, MenuURL} from "../constants/constants";
import axios from "axios";
import Immutable from 'immutable'

const getMenuObj = () => {
	return axios.get(MenuURL);
};

const getItems= () => {
	return axios.get(SpreadSheetURL);
};




export const getMenu = () => {
	return (dispatch, getState) => {
		axios.all([getMenuObj(), getItems() ])
			.then(axios.spread((menu, items) => {

				const Items = Immutable.fromJS((items.data.split("\n")))
					.remove(0)
					.map(item => item.split(","))
					.filter((item) => item.length === 4)
					.map((item) => Immutable.Map()
						.set("Name", item[0])
						.set("Price", item[1])
						.set("Description", item[3])
						.set("Section", item[2]));


				console.dir(Items.toJS());

				//eh good enough for efficiency
				const Menu = Immutable.fromJS(menu.data.split("\n"))
					.remove(0)
					.map((item) => {
						let arr = item.split(',');
						let result =  arr.splice(0, 1);
						//generic errors
						result[0].replace(" ","" );
						result.push(arr.join(","));
						return result
					})
					.filter(item => item.length === 2)
					.map(header => Immutable.Map()
						.set("Name", header[0])
						.set("Description", header[1])
						.set("Items", Items.filter(
							(meal) => {
								return meal.get("Section").trim() === header[0]
							})
						));

				console.dir(Menu.toJS())
				dispatch(loadMenu(Menu))
			}))
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


