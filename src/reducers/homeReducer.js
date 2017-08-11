import * as types from '../actions/actionTypes';

const initialState = {
    links: [
        {name: 'Categories', path: '/categoriesReducer'},
        {name: 'Posts', path: '/posts'}
    ]
}

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case types.SHOW_HOME:

            return {...state};
            break;
        case types.SEARCH:

            return {...state};
            break;

        default:
            return state;
            break;
    }

}

export default homeReducer;