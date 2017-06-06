/**
 * Created by drunkengranite on 1/14/2017.
 */
import DataReducers from './data.reducer'
import stateReducers from './state.reducer'
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

const allReducers = combineReducers({
    state: stateReducers,
    data: DataReducers,
    router: routerReducer
});

export default allReducers;
