import * as types from '../actions/actionTypes';

const initialState = {
    categoryItem: {},
    categories: [],
    subCategories: [],
    categoryProducts: [],
    page: 1,
    isLoading: true,
    hasMore: true,
};

function categoriesReducer(state = initialState, action) {
    switch (action.type) {

        case types.CLEAR_PRODUCTS:
            return {
                ...state,
                categoryProducts: []
            };
            break;
        case types.FETCH_CATEGORIES:
            return {
                ...state,
                categories: action.payload.categories,
                isLoading:false
            };
            break;

        case types.FETCH_CATEGORY:
            return {
                ...state,
                categoryItem: action.payload.metadata.root,
                subCategories: action.payload.categories,
                isLoading:false
                };
            break;
        case types.FETCH_PRODUCTS:

            return {
                ...state,
                categoryProducts: action.payload.products,
                hasMore:(typeof action.payload.metadata !== 'undefined' && action.payload.products.length<action.payload.metadata.total),
                isLoading:false,
            };
            break;
        case types.LOAD_MORE_PRODUCTS:
            return {
                ...state,
                page: state.page+1,
                categoryProducts: [...state.categoryProducts, ...action.payload.products],
                hasMore:(typeof action.payload.metadata !== 'undefined' && action.payload.products.length<action.payload.metadata.total),
                isLoading:false,

            };
            break;

        default:
            return state;
            break;
    }

}

export default categoriesReducer;