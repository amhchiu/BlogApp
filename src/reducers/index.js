import { combineReducers } from 'redux';

const initialState = {
    blogposts: [],
    hasError: ''
};

const blogPostReducer = (state = initialState, {type, payload} ) => {
    switch(type){
        case 'LOAD_BLOGPOST_SUCCESS':
        console.log('success')
        console.log({...state});
            return {...state, blogposts: payload, hasError: ''};
        case 'LOAD_BLOGPOST_ERROR':
        console.log('no success')
            return {...state, hasError: payload};
        case 'CREATE_BLOGPOST_SUCCESS':
            console.log('create post success');
            console.log(payload)
            console.log(state.blogposts);
            return {...state, blogposts: [...state.blogposts, payload]}
        default:
            return state;
    }
};

export default combineReducers({
    blog: blogPostReducer
});
