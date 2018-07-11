/**
 * Created by drunkengranite on 6/3/17.
 */

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import index from '../reducers/index';

const middleware = applyMiddleware(thunk);

const store = createStore(index, middleware);

export default store;
