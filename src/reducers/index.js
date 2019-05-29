import { combineReducers } from 'redux';

/**
 * Hydrates state tree from reducer initialstate or from createStore initial state param which takes priority.
*/
const initialState = {
    blogposts: [],
    hasError: ''
};

const initialBlogState = {
    blogPostArray: [], //array of blogposts limited to n sorted by date. 
    blogPost: {} //single blogpost when viewing it.
};

const initialErrorState = {
    errors: []
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

const errorReducer = (state, action) => {
    
};

export default combineReducers({
    blog: blogPostReducer
});
