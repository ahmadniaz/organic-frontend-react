import {
    LOGIN_SUCCESS, 
    LOGIN_ERROR
} from '../types';


const blogReducer = (state, action) => {
    switch (action.type) {

        case LOGIN_SUCCESS:
            return {
                ...state,
                blogs: action.payload,
            }
        case LOGIN_ERROR:
            return {
                ...state,
                currentBlog: action.payload
            }

        default:
            return state;
    };
}

export default blogReducer;