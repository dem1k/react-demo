import * as types from './actionTypes';
export function showHome() {
    return (dispatch) => {
        dispatch({type: types.SHOW_HOME});
    }
}
export function handleSearch(string) {
    return (dispatch) => {
        dispatch({type: types.SEARCH, payload: {string:string}});
    }

}