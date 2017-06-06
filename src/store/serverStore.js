/**
 * Created by drunkengranite on 6/3/17.
 */

import allReducers from '../reducers/all.reducers'
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


const middleware = applyMiddleware(
    thunk
);

const store = createStore(allReducers, middleware);


export default store;

