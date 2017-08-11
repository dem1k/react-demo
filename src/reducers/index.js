import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import homeReducer from './homeReducer';
import categoriesReducer from './categoriesReducer';
import productsReducer from './productsReducer';


const rootReducer = combineReducers({
    routing: routerReducer, homeReducer, categoriesReducer, productsReducer
});

export default rootReducer;
