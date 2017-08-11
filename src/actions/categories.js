import * as types from './actionTypes';

const API_PID = 'uid4961-26577031-68';
const API_URL = 'http://api.shopstyle.com/api/v2';
const LIMIT = 25;

export function clearProducts() {
    return (dispatch) => { dispatch({type: types.CLEAR_PRODUCTS});

    };
}export function fetchCategories() {
    return (dispatch) => {
        fetch(
            `${API_URL}/categories/?pid=${API_PID}&depth=1`,
            {method: 'GET'}
        )
            .then(response => response.json())
            .then((json) => {
                console.log('fetchCategories DATA json:', json)

                dispatch({
                    type: types.FETCH_CATEGORIES,
                    payload: json
                });

            });
    };
}
export function fetchCategory(name) {
    return (dispatch) => {
        fetch(
            `${API_URL}/categories/?pid=${API_PID}&cat=${name}&depth=1`,
            {method: 'GET'}
        )
            .then(response => response.json())
            .then((json) => {
                dispatch({
                    type: types.FETCH_CATEGORY,
                    payload: json
                });

            })

        ;
    };
}

export function fetchProducts(category) {
    return (dispatch) => {
        fetch(
            `${API_URL}/products/?pid=${API_PID}&limit=${LIMIT}&cat=${category}`,
            {method: 'GET'}
        )
            .then(response => response.json())
            .then((json) => {

                dispatch({
                    type: types.FETCH_PRODUCTS,
                    payload: json
                });
            });
    };
}
export function fetchProduct(productId) {
    return (dispatch) => {
        fetch(
            `${API_URL}/products/${productId}?pid=${API_PID}`,
            {method: 'GET'}
        )
            .then(response => response.json())
            .then((json) => {

                dispatch({
                    type: types.FETCH_PRODUCT,
                    payload: json
                });
            });
    };
}
export function loadMoreProducts(category, page) {
    console.info('(category, page)>>>',category, page)

    let offset = (LIMIT * (page - 1))
    return (dispatch) => {
        fetch(
            `${API_URL}/products/?pid=${API_PID}&limit=${LIMIT}&offset=${offset}&cat=${category}`,
            {method: 'GET'}
        )
            .then(response => response.json())
            .then((json) => {
                dispatch({
                    type: types.LOAD_MORE_PRODUCTS,
                    payload: json
                });
            });
    };
}
