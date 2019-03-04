import { combineReducers } from 'redux';

const initialState = {
    blogposts: [],
    hasError: ''
};

const blogPostReducer = (state = initialState, {type, payload } ) => {
    switch(type){
        case 'LOAD_BLOGPOST_SUCCESS':
        console.log('success')
            return {...state, blogposts: payload, hasError: ''};
        case 'LOAD_BLOGPOST_ERROR':
        console.log('no success')
            return {...state, hasError: payload};
        default:
            return state;
    }
};

export default combineReducers({
    blog: blogPostReducer
});
