import {
    GET_MENU, LOAD_MENU, SpreadSheetURL
} from '../constants/constants'
import gsheet from 'gsheet-web'
import Immutable from 'immutable'

export const getMenu = () => {
    return (dispatch, getState) => {
		gsheet('1xoiFqF_RC4dotSul8x1Gn2mUxlrLgd0WzhKjPWVaBGk', (data)=> {
			const menu = Immutable.fromJS(data);
			dispatch(loadMenu(menu))
		});
    };
};


export const loadMenu = (menu) => {
    return {
        type: LOAD_MENU,
        payload: menu
    }
};


