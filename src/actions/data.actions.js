import {
    GET_MENU, LOAD_MENU, SpreadSheetURL
} from '../constants/constants'

import axios from 'axios'


export const getMenu = () => {
    return (dispatch, getState) => {

        axios.get(SpreadSheetURL)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };
};


export const loadMenu = (menu) => {
    return {
        type: LOAD_MENU,
        payload: menu
    }
};