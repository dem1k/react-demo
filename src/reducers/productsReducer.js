import * as types from '../actions/actionTypes';

const initialState = {
    productItem: {},
    // currentProduct: {},
    // productsList: [],
    // page: 1,
    isLoading: true,
    // hasMore: true,
};

function productsReducer(state = initialState, action) {
    switch (action.type) {


        case types.FETCH_PRODUCT:

            return {
                ...state,
                productItem: action.payload,
                isLoading:false
            };
            break;

        default:
            return state;
            break;
    }

}

export default productsReducer;