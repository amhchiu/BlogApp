import { combineReducers } from 'redux';

/**
 * Hydrates state tree from reducer initialstate or from createStore initial state param which takes priority.
*/

const initialBlogState = {
    blogPosts: [], //array of blogposts limited to n sorted by date. 
    currentPost: {} //single blogpost when viewing it.
};

const initialErrorState = {
    error: null
};

const blogPostReducer = (state = initialBlogState, action) => {
    switch (action.type) {
        case 'LOAD_BLOGPOSTS_SUCCESS':
            return { ...state, blogPosts: action.payload };
        case 'CREATE_BLOGPOST_SUCCESS':
            return { ...state, blogPosts: [...state.blogPosts, action.payload] } //add payload obj to state
        case 'LOAD_POST_SUCCESS':
            return { ...state, currentPost: action.payload }
        default:
            return state;
    }
};

const errorReducer = (state = initialErrorState, action) => {
    switch (action.type) {
        case 'LOAD_BLOGPOSTS_ERROR':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default combineReducers({
    blog: blogPostReducer,
    error: errorReducer
});
