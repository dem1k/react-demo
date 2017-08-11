import * as types from '../actions/actionTypes';

const initialState = {
    productItem: {},
    currentProduct: {},
    productsList: [],
    page: 1,
    isLoading: true,
    hasMore: true,
};

function productsReducer(state = initialState, action) {
    switch (action.type) {

        case types.CLEAR_PRODUCTS:
            return {
                ...state,
                categoryProducts: []
            };
            break;
        case types.FETCH_PRODUCTS:

            return {
                ...state,
                categoryProducts: action.payload.products,
                isLoading:false
            };
            break;
        case types.FETCH_PRODUCT:

            return {
                ...state,
                productItem: action.payload,
                isLoading:false
            };
            break;
        case types.LOAD_MORE_PRODUCTS:
            return {
                ...state,
                page: state.page+1,
                categoryProducts: [...state.categoryProducts, ...action.payload.products],
                isLoading:false
            };
            break;

        default:
            return state;
            break;
    }

}

export default productsReducer;