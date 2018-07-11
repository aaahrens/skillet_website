import Immutable from 'immutable';
import { getWorksheet } from 'gsheets';
import {
    LOAD_MENU,
    SAVE_ABOUT,
    SAVE_GALLERY,
    SAVE_SPECIALS
} from '../constants';

export const saveSpecials = (specials) => ({
    type: SAVE_SPECIALS,
    payload: specials
});

export const loadMenu = (menu) => ({
    type: LOAD_MENU,
    payload: menu
});

export const saveAbout = (text) => ({
    type: SAVE_ABOUT,
    payload: text
});

export const saveGallery = (data) => ({
    type: SAVE_GALLERY,
    payload: data
});

export const getGallery = () => (dispatch) => {
    Promise.resolve(
        getWorksheet('1tOAxF5rsRz8bI0rkcTKDa3wQRdOZIEnjgCoZc8J8iz8', 'Gallery')
    )
        .then((response) => {
            dispatch(saveGallery(Immutable.fromJS(response.data)));
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getMenu = () => (dispatch) => {
    Promise.all([
        getWorksheet('1tOAxF5rsRz8bI0rkcTKDa3wQRdOZIEnjgCoZc8J8iz8', 'Items'),
        getWorksheet('1tOAxF5rsRz8bI0rkcTKDa3wQRdOZIEnjgCoZc8J8iz8', 'Sections')
    ])
        .then((values) => {
            const MenuItems = Immutable.fromJS(values[0].data);
            const Menu = Immutable.fromJS(values[1].data).map((menu) =>
                menu.set(
                    'Items',
                    MenuItems.filter((item) => {
                        if (!menu.get('Name') || !item.get('Section')) {
                            return false;
                        }
                        return (
                            menu.get('Name').trim() ===
                            item.get('Section').trim()
                        );
                    })
                )
            );

            dispatch(loadMenu(Menu));
        })
        .catch((error) => console.log(error));
};

export const getSpecials = () => (dispatch) => {
    Promise.resolve(
        getWorksheet('1tOAxF5rsRz8bI0rkcTKDa3wQRdOZIEnjgCoZc8J8iz8', 'Specials')
    )
        .then((response) => {
            dispatch(saveSpecials(Immutable.fromJS(response.data)));
        })
        .catch((error) => {
            console.log(error);
        });
};

export const fetchAll = () => (dispatch) => {
    dispatch(getMenu());
    dispatch(getGallery());
    dispatch(getSpecials());
};
