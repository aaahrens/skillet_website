/**
 * Created by drunkengranite on 1/14/2017.
 */
import { handleActions } from "redux-actions";
import { fromJS } from "immutable";
import { LOAD_MENU, SAVE_GALLERY, SAVE_SPECIALS } from "../constants";

const initialState = fromJS({
    menu: [],
    specials: [],
    aboutText: "",
    images: []
});

const DataReducers = handleActions(
    {
        [LOAD_MENU]: (state, action) => state.set("menu", action.payload),

        [SAVE_SPECIALS]: (state, action) =>
            state.set("specials", action.payload),

        [SAVE_GALLERY]: (state, action) => state.set("images", action.payload)
    },
    initialState
);

export default DataReducers;
