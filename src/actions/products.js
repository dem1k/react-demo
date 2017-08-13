import * as types from './actionTypes';

const API_PID = 'uid4961-26577031-68';
const API_URL = 'http://api.shopstyle.com/api/v2';

export function fetchProduct(productId) {
    return (dispatch) => {
        fetch(
            `${API_URL}/products/${productId}?pid=${API_PID}`,
            {method: 'GET'}
        )
            .then(response => response.json())
            .then((json) => {
                console.log('procuct json:!!!!!>>',json);
                dispatch({
                    type: types.FETCH_PRODUCT,
                    payload: json
                });
            });
    };
}